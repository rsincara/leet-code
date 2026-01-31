const sChars = '!@#$%^&*()';

/**
 * @param {string} s
 * @return {string}
 */
const reverseByType = function(s) {
    const sCharsStack = [];
    const lettersStack = [];
    let res = '';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (sChars.includes(char)) {
            sCharsStack.push(char);
        } else {
            lettersStack.push(char);
        }
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (sChars.includes(char)) {
            res+=sCharsStack.pop();
        } else {
            res+=lettersStack.pop();
        }
    }

    return res;
};

module.exports = reverseByType;