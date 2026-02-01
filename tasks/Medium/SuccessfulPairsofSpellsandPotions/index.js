const _ = require('lodash');

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
const successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b);

    const countByBinarySearch = (spell) => {
        let left = 0;
        let right = potions.length;
        let isFound = false;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            const product = spell * potions[mid];

            if (product >= success) {
                isFound = true;
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        if (isFound) {
            return potions.length - right;
        }

        return 0;
    };

    const res = [];

    for (let i = 0; i < spells.length; i++) {
        const spell = spells[i];
        res.push(countByBinarySearch(spell));
    }

    return res;
};

module.exports = successfulPairs;