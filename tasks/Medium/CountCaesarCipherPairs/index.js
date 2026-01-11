/**
 * @param {string[]} words
 * @return {number}
 */
var countPairs = function (words) {
    const freq = {};
    let count = 0;

    for (const word of words) {
        const firstCharCode = word.charCodeAt(0);
        let key = '';

        for (let i = 0; i < word.length; i++) {
            const diff = (word.charCodeAt(i) - firstCharCode + 26) % 26;
            key += diff;
        }

        const prevCount = freq[key] || 0;

        count += prevCount;
        freq[key] = prevCount + 1;
    }

    return count;
};


module.exports = countPairs;