/**
 * @param {number[]} nums
 * @return {number}
 */
const minPairSum = function(nums) {
    const sorted = nums.toSorted((a,b) => a - b);

    let left = 0;
    let right = nums.length - 1;

    let max = 0;

    while (left < right) {
        max = Math.max(max, sorted[left] + sorted[right]);

        left++;
        right--;
    }

    return max;
};

module.exports = minPairSum;