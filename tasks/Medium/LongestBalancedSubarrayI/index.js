const _ = require('lodash');

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestBalanced = function(nums) {
    const n = nums.length;
    let max = 0;

    for (let left = 0; left < n; left++) {
        const even = {};
        const odd = {};

        let evenDist = 0;
        let oddDist = 0;

        for (let right = left; right < n; right++) {
            const x = nums[right];

            if (x % 2 === 0) {
                if (!even[x]) evenDist++;
                even[x] = (even[x] || 0) + 1;
            } else {
                if (!odd[x]) oddDist++;
                odd[x] = (odd[x] || 0) + 1;
            }

            if (evenDist === oddDist) {
                max = Math.max(max, right - left + 1);
            }
        }
    }

    return max;
};

module.exports = longestBalanced;