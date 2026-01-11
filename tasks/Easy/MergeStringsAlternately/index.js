/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function(word1, word2) {
    let w1p = 0;
    let w2p = 0;
    let res = '';

    while (w1p < word1.length || w2p < word2.length) {
        if (w1p <= w2p && w1p < word1.length || w2p === word2.length) {
            res+=word1[w1p];
            w1p++;
            continue;
        }

        res+=word2[w2p];
        w2p++;
    }

    return res;
};
module.exports = mergeAlternately;