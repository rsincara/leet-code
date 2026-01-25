/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumPrefixLength = function(nums) {
    let removingIndex = -1;

    for (let i = 0; i < nums.length - 1; i++) {
        const num = nums[i];
        const next = nums[i + 1];

        if (num >= next) {
            removingIndex = i;
        }
    }

    return removingIndex > -1 ? removingIndex + 1 : 0;
};

module.exports = minimumPrefixLength;