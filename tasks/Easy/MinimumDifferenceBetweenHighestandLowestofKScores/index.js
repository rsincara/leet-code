/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumDifference = function(nums, k) {
    if (nums.length === 1) {
        return 0;
    }

    let min = Infinity;

    const sorted = nums.toSorted((a, b) => a - b);

    for (let left = 0; left < nums.length - k + 1; left++) {
        let right = left + k - 1;

        let diff = sorted[right] - sorted[left];

        min = Math.min(min, diff)
    }

    return min;
};

module.exports = minimumDifference;