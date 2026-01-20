/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
const closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    const chars1Freq = {};
    const chars2Freq = {};

    const n = word1.length;

    for (let i = 0; i < n; i++) {
        chars1Freq[word1[i]] = (chars1Freq[word1[i]] || 0) + 1;
        chars2Freq[word2[i]] = (chars2Freq[word2[i]] || 0) + 1;
    }

    const freq1Freq = {};
    const freq2Freq = {};

    const freq1Values = Object.values(chars1Freq);
    const freq2Values = Object.values(chars2Freq);

    for (let i = 0; i < freq1Values.length; i++) {
        freq1Freq[freq1Values[i]] = (freq1Freq[freq1Values[i]] || 0) + 1;
        freq2Freq[freq2Values[i]] = (freq2Freq[freq2Values[i]] || 0) + 1;
    }

    let isFreqConsist = true;

    for (const freq of Object.keys(freq1Freq)) {
        if (freq1Freq[freq] !== freq2Freq[freq]) {
            isFreqConsist = false;
        }
    }

    const chars1Set = new Set(Object.keys(chars1Freq));
    const chars2Set = new Set(Object.keys(chars2Freq));

    const freq1Set = new Set(Object.values(chars1Freq));
    const freq2Set = new Set(Object.values(chars2Freq));

    const charsEquals = chars1Set.size === chars2Set.size && chars1Set.difference(chars2Set).size === 0;
    const freqEquals = freq1Set.size === freq2Set.size && freq1Set.difference(freq2Set).size === 0;

    return charsEquals && freqEquals && isFreqConsist;
};

module.exports = closeStrings;