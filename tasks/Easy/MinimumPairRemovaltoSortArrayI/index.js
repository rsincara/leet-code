/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumPairRemoval = function (nums) {
    let operationsCount = 0;

    let isDone = false;
    while (!isDone) {
        let min = Infinity;
        let foundIndex = -1;

        let isSorted = true;

        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                isSorted = false;
            }

            const sum = nums[i] + nums[i + 1];

            if (sum < min) {
                min = sum;
                foundIndex = i;
            }
        }

        if (isSorted) {
            isDone = true;
        } else {
            operationsCount++;
            nums.splice(foundIndex,2, min);
        }
    }

    return operationsCount;
};

module.exports = minimumPairRemoval;