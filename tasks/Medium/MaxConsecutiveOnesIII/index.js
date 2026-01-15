/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let left = 0;
    let right = 0;

    let zeros = 0;
    let count = 0;
    let max = 0;

    while (right < nums.length) {
          if (zeros <= k) {
            if (nums[right] === 1) {
                count++;
                max = Math.max(max, count);
            } else {
                zeros++;
            }
            right++;
            continue;
        }

        if (nums[left] === 1) {
            count--;
        } else {
            zeros--;
        }

        left++;
    }

    return max + Math.min(zeros, k);
};

module.exports = longestOnes;