/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const isVowel = (char) => {
        if (char === 'a') return true;
        if (char === 'e') return true;
        if (char === 'i') return true;
        if (char === 'o') return true;

        return char === 'u';
    }

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let count = 0;

    for (let i = 0; i < k; i++) {
        const char = s[i];

        if (vowels.includes(char)) {
            count++;
        }
    }

    let max = count;

    for (let left = 1; left < s.length - k + 1; left++) {
        const right = left + k - 1;

        const isPrevVowel = isVowel(s[left - 1]);

        if (isPrevVowel) {
            count--;
        }

        const isRightCharVowel = isVowel(s[right]);

        if (isRightCharVowel) {
            count++;
        }

        max = Math.max(count, max);
    }

    return max;
};

module.exports = maxVowels;