/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const rotateElements = function(nums, k) {
    const nonNegative = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (num >= 0) {
            nonNegative.push(num);
        }
    }

    const rotatedNonNegative = [];

    for (let i = 0; i < nonNegative.length; i++) {
        const num = nonNegative[i];
        const newI = (i - k) % nonNegative.length;
        rotatedNonNegative[newI >= 0 ? newI : nonNegative.length + newI] = num;
    }

    let rotatedI = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (num >= 0) {
            nums[i] = rotatedNonNegative[rotatedI];
            rotatedI++;
        }
    }

    return nums;
};

module.exports = rotateElements;