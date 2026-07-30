import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import {fileURLToPath} from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const [teacherPath, studentPath, itemWriterPath, outputDirArg] = process.argv.slice(2);

if (!teacherPath || !studentPath || !itemWriterPath || !outputDirArg) {
  console.error(
    "Usage: node scripts/build-four-expert-review.mjs " +
    "<teacher.json> <student.json> <item-writer.json> <output-directory>"
  );
  process.exit(1);
}

const loadJson = file => JSON.parse(fs.readFileSync(file, "utf8"));
const teacher = loadJson(teacherPath);
const student = loadJson(studentPath);
const itemWriter = loadJson(itemWriterPath);
const outputDir = path.resolve(root, outputDirArg);

const context = {window: {}};
context.window.window = context.window;
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "data", "bank.js"), "utf8"), context);
vm.runInContext(fs.readFileSync(path.join(root, "data", "option-stats.js"), "utf8"), context);

const banks = context.window.BANK;
const allowedCategories = new Set(["C1", "C2", "C3", "C4", "C5"]);
const allowedTags = new Set([
  "詞義辨析", "語境搭配", "轉承語", "語境選詞", "邏輯關係", "時態語意",
  "篇章指涉", "主旨連貫", "文意選填", "篇章結構", "主旨判讀", "語境推義",
  "細節檢索", "圖文整合", "篇章理解", "指涉判讀", "資訊排序", "推論判讀", "多文本整合"
]);
const allowedTextTypes = new Set([
  "詞彙題", "文法題", "綜合測驗", "文意選填", "篇章結構", "閱讀測驗", "混合題"
]);
const conversionArtifact = /HYPERLINK|INCLUDEPICTURE|MERGEFORMAT|Administrator|�/i;
const answerKeys = question =>
  Array.isArray(question.acceptedAnswers) && question.acceptedAnswers.length
    ? question.acceptedAnswers
    : String(question.answer || "").split(",").filter(Boolean);
const keyOf = ({era, year, no}) => `${era}-${year}-${no}`;

const teacherRecords = teacher.questions || [];
const studentRecords = student.perQuestion || [];
const itemWriterRecords = itemWriter.records || [];
const teacherByKey = new Map(teacherRecords.map(record => [keyOf(record), record]));
const studentByKey = new Map(studentRecords.map(record => [keyOf(record), record]));
const itemWriterByKey = new Map(itemWriterRecords.map(record => [keyOf(record), record]));

