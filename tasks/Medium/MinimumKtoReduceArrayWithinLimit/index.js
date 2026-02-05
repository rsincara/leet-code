/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumK = function(nums) {
    function isValid(k) {
        let operationsCount = 0;
        for (let i = 0; i < nums.length; i++) {
            operationsCount += Math.ceil(nums[i] / k);
        }
        return operationsCount <= k * k;
    }

    let upper = 1;
    while (!isValid(upper)) {
        upper *= 2;
    }

    let left = 1;
    let right = upper;
    let result = right;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (isValid(mid)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return result;
};

module.exports = minimumK;