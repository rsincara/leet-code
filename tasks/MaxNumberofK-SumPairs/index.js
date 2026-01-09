/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = function(nums, k) {
    const valuesCounts = {};
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        valuesCounts[num] = (valuesCounts[num] || 0) + 1;
    }

    for (let i = 0; i < nums.length - 1; i++) {
        const num = nums[i];
        const finding = k - num;

        if (num === finding && valuesCounts[num] > 2 || (num !== finding && valuesCounts[num] > 0 && valuesCounts[finding] > 0)) {
            valuesCounts[num]--;
            valuesCounts[finding]--;
            res++;
        }
    }

    return res;
};

module.exports = maxOperations;