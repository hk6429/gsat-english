import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import {fileURLToPath} from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const allowedCategories = new Set(["C1", "C2", "C3", "C4", "C5"]);
const allowedTags = new Set([
  "詞義辨析", "語境搭配", "轉承語", "語境選詞", "邏輯關係", "時態語意",
  "篇章指涉", "主旨連貫", "文意選填", "篇章結構", "主旨判讀", "語境推義",
  "細節檢索", "圖文整合", "篇章理解", "指涉判讀", "資訊排序", "推論判讀", "多文本整合",
]);
const answerKeys = question => Array.isArray(question.acceptedAnswers) && question.acceptedAnswers.length
  ? question.acceptedAnswers
  : String(question.answer || "").split(",").filter(Boolean);

function loadBank(file) {
  const context = {window: {BANK: []}};
  vm.createContext(context);
  vm.runInContext(fs.readFileSync(file, "utf8"), context, {filename: file});
  if (context.window.BANK.length !== 1) {
    throw new Error(`${path.basename(file)} 必須且只能加入一個年度題庫`);
  }
  return context.window.BANK[0];
}

function officialFiles(prefix, year) {
  const dir = path.join(root, ".sources", `${prefix}${year}`);
  if (!fs.existsSync(dir)) return null;
  const source = JSON.parse(fs.readFileSync(path.join(dir, "source.json"), "utf8"));
  const answerText = path.join(dir, "answer-pdf.txt");
  return {
    dir,
    source,
    answerText: fs.existsSync(answerText) ? fs.readFileSync(answerText, "utf8") : "",
  };
}

function parseModernAnswerTable(text) {
  const answers = new Map();
  const normalized = text.replaceAll("／", "/");
  const pattern = /(?:^|\s)(\d{1,2})\s+([A-L/](?:\s*[,、]?\s*[A-L])*)(?=\s|$)/g;
  for (const match of normalized.matchAll(pattern)) {
    const no = Number(match[1]);
    const answer = match[2].replace(/[^A-L/]/g, "");
    if (!answer) continue;
    if (answers.has(no) && answers.get(no) !== answer) {
      throw new Error(`官方答案表第 ${no} 題出現衝突：${answers.get(no)} / ${answer}`);
    }
    answers.set(no, answer);
  }
  return answers;
}

function englishAnswerSection(text) {
  const pages = text.split("\f");
  const start = pages.findIndex(page => /英文(?:考科|科)?.{0,20}(?:參考)?答案/s.test(page.slice(0, 500)));
  if (start < 0) return text;
  return pages[start];
}

const annualFiles = fs.readdirSync(path.join(root, "data"))
  .filter(name => /^(g|z)\d{2,3}\.js$/.test(name))
  .sort();
const reports = [];
let failed = false;

for (const name of annualFiles) {
  const [, prefix, yearText] = name.match(/^(g|z)(\d{2,3})\.js$/);
  const year = Number(yearText);
  const era = prefix === "g" ? "學測" : "指考";
  const bank = loadBank(path.join(root, "data", name));
  const errors = [];

  if (bank.year !== year || bank.era !== era) errors.push(`年度／考試別不符檔名`);
  if (!bank.questions?.length) errors.push("沒有題目");
  if (new Set(bank.questions.map(q => q.no)).size !== bank.questions.length) errors.push("題號重複");

  for (const question of bank.questions || []) {
    if (!allowedCategories.has(question.cat)) errors.push(`第 ${question.no} 題分類不受控：${question.cat}`);
    for (const tag of question.tags || []) {
      if (!allowedTags.has(tag)) errors.push(`第 ${question.no} 題標籤不受控：${tag}`);
    }
    if (!question.answer) errors.push(`第 ${question.no} 題缺答案`);
    for (const answer of answerKeys(question)) {
      if (!Object.hasOwn(question.options || {}, answer)) {
        errors.push(`第 ${question.no} 題答案 ${answer} 不在選項內`);
      }
    }
    if (question.group && !bank.groups?.[question.group]) errors.push(`第 ${question.no} 題找不到題組 ${question.group}`);
    if (question.image) {
      if (!fs.existsSync(path.join(root, question.image))) errors.push(`第 ${question.no} 題圖片不存在`);
      if (!question.imageAlt) errors.push(`第 ${question.no} 題圖片缺替代文字`);
    }
  }

  const official = officialFiles(prefix, year);
  let officialCompared = 0;
  if (official) {
    if (bank.answerVerification?.method === "manual-visual") {
      const pdfPath = path.join(official.dir, "answer.pdf");
      const digest = fs.existsSync(pdfPath)
        ? (await import("node:crypto")).createHash("sha256").update(fs.readFileSync(pdfPath)).digest("hex")
        : "";
      if (digest !== bank.answerVerification.sourceSha256) {
        errors.push("人工目視核對所用正式答案 PDF 雜湊不符");
      } else {
        officialCompared = bank.questions.length;
      }
    } else {
      const answerMap = parseModernAnswerTable(englishAnswerSection(official.answerText));
      for (const question of bank.questions || []) {
        if (!answerMap.has(question.no)) continue;
        officialCompared += 1;
        const actual = String(question.answer).replaceAll(",", "");
        const expected = answerMap.get(question.no);
        if (actual !== expected) errors.push(`第 ${question.no} 題答案 ${actual}，官方為 ${expected}`);
      }
    }
    if (officialCompared !== bank.questions.length) {
      errors.push(`正式答案僅核對 ${officialCompared}/${bank.questions.length} 題`);
    }
  } else {
    errors.push("找不到正式題本／答案來源資料");
  }

  reports.push({
    file: name,
    questions: bank.questions?.length || 0,
    groups: Object.keys(bank.groups || {}).length,
    officialCompared,
    errors,
  });
  if (errors.length) failed = true;
}

console.log(JSON.stringify({banks: reports.length, reports}, null, 2));
if (failed) process.exitCode = 1;
