const AVAILABLE_ZEROS = 1;

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestSubarray = function(nums) {
    let zeros = 0;
    let left = 0;
    let max = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeros++;
        }

        while (zeros > AVAILABLE_ZEROS) {
            if (nums[left] === 0) {
                zeros--;
            }
            left++;
        }

        max = Math.max(max, right - left);
    }

    if (zeros === 1 || max === nums.length - 1) {
        return max;
    }

    return max - 1;
};

module.exports = longestSubarray;
