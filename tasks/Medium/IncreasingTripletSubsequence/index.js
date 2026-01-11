/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let minOne = Infinity;
    let minTwo = Infinity;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (num <= minOne) {
            minOne = num;
        } else if (num <= minTwo) {
            minTwo = num;
        } else {
            return true;
        }
    }

    return false;
};

module.exports = increasingTriplet;