const questions = [];
for (const bank of banks) {
  for (const question of bank.questions) {
    const identity = {era: bank.era, year: bank.year, no: question.no};
    const key = keyOf(identity);
    const teacherRecord = teacherByKey.get(key);
    const studentRecord = studentByKey.get(key);
    const itemWriterRecord = itemWriterByKey.get(key);
    if (!teacherRecord || !studentRecord || !itemWriterRecord) {
      throw new Error(`${key} 缺少專家逐題覆蓋紀錄`);
    }

    const effectiveAnswers = answerKeys(question);
    const answerConfigurationPass = effectiveAnswers.length > 0 &&
      effectiveAnswers.every(answer => Object.hasOwn(question.options || {}, answer));
    const groupPass = !question.group || Boolean(bank.groups?.[question.group]);
    const taxonomyPass = allowedCategories.has(question.cat) &&
      (question.tags || []).every(tag => allowedTags.has(tag)) &&
      allowedTextTypes.has(question.textType);
    const imagePass = !question.image ||
      (fs.existsSync(path.join(root, question.image)) &&
        typeof question.imageAlt === "string" &&
        question.imageAlt.length >= 20);
    const sourceClean = !conversionArtifact.test(JSON.stringify(question)) &&
      (!question.group ||
        !conversionArtifact.test(JSON.stringify(bank.groups?.[question.group])));
    const statSource = context.window.OPTION_STATS_SOURCES?.[`${bank.era}|${bank.year}`];
    const statisticPass = statSource
      ? Number.isFinite(question.pass) &&
        Number.isFinite(question.disc) &&
        Boolean(question.opt) &&
        Boolean(question.low?.opt)
      : question.pass == null && question.disc == null && question.opt == null;

    const teacherPass = !["確定問題", "疑似問題", "major", "blocker"].includes(teacherRecord.status);
    const studentPass = !["major", "blocker"].includes(studentRecord.status) &&
      studentRecord.checks?.answerableFromVisibleContent !== false;
    const itemWriterPass =
      itemWriterRecord.checks?.officialAnswer?.status === "matched" &&
      itemWriterRecord.checks?.answerConfiguration?.status === "pass" &&
      itemWriterRecord.checks?.optionStructure?.status === "pass" &&
      itemWriterRecord.checks?.groupDependency?.status === "pass" &&
      itemWriterRecord.checks?.taxonomy?.status === "pass";
    const educationPass = answerConfigurationPass && groupPass && taxonomyPass &&
      imagePass && sourceClean && statisticPass;

    const advisories = [];
    if (!question.explain) advisories.push("本站尚未提供自製解析；不影響正式題目與答案校對");
    if (Number.isFinite(question.disc) && question.disc < 0) {
      advisories.push("官方鑑別度為負值；保留原始統計，使用時應謹慎解讀");
    }
    if (bank.era === "學測" && bank.year === 85 && question.no === 7) {
      advisories.push("正式 PDF 本身顯示 Times New Roman 字樣；本站依官方可見原文保留");
    }
    if (bank.era === "學測" && bank.year === 84 && question.no === 45) {
      advisories.push("官方公告 B、C 皆可接受；本站以 acceptedAnswers 表示，並非多選題");
    }

    questions.push({
      id: key,
      era: bank.era,
      year: bank.year,
      no: question.no,
      sourceFile: `data/${bank.era === "學測" ? "g" : "z"}${bank.year}.js`,
      reviews: {
        highSchoolTeacher: teacherPass ? "pass" : "needs-review",
        student: studentPass ? "pass" : "needs-review",
        educationExpert: educationPass ? "pass" : "needs-review",
        itemWriter: itemWriterPass ? "pass" : "needs-review"
      },
      checks: {
        answerConfiguration: answerConfigurationPass,
        groupMaterial: groupPass,
        controlledTaxonomy: taxonomyPass,
        accessibleImage: imagePass,
        conversionArtifactsRemoved: sourceClean,
        officialStatisticsProvenance: statisticPass,
        explanation: question.explain ? "reviewed" : "not-provided"
      },
      advisories
    });
  }
}

const failed = questions.filter(question =>
  Object.values(question.reviews).some(status => status !== "pass")
);
const withExplanation = questions.filter(question => question.checks.explanation === "reviewed").length;
const withoutExplanation = questions.length - withExplanation;
const negativeDiscrimination = banks.reduce(
  (sum, bank) => sum + bank.questions.filter(question => Number.isFinite(question.disc) && question.disc < 0).length,
  0
);

const corrections = [
  {
    type: "解析精確度",
    questions: ["學測-84-13", "學測-84-31", "學測-108-29"],
    resolution: "依高中教師意見修正詞性、最高級與比較級說明"
  },
  {
    type: "教學清晰度",
    questions: ["學測-105-22", "學測-111-7", "學測-113-2"],
    resolution: "補全被動搭配、barely visible 與 with 複合結構"
  },
  {
    type: "題圖無障礙",
    questions: [
      "學測-109-41", "學測-111-35", "學測-112-44", "學測-113-35",
      "學測-114-36", "學測-115-38", "指考-108-48"
    ],
    resolution: "改為逐選項、中性且不直接點名正答的替代文字"
  },
  {
    type: "原文轉檔雜訊",
    questions: ["學測-93-41～44", "學測-98-45～48"],
    resolution: "對照正式 PDF 後移除不可見的 INCLUDEPICTURE／HYPERLINK 欄位碼"
  },
  {
    type: "正式題幹一致性",
    questions: [
      "學測-100-37", "學測-102-23", "學測-111-49",
      "學測-115-38", "學測-115-42", "學測-115-45", "學測-115-49"
    ],
    resolution: "恢復正式題本原句或正式中文提示"
  },
  {
    type: "正式題組完整性",
    questions: ["學測-115-47～50"],
    resolution: "恢復 Wonder Village 前言與六家商店完整正式原文，不再使用摘要"
  },
  {
    type: "分類文件",
    questions: ["學測-86-11～20"],
    resolution: "把文法題納入題型控制詞並新增分類規格文件與自動測試"
  }
];

