/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const uniq = {};

    for (let i = 0; i < nums.length; i++) {
        const currIndex = Object.keys(uniq).length;
        const value = nums[i];
        nums[i] = null;

        if (!(value in uniq)) {
            uniq[value] = true;
            nums[currIndex] = value;
        }
    }

    return Object.keys(uniq).length;
};

let mynums = [0,0,1,1,1,2,2,3,3,4];
console.log('mynums: ', mynums);
let result = removeDuplicates(mynums);
console.log('result, mynums', result, mynums);

module.exports = { removeDuplicates };