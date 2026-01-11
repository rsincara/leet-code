/**
 * @param {number[]} nums
 * @return {number}
 */
var centeredSubarrays = function(nums) {
    let res = 0;

    for (let i = 0; i < nums.length; i++) {
        let sum = nums[i];
        const arrItems = nums.slice(i,i + 1);

        for (let j = i; j < nums.length; j++) {
            if (j !== i) {
                sum += nums[j];
                arrItems.push(nums[j]);
            }

            if (arrItems.includes(sum)) {
                res++;
            }
        }
    }

    return res;
};

module.exports = centeredSubarrays;