const parenthesesPair = {
    '(': ')',
    '{': '}',
    '[': ']',
};

const isValid = function(s) {
    if (s.length === 0) return true;

    const stack = [s[0]];
    const openBrackets = Object.keys(parenthesesPair);

    for (let i = 1; i < s.length ; i++) {
        const currentBracket = s[i];
        if (openBrackets.includes(currentBracket)) {
            stack.push(currentBracket);
            continue;
        }

        if (parenthesesPair[stack.pop()] !== currentBracket) {
            return false;
        }
    }

    return stack.length === 0;
};

module.exports = { fn: isValid };