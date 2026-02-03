const _ = require('lodash');

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isTrionic = function (nums) {
    if (nums.length < 4 || nums[1] <= nums[0]) {
        return false;
    }

    let i = 1;

    while (nums[i] > nums[i - 1]) {
        if (i === nums.length - 1) {
            return false;
        }

        i++;
    }

    i--;
    if (nums[i] > nums[i + 1]) {
        i++;
    } else {
        return false;
    }

    while (nums[i] > nums[i + 1]) {
        if (i === nums.length) {
            return false;
        }

        i++;
    }

    if (nums[i] < nums[i + 1]) {
        i++;
    } else {
        return false;
    }

    if (i === nums.length - 1) {
        return true;
    }

    while (i < nums.length - 1) {
     if (nums[i] >= nums[i + 1]) {
         return false;
     }

     i++;
    }

    return true;
};

module.exports = isTrionic;