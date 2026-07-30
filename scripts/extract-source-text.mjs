import fs from "node:fs";
import path from "node:path";
import {spawnSync} from "node:child_process";
import {fileURLToPath} from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = path.join(root, ".sources");
const directories = fs.readdirSync(sourceRoot)
  .filter(name => /^[gz]\d{2,3}$/.test(name))
  .sort();

function run(command, args, outputPath) {
  const result = spawnSync(command, args, {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (result.status !== 0) {
    throw new Error(`${command} ${args.join(" ")}\n${result.stderr}`);
  }
  fs.writeFileSync(outputPath, result.stdout);
  return Buffer.byteLength(result.stdout);
}

const results = [];
for (const name of directories) {
  const directory = path.join(sourceRoot, name);
  for (const pdfName of ["question.pdf", "answer.pdf", "scoring.pdf"]) {
    const input = path.join(directory, pdfName);
    if (!fs.existsSync(input)) continue;
    const output = path.join(directory, pdfName.replace(".pdf", "-pdf.txt"));
    const result = spawnSync("pdftotext", ["-layout", "-enc", "UTF-8", input, output], {
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
    });
    if (result.status !== 0) {
      throw new Error(`pdftotext ${input}\n${result.stderr}`);
    }
    results.push({source: `${name}/${pdfName}`, output: path.basename(output), bytes: fs.statSync(output).size});
  }

  const documentName = ["question.docx", "question.doc"].find(file => fs.existsSync(path.join(directory, file)));
  if (documentName) {
    const input = path.join(directory, documentName);
    const output = path.join(directory, "question-doc.txt");
    const bytes = run("textutil", ["-convert", "txt", "-stdout", input], output);
    results.push({source: `${name}/${documentName}`, output: path.basename(output), bytes});
  }
}

const small = results.filter(result => result.bytes < 100);
console.log(JSON.stringify({
  directories: directories.length,
  extracted: results.length,
  small,
  totals: {
    questionPdf: results.filter(result => result.output === "question-pdf.txt").length,
    questionDoc: results.filter(result => result.output === "question-doc.txt").length,
    answerPdf: results.filter(result => result.output === "answer-pdf.txt").length,
    scoringPdf: results.filter(result => result.output === "scoring-pdf.txt").length,
  },
}, null, 2));
