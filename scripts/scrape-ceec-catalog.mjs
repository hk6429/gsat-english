import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outPath = path.join(root, ".sources", "catalog.json");
const base = "https://www.ceec.edu.tw";

const exams = [
  {
    era: "學測",
    menuId: "0J052424829869345634",
    pages: 19,
    titlePattern: /^(\d{2,3})學年度學科能力測驗－英文$/,
    expectedYears: Array.from({length: 33}, (_, i) => 115 - i),
  },
  {
    era: "指考",
    menuId: "0J052427633128416650",
    pages: 25,
    titlePattern: /^(\d{2,3})學年度指定科目考試－英文$/,
    expectedYears: Array.from({length: 20}, (_, i) => 110 - i),
  },
];

function decodeHtml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&nbsp;", " ");
}

function textOnly(value) {
  return decodeHtml(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());
}

function absoluteUrl(href) {
  return new URL(decodeHtml(href), base).href;
}

async function fetchPage(menuId, page) {
  const url = `${base}/xmfile?page=${page}&xsmsid=${menuId}`;
  const response = await fetch(url, {
    headers: {"user-agent": "gsat-english official-source catalog builder"},
  });
  if (!response.ok) throw new Error(`CEEC ${response.status}: ${url}`);
  return {url, html: await response.text()};
}

function parseRows({era, titlePattern}, pageUrl, html) {
  const records = [];
  for (const rowMatch of html.matchAll(/<tr>([\s\S]*?)<\/tr>/gi)) {
    const row = rowMatch[1];
    const titleCell = row.match(/<td class="title">([\s\S]*?)<\/td>/i);
    if (!titleCell) continue;
    const title = textOnly(titleCell[1]);
    const titleMatch = title.match(titlePattern);
    if (!titleMatch) continue;

    const files = [...row.matchAll(/<a\s+href="([^"]+)"[^>]*?(?:title="([^"]*)")?[^>]*>([\s\S]*?)<\/a>/gi)]
      .map(match => ({
        label: textOnly(match[3]),
        title: decodeHtml(match[2] || ""),
        url: absoluteUrl(match[1]),
      }))
      .filter(file => file.url.includes("/files/"));

    records.push({
      era,
      year: Number(titleMatch[1]),
      title,
      page: pageUrl,
      files,
    });
  }
  return records;
}

const catalog = [];
for (const exam of exams) {
  const pages = await Promise.all(
    Array.from({length: exam.pages}, (_, i) => fetchPage(exam.menuId, i + 1))
  );
  const records = pages.flatMap(page => parseRows(exam, page.url, page.html));
  const years = records.map(record => record.year).sort((a, b) => b - a);
  const missing = exam.expectedYears.filter(year => !years.includes(year));
  const duplicates = years.filter((year, index) => years.indexOf(year) !== index);
  if (missing.length || duplicates.length) {
    throw new Error(
      `${exam.era} catalog mismatch; missing=${missing.join(",")}; duplicates=${duplicates.join(",")}`
    );
  }
  catalog.push(...records);
}

catalog.sort((a, b) => a.era.localeCompare(b.era, "zh-Hant") || b.year - a.year);
fs.mkdirSync(path.dirname(outPath), {recursive: true});
fs.writeFileSync(outPath, `${JSON.stringify({
  generatedAt: new Date().toISOString(),
  source: "大學入學考試中心歷年試題及答題卷",
  scope: {
    學測: "83–115 學年度一般試題，不含補考",
    指考: "91–110 學年度一般試題",
  },
  records: catalog,
}, null, 2)}\n`);

console.log(JSON.stringify({
  output: outPath,
  total: catalog.length,
  gsat: catalog.filter(record => record.era === "學測").length,
  ast: catalog.filter(record => record.era === "指考").length,
  recordsMissingQuestionPdf: catalog.filter(record =>
    !record.files.some(file => file.label === "試題內容" && file.url.toLowerCase().includes(".pdf"))
  ).map(record => `${record.era}${record.year}`),
  recordsMissingAnswer: catalog.filter(record =>
    !record.files.some(file => file.label.includes("選擇題答案"))
  ).map(record => `${record.era}${record.year}`),
}, null, 2));