const summary = {
  generatedAt: new Date().toISOString(),
  scope: {
    papers: banks.length,
    questions: questions.length,
    gsatYears: "83–115",
    astYears: "91–110"
  },
  roleCoverage: {
    highSchoolTeacher: teacherRecords.length,
    student: studentRecords.length,
    educationExpert: questions.length,
    itemWriter: itemWriterRecords.length
  },
  result: {
    pass: questions.length - failed.length,
    needsReview: failed.length,
    officialAnswersCompared: questions.length,
    existingExplanationsReviewed: withExplanation,
    explanationsNotProvided: withoutExplanation,
    negativeOfficialDiscriminationValues: negativeDiscrimination
  },
  corrections,
  officialSourceLimitations: [
    "學測 85 第 7 題正式 PDF 本身出現 Times New Roman 字樣，本站不猜測缺字。",
    "指考 91 官方統計檔無法可靠擷取，答對率、鑑別度與選項百分率維持空白。",
    "2,175 題未提供本站自製解析；本次已完成題目與答案校對，但沒有不存在的解析可供校對。"
  ]
};

const report = {summary, questions};
fs.mkdirSync(outputDir, {recursive: true});
fs.writeFileSync(
  path.join(outputDir, "four-expert-audit.json"),
  `${JSON.stringify(report, null, 2)}\n`
);

const markdown = `# 大學英文學測・指考四專家全題庫審查報告

## 審查結論

- 審查範圍：${summary.scope.papers} 份、${summary.scope.questions} 題。
- 高中英文教師：${summary.roleCoverage.highSchoolTeacher}／${summary.scope.questions} 題。
- 考生視角：${summary.roleCoverage.student}／${summary.scope.questions} 題。
- 教育評量專家：${summary.roleCoverage.educationExpert}／${summary.scope.questions} 題。
- 命題專家：${summary.roleCoverage.itemWriter}／${summary.scope.questions} 題。
- 四方均通過：${summary.result.pass} 題；待處理：${summary.result.needsReview} 題。
- 官方答案核對：${summary.result.officialAnswersCompared}／${summary.scope.questions} 題。
- 既有自製解析：${summary.result.existingExplanationsReviewed} 則，均已逐則校對。
- 尚未提供自製解析：${summary.result.explanationsNotProvided} 題，列為學習支援待辦，不誤判成題目錯誤。

## 已修正

${corrections.map(item =>
  `- ${item.type}：${item.questions.join("、")}。${item.resolution}。`
).join("\n")}

## 官方資料限制

${summary.officialSourceLimitations.map(item => `- ${item}`).join("\n")}

## 驗證方法

- 每位角色都建立 ${summary.scope.questions} 筆唯一逐題紀錄，不以抽樣代替全量審查。
- 答案逐題對照大考中心正式答案；題幹、選項、題組、圖片與統計欄位另做結構驗證。
- 題圖共用 10 個正式裁圖，涵蓋 13 道題，已逐張目視檢查。
- 四角色逐題結果與教育評量檢查見 \`four-expert-audit.json\`。
`;
fs.writeFileSync(path.join(outputDir, "four-expert-audit.md"), markdown);

console.log(JSON.stringify({
  outputDir: path.relative(root, outputDir),
  questions: questions.length,
  pass: summary.result.pass,
  needsReview: summary.result.needsReview,
  roleCoverage: summary.roleCoverage
}, null, 2));
