/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left !== right && right > 0) {
        const mid = Math.floor((right - left) / 2) + left;
        const value = nums[mid];

        if (value === target) {
            return mid;
        }

        if (value < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    if (nums[left] < target) {
        return left + 1;
    }

    return left;
};

module.exports = searchInsert;