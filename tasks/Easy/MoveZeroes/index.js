/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;
    let numPointer = 0;

    while (i < nums.length) {
        let num = nums[i];

        if (num !== 0) {
            let temp = num;
            nums[i] = 0;
            nums[numPointer] = temp;
            numPointer++;
        }
        i++;
    }
};

let arr = [0,1,0,3,12];
moveZeroes(arr);

console.log(arr);

module.exports = moveZeroes;