import fs from "node:fs";
import path from "node:path";
import {fileURLToPath} from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = path.join(root, "data");
const yearlyPattern = /^(g|z)(\d{2,3})\.js$/;
const eraOrder = new Map([["g", 0], ["z", 1]]);

const files = fs.readdirSync(dataDir)
  .map(name => {
    const match = name.match(yearlyPattern);
    return match ? {name, prefix: match[1], year: Number(match[2])} : null;
  })
  .filter(Boolean)
  .sort((a, b) => eraOrder.get(a.prefix) - eraOrder.get(b.prefix) || b.year - a.year);

if (!files.length) throw new Error("找不到任何年度題庫檔案");

const chunks = [
  "/* 由 scripts/build-bank.mjs 自動產生；請修改 data/g*.js 或 data/z*.js。 */",
  "window.BANK = [];",
];
for (const file of files) {
  const source = fs.readFileSync(path.join(dataDir, file.name), "utf8")
    .replace(/^\uFEFF/, "")
    .trim();
  chunks.push(`\n/* ${file.name} */\n${source}`);
}
chunks.push("");

fs.writeFileSync(path.join(dataDir, "bank.js"), chunks.join("\n"));
console.log(JSON.stringify({
  output: "data/bank.js",
  banks: files.length,
  files: files.map(file => file.name),
}, null, 2));
