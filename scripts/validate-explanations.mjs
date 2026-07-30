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
let juniorHighReady = 0;
let recommendedLengthReady = 0;

for (const paper of context.window.BANK) {
  let paperExplained = 0;
  for (const question of paper.questions) {
    total += 1;
    if (!question.explain) continue;
    explained += 1;
    paperExplained += 1;

    const label = `${paper.era}${paper.year} 第 ${question.no} 題`;
    const explanation = String(question.explain).trim();
    const plainExplanation = explanation
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<[^>]+>/g, "")
      .trim();
    const optionKeys = Object.keys(question.options || {});
    const imageOnlyOptions = optionKeys.length > 0 && optionKeys.every(key => {
      const value = String(question.options[key] || "").trim();
      return !value || /^Image [A-Z]$/i.test(value);
    });
    const minimumLength = 100;
    const recommendedLength = optionKeys.length === 4 ? 160 : 120;
    if (plainExplanation.length < minimumLength) {
      errors.push(`${label}解析過短（${plainExplanation.length}/${minimumLength}）`);
    }
    if (plainExplanation.length >= recommendedLength) recommendedLengthReady += 1;
    if (!/解題關鍵[：:]/.test(plainExplanation)) {
      errors.push(`${label}缺少「解題關鍵」`);
    }
    if (optionKeys.length === 4 && !imageOnlyOptions) {
      for (const key of optionKeys) {
        if (!new RegExp(`\\(${key}\\)`, "i").test(explanation)) {
          errors.push(`${label}缺少 (${key}) 選項說明`);
        }
      }
    }
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
    if (
      plainExplanation.length >= minimumLength &&
      /解題關鍵[：:]/.test(plainExplanation) &&
      (optionKeys.length !== 4 || imageOnlyOptions || optionKeys.every(key =>
        new RegExp(`\\(${key}\\)`, "i").test(explanation)
      ))
    ) {
      juniorHighReady += 1;
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
console.log(`國中生友善格式：${juniorHighReady}/${total}`);
console.log(`達建議篇幅：${recommendedLengthReady}/${total}`);

if (errors.length) {
  console.error(`解析品質錯誤：${errors.length}`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
}
