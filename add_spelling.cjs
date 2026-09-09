const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const parsed = fs.readFileSync('parsed_spelling.json', 'utf8');

// 1. Add to quizData
const targetStr = `"Sentence Correction 2": [`;
const insertion = `"Word Spelling": ` + parsed + `,\n        ` + targetStr;

if (html.includes(targetStr)) {
    html = html.replace(targetStr, insertion);
    console.log("Added to quizData");
} else {
    console.log("Could not find quizData target");
}

// 2. Add to categoriesData
const catInsertion = `{
                    id: 'Word Spelling',
                    name: 'Word Spelling',
                    image: 'src/assets/images/word_spelling_logo_1788876497541.jpg',
                    icon: 'fa-spell-check',
                    desc: '150 Essential Word Spelling MCQs'
                },`;

const catTarget = `id: 'Sentence Correction 2',`;

if (html.includes(catTarget)) {
    html = html.replace(`{
                    id: 'Sentence Correction 2',`, catInsertion + `\n                {\n                    id: 'Sentence Correction 2',`);
    console.log("Added to categoriesData");
} else {
    console.log("Could not find categoriesData target");
}

// 3. Add to categoryNames
const mapTarget = `'Sentence Correction 2': 'Sentence Correction 2',`;
const mapInsertion = `'Word Spelling': 'Word Spelling', ` + mapTarget;

if (html.includes(mapTarget)) {
    html = html.replace(mapTarget, mapInsertion);
    console.log("Added to categoryNames");
}

fs.writeFileSync('index.html', html, 'utf8');
