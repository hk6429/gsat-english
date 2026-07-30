import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = path.join(root, ".sources");
const catalog = JSON.parse(fs.readFileSync(path.join(sourceRoot, "catalog.json"), "utf8"));

function extension(url) {
  const pathname = new URL(url).pathname.toLowerCase();
  for (const ext of [".docx", ".pdf", ".doc"]) {
    if (pathname.endsWith(ext)) return ext;
  }
  return path.extname(pathname) || ".bin";
}

function selectFiles(record) {
  const questionFiles = record.files.filter(file => file.label === "試題內容");
  const questionPdf = questionFiles.find(file => extension(file.url) === ".pdf");
  const questionDoc = questionFiles.find(file => [".doc", ".docx"].includes(extension(file.url)));
  const answer = record.files.find(file => file.label.includes("選擇題答案"));
  const scoring = record.files.find(file => file.label.includes("非選擇題評分原則"));
  const cover = record.files.find(file => file.label === "封面");
  if (!questionPdf || !answer) throw new Error(`${record.era}${record.year} 缺正式題本或答案`);
  return [
    {name: "question.pdf", file: questionPdf},
    ...(questionDoc ? [{name: `question${extension(questionDoc.url)}`, file: questionDoc}] : []),
    {name: "answer.pdf", file: answer},
    ...(scoring ? [{name: "scoring.pdf", file: scoring}] : []),
    ...(cover ? [{name: "cover.pdf", file: cover}] : []),
  ];
}

async function download(url, destination) {
  if (fs.existsSync(destination) && fs.statSync(destination).size > 1024) {
    return {status: "cached", bytes: fs.statSync(destination).size};
  }
  const response = await fetch(url, {
    headers: {"user-agent": "gsat-english official-source downloader"},
  });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length <= 1024) throw new Error(`下載檔案過小：${url} (${bytes.length} bytes)`);
  fs.writeFileSync(destination, bytes);
  return {status: "downloaded", bytes: bytes.length};
}

const tasks = [];
for (const record of catalog.records) {
  const prefix = record.era === "學測" ? "g" : "z";
  const directory = path.join(sourceRoot, `${prefix}${record.year}`);
  fs.mkdirSync(directory, {recursive: true});
  const selected = selectFiles(record);
  fs.writeFileSync(path.join(directory, "source.json"), `${JSON.stringify({
    era: record.era,
    year: record.year,
    catalogPage: record.page,
    files: selected.map(item => ({name: item.name, ...item.file})),
  }, null, 2)}\n`);
  for (const item of selected) {
    tasks.push({
      key: `${record.era}${record.year}:${item.name}`,
      url: item.file.url,
      destination: path.join(directory, item.name),
    });
  }
}

let nextTask = 0;
const results = [];
async function worker() {
  while (nextTask < tasks.length) {
    const task = tasks[nextTask++];
    const result = await download(task.url, task.destination);
    results.push({key: task.key, ...result});
    console.log(`${result.status.padEnd(10)} ${String(result.bytes).padStart(9)} ${task.key}`);
  }
}

await Promise.all(Array.from({length: 6}, worker));

console.log(JSON.stringify({
  records: catalog.records.length,
  files: results.length,
  downloaded: results.filter(result => result.status === "downloaded").length,
  cached: results.filter(result => result.status === "cached").length,
  bytes: results.reduce((sum, result) => sum + result.bytes, 0),
}, null, 2));
