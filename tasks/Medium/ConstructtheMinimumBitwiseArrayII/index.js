/**
 * @param {number[]} nums
 * @return {number[]}
 */

const minBitwiseArray = function(nums) {
    const getBitwiseNum = (num) => {
        if (num === 1) {
            return 0;
        }

        const str = num.toString(2);

        const lastTwoDigits = str.slice(-2);

        if (lastTwoDigits === '01') {
            const updatedValue = str.slice(0, str.length - 2) + '00';

            return parseInt(updatedValue, 2)
        }

        let lastZeroIndex = str.lastIndexOf('0');

        if (lastZeroIndex !== -1) {
            const updatedValue = str.slice(0, lastZeroIndex + 1) + '0' + str.slice(lastZeroIndex + 2);

            return parseInt(updatedValue, 2);
        }

        return parseInt(str.slice(0, -1), 2);
    }

    return nums.map(x => x % 2 === 0 ? - 1 : getBitwiseNum(x));
};

module.exports = minBitwiseArray;