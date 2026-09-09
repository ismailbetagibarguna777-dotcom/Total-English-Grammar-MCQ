const fs = require('fs');
const rawText = fs.readFileSync('spelling_raw.txt', 'utf8');
const lines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0);

let currentOptions = [];
let currentAnswer = -1;
const questions = [];
let qIndex = 1;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('(a) ')) currentOptions.push(line.replace(/^\(a\)\s*/, ''));
    else if (line.startsWith('(b) ')) currentOptions.push(line.replace(/^\(b\)\s*/, ''));
    else if (line.startsWith('(c) ')) currentOptions.push(line.replace(/^\(c\)\s*/, ''));
    else if (line.startsWith('(d) ')) currentOptions.push(line.replace(/^\(d\)\s*/, ''));
    else if (line.startsWith('উত্তরের ইঙ্গিত:')) {
        let ansMatch = line.match(/\(([a-d])\)/);
        if (ansMatch) {
            let char = ansMatch[1];
            if (char === 'a') currentAnswer = 0;
            if (char === 'b') currentAnswer = 1;
            if (char === 'c') currentAnswer = 2;
            if (char === 'd') currentAnswer = 3;
        } else {
            if (line.includes(currentOptions[0])) currentAnswer = 0;
            else if (line.includes(currentOptions[1])) currentAnswer = 1;
            else if (line.includes(currentOptions[2])) currentAnswer = 2;
            else if (line.includes(currentOptions[3])) currentAnswer = 3;
        }

        if (currentOptions.length === 4 && currentAnswer !== -1) {
            questions.push({
                question: `${qIndex}. Choose the correctly spelt word:`,
                options: [...currentOptions],
                answer: currentAnswer
            });
            qIndex++;
            currentOptions = [];
            currentAnswer = -1;
        } else {
            console.error("Error parsing block at line", i, line, currentOptions);
            currentOptions = [];
            currentAnswer = -1;
        }
    }
}

fs.writeFileSync('parsed_spelling.json', JSON.stringify(questions, null, 2), 'utf8');
console.log(`Parsed ${questions.length} questions.`);
