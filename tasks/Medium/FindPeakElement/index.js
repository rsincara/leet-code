const _ = require('lodash');

/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((right + left) / 2);

        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }

        if (mid === 0 && nums[0] > nums[1]) {
            return 0;
        }

        if (mid === nums.length - 1 && nums[mid] > nums[mid - 1]) {
            return mid;
        }

        if (nums[mid - 1] < nums[mid] && nums[mid] > nums[mid + 1]) {
            return mid;
        }
    }

    return left;
};

module.exports = findPeakElement;