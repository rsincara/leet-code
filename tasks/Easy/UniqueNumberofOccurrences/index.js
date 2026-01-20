/**
 * @param {number[]} arr
 * @return {boolean}
 */
const uniqueOccurrences = function(arr) {
    const hash = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];

        hash[num] = (hash[num] || 0) + 1;
    }

    const hashValues = Object.values(hash);

    const set = new Set(hashValues);

    return set.size === hashValues.length;
};

module.exports = uniqueOccurrences;