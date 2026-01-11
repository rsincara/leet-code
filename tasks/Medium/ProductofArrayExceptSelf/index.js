/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    let zeroCount = 0;
    const allNumsProduct = nums.reduce((acc, curr) => {
        if (curr === 0) {
            zeroCount++
        }

        return acc * (curr || 1);
    }, 1);

    if (zeroCount === 0) {
        return nums.map(x => allNumsProduct / x);
    }

    if (zeroCount === 1) {
        return nums.map(x => x === 0 ? allNumsProduct : 0);
    }

    return nums.map(() => 0);
};

module.exports = productExceptSelf;