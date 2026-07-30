import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outRoot = path.join(root, ".sources", "stats");
const origin = "https://www.ceec.edu.tw";
const exams = [
  {
    prefix: "g",
    era: "學測",
    menuId: "0J018604485538810196",
    titlePattern: /^(\d{2,3})學年度學科能力測驗統計圖表$/,
    min: 91,
    max: 115,
  },
  {
    prefix: "z",
    era: "指考",
    menuId: "0J018611000723433352",
    titlePattern: /^(\d{2,3})學年度指定科目考試統計圖表$/,
    min: 91,
    max: 110,
  },
];

const absolute = href => new URL(href.replaceAll("&amp;", "&"), origin).href;
const plain = html => html.replace(/<[^>]+>/g, " ").replace(/&nbsp;|&#160;/g, " ").replace(/\s+/g, " ").trim();
const extension = url => {
  const name = decodeURIComponent(new URL(url).pathname);
  const match = name.match(/\.(xlsx?|pdf)$/i);
  return match ? match[1].toLowerCase() : "bin";
};

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.text();
}

async function fetchFile(url, target) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length < 1024) throw new Error(`檔案過小 ${bytes.length}: ${url}`);
  fs.writeFileSync(target, bytes);
  return bytes.length;
}

function links(html) {
  return [...html.matchAll(/<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)]
    .map(match => ({url: absolute(match[1]), label: plain(match[2])}));
}

const records = [];
for (const exam of exams) {
  const detailPages = new Map();
  for (let page = 1; page <= 3; page += 1) {
    const menuUrl = `${origin}/xmdoc?page=${page}&xsmsid=${exam.menuId}`;
    const html = await fetchText(menuUrl);
    for (const link of links(html)) {
      const match = link.label.match(exam.titlePattern);
      if (!match) continue;
      const year = Number(match[1]);
      if (year < exam.min || year > exam.max) continue;
      detailPages.set(year, link.url);
    }
  }

  const expected = Array.from({length: exam.max - exam.min + 1}, (_, index) => exam.min + index);
  const missing = expected.filter(year => !detailPages.has(year));
  if (missing.length) throw new Error(`${exam.era}統計頁缺年份：${missing.join(",")}`);

  for (const year of expected) {
    const pageUrl = detailPages.get(year);
    const pageLinks = links(await fetchText(pageUrl));
    const passDisc = pageLinks.find(link =>
      /英文科答對率及鑑別(?:度|指數)表/.test(link.label) ||
      /^各科答對率及鑑別(?:度|指數)表$/.test(link.label)
    );
    const option = pageLinks.find(link =>
      /^英文科選擇題選項分析/.test(link.label) ||
      /^各科選擇(?:（填）|\\(填\\))?題選項分析$/.test(link.label) ||
      /^各科選擇題選項分析$/.test(link.label)
    );
    if (!passDisc || !option) {
      throw new Error(`${exam.era}${year} 缺統計連結：passDisc=${Boolean(passDisc)} option=${Boolean(option)}`);
    }

    const dir = path.join(outRoot, `${exam.prefix}${year}`);
    fs.mkdirSync(dir, {recursive: true});
    const files = {};
    for (const [kind, link] of Object.entries({passDisc, option})) {
      const ext = extension(link.url);
      const name = `${kind}.${ext}`;
      const bytes = await fetchFile(link.url, path.join(dir, name));
      files[kind] = {name, label: link.label, url: link.url, bytes};
    }
    const record = {era: exam.era, year, page: pageUrl, files};
    fs.writeFileSync(path.join(dir, "source.json"), `${JSON.stringify(record, null, 2)}\n`);
    records.push(record);
  }
}

fs.mkdirSync(outRoot, {recursive: true});
fs.writeFileSync(path.join(outRoot, "catalog.json"), `${JSON.stringify({
  generatedAt: new Date().toISOString(),
  records,
}, null, 2)}\n`);
console.log(JSON.stringify({
  records: records.length,
  gsat: records.filter(record => record.era === "學測").length,
  ast: records.filter(record => record.era === "指考").length,
  files: records.length * 2,
}, null, 2));
