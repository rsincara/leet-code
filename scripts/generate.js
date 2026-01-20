import fs from 'fs';

const [slug] = process.argv.slice(2);

const createFolderAndIndex = (folder, code) => {
    fs.mkdirSync(folder);
    fs.writeFileSync(`${newFolderPath}/index.js`, code);
};

const createTests = (folder, cases) => {
    fs.writeFileSync(`${newFolderPath}/index.test.js`, cases);
};

const res = await fetch('https://leetcode.com/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        query: `
          query getQuestion($titleSlug: String!) {
            question(titleSlug: $titleSlug) {
              title
              difficulty
              codeSnippets {
                lang
                code
              }
              exampleTestcases
            }
          }
        `,
        variables: {
            titleSlug: slug,
        }
    }),
});

const data = await res.json();

const { difficulty, title } = data.data.question;

const taskTitle = title.replaceAll(' ', '');

let jsSnippet = data.data.question.codeSnippets.find(
    s => s.lang === 'JavaScript'
).code.replace('var', 'const');

const match = jsSnippet.match(
    /(var|let|const)\s+([a-zA-Z_$][\w$]*)\s*=/
);

const functionName = match?.[2];

const newFolderPath = `./tasks/${difficulty}/${taskTitle}`;

jsSnippet += `\n\nmodule.exports = ${functionName};`;

const testCases = data.data.question.exampleTestcases.split('\n');

let testString = `const fn = require('./index');

describe('Tests', () => {`;

testCases.forEach((example, index) => {
    testString += `\n\ttest('Test ${index + 1}', () => {
    \texpect(fn(${example})).toBe(null);
\t});\n`
});

testString += `});`

createFolderAndIndex(newFolderPath, jsSnippet);
createTests(newFolderPath, testString);

console.log(title + ' at the time:  ', new Date().toTimeString())