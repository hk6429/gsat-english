import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import {fileURLToPath} from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const context = {window: {}};
context.window.window = context.window;
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "data", "bank.js"), "utf8"), context);

const errors = [];
const rows = [];
let total = 0;
let explained = 0;

for (const paper of context.window.BANK) {
  let paperExplained = 0;
  for (const question of paper.questions) {
    total += 1;
    if (!question.explain) continue;
    explained += 1;
    paperExplained += 1;

    const label = `${paper.era}${paper.year} 第 ${question.no} 題`;
    const explanation = String(question.explain).trim();
    if (explanation.length < 12) errors.push(`${label}解析過短`);
    if (/TODO|待補|待確認|undefined|null/i.test(explanation)) {
      errors.push(`${label}含占位文字`);
    }

    const accepted = new Set(
      Array.isArray(question.acceptedAnswers) && question.acceptedAnswers.length
        ? question.acceptedAnswers
        : String(question.answer).split(",")
    );
    for (const match of explanation.matchAll(/(?:故|因此|所以|NOT\s*題)?選\s*([A-Z])(?:。|，|$)/g)) {
      if (!accepted.has(match[1])) {
        errors.push(`${label}解析結論 ${match[1]} 與正式答案 ${[...accepted].join("/")} 不符`);
      }
    }
  }
  rows.push({
    paper: `${paper.era}${paper.year}`,
    explained: paperExplained,
    total: paper.questions.length,
    missing: paper.questions.length - paperExplained
  });
}

for (const row of rows.filter(row => row.missing > 0)) {
  console.log(`${row.paper}: ${row.explained}/${row.total}，尚缺 ${row.missing}`);
}
console.log(`解析覆蓋：${explained}/${total}，尚缺 ${total - explained}`);

if (errors.length) {
  console.error(`解析品質錯誤：${errors.length}`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
}
