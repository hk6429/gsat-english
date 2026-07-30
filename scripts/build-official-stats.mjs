import fs from "node:fs";
import path from "node:path";
import {execFileSync} from "node:child_process";
import {fileURLToPath} from "node:url";
import * as XLSX from "xlsx";

XLSX.set_fs(fs);

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const catalogPath = path.join(root, ".sources", "stats", "catalog.json");
const catalog = JSON.parse(fs.readFileSync(catalogPath, "utf8"));
const output = {};
const sources = {};
const reports = [];

const cellText = value => String(value ?? "").trim();
const number = value => {
  const parsed = Number(cellText(value).replace(/[*％%]/g, ""));
  return Number.isFinite(parsed) ? parsed : null;
};
const questionNumber = value => {
  const match = cellText(value).match(/\d{1,3}/);
  return match ? Number(match[0]) : null;
};

function englishRows(file) {
  const workbook = XLSX.readFile(file);
  const sheetName = workbook.SheetNames.find(name => name === "英文" || name === "英")
    || workbook.SheetNames.find(name => {
      const rows = XLSX.utils.sheet_to_json(workbook.Sheets[name], {header: 1, raw: true, defval: ""});
      return rows.slice(0, 8).some(row => row.some(value => /英文科/.test(cellText(value))));
    })
    || workbook.SheetNames[0];
  return XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header: 1, raw: true, defval: ""});
}

function findHeader(rows, required) {
  const index = rows.findIndex(row => required.every(label => row.some(value => cellText(value) === label)));
  if (index < 0) throw new Error(`找不到表頭：${required.join(",")}`);
  return index;
}

function parsePassDisc(file) {
  const rows = englishRows(file);
  const headerIndex = findHeader(rows, ["題號", "P", "D"]);
  const header = rows[headerIndex].map(cellText);
  const subjectIndex = header.findIndex(value => value === "科目");
  const noIndex = header.findIndex(value => value === "題號");
  const passIndex = header.findIndex(value => value === "P");
  const discIndex = header.findIndex(value => value === "D");
  const result = new Map();
  let offset = 0;
  let lastRawNo = 0;
  let maxAssignedNo = 0;
  for (const row of rows.slice(headerIndex + 1)) {
    if (subjectIndex >= 0 && cellText(row[subjectIndex]) && !/英文/.test(cellText(row[subjectIndex]))) {
      if (result.size) break;
      continue;
    }
    const rawNo = questionNumber(row[noIndex]);
    const pass = number(row[passIndex]);
    const disc = number(row[discIndex]);
    if (!rawNo || pass == null || disc == null) continue;
    if (rawNo <= lastRawNo && result.has(rawNo + offset)) offset = maxAssignedNo;
    const no = rawNo + offset;
    lastRawNo = rawNo;
    maxAssignedNo = Math.max(maxAssignedNo, no);
    if (result.has(no)) throw new Error(`${file} 答對率表題號重複：${no}`);
    result.set(no, {pass: pass / 100, disc: disc / 100});
  }
  return result;
}

function parseOptions(file) {
  const rows = englishRows(file);
  const headerIndex = findHeader(rows, ["題號"]);
  const header = rows[headerIndex].map(cellText);
  const subjectIndex = header.findIndex(value => value === "科目");
  const noIndex = header.findIndex(value => value === "題號");
  const groupIndex = header.findIndex(value => value === "組別" || value === "群組");
  const fallbackGroupIndex = groupIndex >= 0 ? groupIndex : noIndex + 1;
  const unansweredIndex = header.findIndex(value => value === "未答" || value === "NONE");
  const optionIndexes = Object.fromEntries(
    "ABCDEFGHIJKL".split("").map(letter => [letter, header.findIndex(value => value === letter)])
  );
  const result = new Map();
  let currentNo = null;
  let offset = 0;
  let lastRawNo = 0;
  let maxAssignedNo = 0;
  let pendingTotal = null;
  for (const row of rows.slice(headerIndex + 1)) {
    if (subjectIndex >= 0 && cellText(row[subjectIndex]) && !/英文/.test(cellText(row[subjectIndex]))) {
      if (result.size) break;
      continue;
    }
    const rawGroup = cellText(row[fallbackGroupIndex]).toUpperCase();
    const group = rawGroup.endsWith("T") ? "T" : rawGroup === "H" ? "H" : rawGroup === "L" ? "L" : "";
    if (!group) continue;
    const rawNo = questionNumber(row[noIndex]);
    const options = {};
    for (const [letter, index] of Object.entries(optionIndexes)) {
      if (index < 0) continue;
      const value = number(row[index]);
      if (value != null && cellText(row[index]) !== "") options[letter] = value;
    }
    const unanswered = unansweredIndex >= 0 ? number(row[unansweredIndex]) : null;
    const parsedRow = {options, unanswered};

    if (group === "T" && !rawNo) {
      pendingTotal = parsedRow;
      currentNo = null;
      continue;
    }
    if (rawNo && (group === "T" || currentNo == null)) {
      if (rawNo <= lastRawNo && result.has(rawNo + offset)) offset = maxAssignedNo;
      currentNo = rawNo + offset;
      lastRawNo = rawNo;
      maxAssignedNo = Math.max(maxAssignedNo, currentNo);
    }
    if (!currentNo) continue;
    const item = result.get(currentNo) || {};
    if (pendingTotal) {
      item.T = pendingTotal;
      pendingTotal = null;
    }
    item[group] = parsedRow;
    result.set(currentNo, item);
  }
  return result;
}

