/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[j] = nums[i];
            j++;
        }
    }

    return j;
};

let mynums = [0,1,2,2,3,0,4,2];
console.log('mynums: ', mynums);
let result = removeElement(mynums, 2);
console.log('result, mynums', result, mynums);


module.exports = { removeElement };