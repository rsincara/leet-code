const _ = require('lodash');

/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (s) {
    let res = '';

    const numStack = [];
    const rowStack = [];

    let num = '';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        const preparingNum = Number.parseInt(char);

        if (!Number.isNaN(preparingNum)) {
            num += char;
            continue;
        }

        if (char !== ']') {
            if (num) {
                numStack.push(Number(num));
                num = '';
            }
            rowStack.push(char);
            continue;
        }

        // Если char === ']'
        let string = '';
        let lastChar = rowStack.pop();
        while (lastChar !== '[') {
            string = lastChar + string;
            lastChar = rowStack.pop();
        }

        const lastNum = numStack.pop();

        if (lastNum) {
            const newString = getString(lastNum, string);
            rowStack.push(newString)
        }
    }

    if (rowStack.length > 0) {
        res += rowStack.join('');
    }

    return res;
};

const getString = (number, string) => {
    let res = '';

    for (let i = 0; i < number; i++) {
        res += string;
    }

    return res;
};

module.exports = decodeString;