function pdfText(file) {
  const target = file.replace(/\.pdf$/i, ".txt");
  execFileSync("pdftotext", ["-layout", file, target], {stdio: "ignore"});
  return fs.readFileSync(target, "utf8");
}

function parsePdfPassDisc(file) {
  const result = new Map();
  for (const line of pdfText(file).split("\n")) {
    const match = line.match(/^\s*(\d{1,3})\s+(-?\d+(?:\.\d+)?(?:\s+-?\d+(?:\.\d+)?){10,14})\s*$/);
    if (!match) continue;
    const values = match[2].trim().split(/\s+/).map(Number);
    if (values.length < 13) continue;
    const no = Number(match[1]);
    result.set(no, {
      pass: values[0] / 100,
      disc: (values[1] - values[2]) / 100,
    });
  }
  return result;
}

function parsePdfOptions(file) {
  const result = new Map();
  let pendingTotal = null;
  let currentNo = null;
  for (const line of pdfText(file).split("\n")) {
    const groupMatch = line.match(/(?:^|\s)(T|H|L)(?:\s|$)/);
    if (!groupMatch) continue;
    const group = groupMatch[1];
    const before = line.slice(0, groupMatch.index).trim();
    const after = line.slice(groupMatch.index + groupMatch[0].indexOf(group) + 1);
    const noMatch = before.match(/(\d{1,3})\s*$/);
    const values = [...after.matchAll(/\*?\s*(-?\d+(?:\.\d+)?)/g)].map(match => Number(match[1]));
    if (values.length !== 11) continue;
    const no = noMatch ? Number(noMatch[1]) : null;
    const row = {
      unanswered: values[0],
      options: Object.fromEntries("ABCDEFGHIJ".split("").map((letter, index) => [letter, values[index + 1]])),
    };
    if (group === "T") {
      pendingTotal = row;
      if (no) {
        currentNo = no;
        result.set(no, {T: row});
        pendingTotal = null;
      }
      continue;
    }
    if (no) {
      currentNo = no;
      if (pendingTotal) {
        result.set(no, {T: pendingTotal});
        pendingTotal = null;
      }
    }
    if (!currentNo) continue;
    const item = result.get(currentNo) || {};
    item[group] = row;
    result.set(currentNo, item);
  }
  return result;
}

for (const record of catalog.records) {
  const prefix = record.era === "學測" ? "g" : "z";
  const bankKey = `${record.era}|${record.year}`;
  const dir = path.join(root, ".sources", "stats", `${prefix}${record.year}`);
  const passFile = path.join(dir, record.files.passDisc.name);
  const optionFile = path.join(dir, record.files.option.name);
  const isWorkbook = passFile.endsWith(".xls") && optionFile.endsWith(".xls");
  const passDisc = isWorkbook ? parsePassDisc(passFile) : parsePdfPassDisc(passFile);
  const options = isWorkbook ? parseOptions(optionFile) : parsePdfOptions(optionFile);
  if (!passDisc.size || !options.size) {
    reports.push({bankKey, skipped: "PDF 無法可靠擷取，保留空白"});
    continue;
  }
  const questionNumbers = new Set([...passDisc.keys(), ...options.keys()]);
  for (const no of questionNumbers) {
    const pass = passDisc.get(no);
    const option = options.get(no);
    output[`${bankKey}|${no}`] = {
      ...(pass || {}),
      ...(option?.T ? {all: option.T.options} : {}),
      ...(option?.L ? {low: option.L.options} : {}),
      ...(option ? {
        unanswered: {
          all: option.T?.unanswered ?? null,
          low: option.L?.unanswered ?? null,
        },
      } : {}),
    };
  }
  sources[bankKey] = {
    page: record.page,
    passDisc: record.files.passDisc.url,
    option: record.files.option.url,
  };
  reports.push({
    bankKey,
    passDisc: passDisc.size,
    option: options.size,
    merged: questionNumbers.size,
  });
}

const script = [
  "/* 由 scripts/build-official-stats.mjs 從大考中心正式統計表產生。 */",
  `window.OPTION_STATS = ${JSON.stringify(output, null, 2)};`,
  `window.OPTION_STATS_SOURCES = ${JSON.stringify(sources, null, 2)};`,
  "for (const bank of (window.BANK || [])) {",
  "  const bankKey = `${bank.era}|${bank.year}`;",
  "  for (const q of bank.questions) {",
  "    const stat = window.OPTION_STATS[`${bankKey}|${q.no}`];",
  "    if (!stat) continue;",
  "    if (Number.isFinite(stat.pass)) q.pass = stat.pass;",
  "    if (Number.isFinite(stat.disc)) q.disc = stat.disc;",
  "    if (stat.all) q.opt = stat.all;",
  "    if (stat.low) q.low = {opt: stat.low, unanswered: stat.unanswered?.low ?? null};",
  "    if (stat.unanswered) q.optUnanswered = stat.unanswered.all;",
  "    q.optSource = window.OPTION_STATS_SOURCES[bankKey];",
  "  }",
  "}",
  "",
].join("\n");
fs.writeFileSync(path.join(root, "data", "option-stats.js"), script);
console.log(JSON.stringify({
  output: "data/option-stats.js",
  records: Object.keys(output).length,
  sources: Object.keys(sources).length,
  reports,
}, null, 2));
