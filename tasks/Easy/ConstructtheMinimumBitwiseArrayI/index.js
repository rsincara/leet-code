/**
 * @param {number[]} nums
 * @return {number[]}
 */


const searchingByNum = {};

for (let i = 0; i <= 1000; i++) {
    const operationValue = i | (i + 1);

    if (!(operationValue in searchingByNum)) {
        searchingByNum[operationValue] = i;
    }
}

const minBitwiseArray = function(nums) {
    return nums.map((num) => searchingByNum[num] || -1);
};

module.exports = minBitwiseArray;