/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestBalancedSubstring = function(s) {
    let max = 0;

    let zeroLength = 0;
    let oneLength = 0;

    for (let i = 0; i < s.length; i++) {
        const num = s[i];

        if (num === '1' && zeroLength === 0) {
            continue;
        }

        if (num === '0' && s[i - 1] === '1') {
            zeroLength = 0;
            oneLength = 0;
        }

        if (num === '0') {
            zeroLength++;
        } else {
            oneLength++;
        }

        max = Math.max(max, Math.min(zeroLength, oneLength) * 2);
    }

    return max;
};

module.exports = findTheLongestBalancedSubstring;