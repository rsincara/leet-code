/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = nums.slice(0, k).reduce((acc, curr) => acc + curr, 0)
    let maxAvg = sum / k;

    for (let i = 1; i <= nums.length - k; i++) {
        sum-=nums[i - 1];
        sum+=nums[i + k - 1];

        const avg = sum / k;

        maxAvg = Math.max(avg, maxAvg)
    }

    return maxAvg;
};

module.exports = findMaxAverage;