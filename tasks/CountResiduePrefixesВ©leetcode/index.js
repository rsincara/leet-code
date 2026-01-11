/**
 * @param {string} s
 * @return {number}
 */
var residuePrefixes = function(s) {
    let str = '';
    let uniqChars = new Set();
    let count = 0;

    for (const char of s) {
        str+=char;
        uniqChars.add(char);

        if (uniqChars.size === str.length % 3) {
            count++;
        }
    }

    return count;
};

module.exports = residuePrefixes;