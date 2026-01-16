/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = nums.reduce((acc, curr) => acc + curr, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        sum -= num;

        if (leftSum === sum) {
            return i;
        }

        leftSum += num;
    }

    return -1;
};

module.exports = pivotIndex;
