/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [];

    let currRow = [];
    for (let i = 0; i < numRows; i++) {
        currRow[0] = 1;
        currRow[i] = 1;

        for (let j = 1; j < i; j++) {
            const prevRes =  result[i - 1];

            currRow[j] = prevRes[j] + prevRes[j - 1];
        }

        result.push(currRow);
        currRow = [];
    }

    return result;
};

console.log(generate(7));
module.exports = { generate };