const fs = require("fs");
let html = fs.readFileSync("index.html", "utf8");

// 1. Add "Sentence Correction 2" to quizData
const parsedQs = fs.readFileSync("parsed_qs.json", "utf8");
const targetStr = `"Sentence Correction 1": [`;
const insertion = `"Sentence Correction 2": ` + parsedQs + `,\n        ` + targetStr;

if (html.includes(targetStr)) {
    html = html.replace(targetStr, insertion);
    console.log("quizData updated.");
} else {
    console.log("Could not find targetStr in quizData.");
}

// 2. Add category to categoriesData array
const catInsertion = `{
                    id: 'Sentence Correction 2',
                    name: 'Sentence Correction 2',
                    image: 'src/assets/images/sentence_correction_2_logo_1788875131775.jpg',
                    icon: 'fa-spell-check',
                    desc: '100 Essential Sentence Correction MCQs (Part 2)'
                },`;

const catTarget = `id: 'Sentence Correction 1',`;
                    
if (html.includes(catTarget)) {
    html = html.replace(`{
                    id: 'Sentence Correction 1',`, catInsertion + `\n                {\n                    id: 'Sentence Correction 1',`);
    console.log("categoriesData updated.");
} else {
    console.log("Could not find catTarget in categoriesData.");
}

// 3. Add to categoryNames mapping
const mapTarget = `'Sentence Correction 1': 'Sentence Correction 1',`;
const mapInsertion = `'Sentence Correction 2': 'Sentence Correction 2', ` + mapTarget;
if (html.includes(mapTarget)) {
    html = html.replace(mapTarget, mapInsertion);
    console.log("categoryNames updated.");
}

fs.writeFileSync("index.html", html, "utf8");
