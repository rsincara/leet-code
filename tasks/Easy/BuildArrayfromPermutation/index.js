/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = function(nums) {
    const arr = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        arr[i] = nums[num];
    }

    return arr;
};

console.log(buildArray([0,2,1,5,3,4]));

module.exports = buildArray;