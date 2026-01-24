/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function(k, n) {
    const res = [];

    const backtrack = (arr, sum, i) => {
        if (arr.length === k) {
            if (sum === n) {
                res.push(arr);
            }

            return;
        }

        for (; i < 10; i++) {
            if ((sum + i) > n) {
                break;
            }

            backtrack([...arr, i], sum + i, i + 1)
        }
    }

    backtrack([], 0, 1);

    return res;
};

console.log('3 7', combinationSum3(3, 7))
console.log('3 9', combinationSum3(3, 9))

module.exports = combinationSum3;