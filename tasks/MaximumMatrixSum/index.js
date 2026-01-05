/**
 * @param {number[][]} matrix
 * @return {number}
 */

const maxMatrixSum = function (matrix) {
    let negativeCount = 0;
    let absSum = 0;
    let minAbs = Number.POSITIVE_INFINITY;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            const num = matrix[i][j];
            const absNum = Math.abs(num);

            if (num < 0) {
                negativeCount++;
            }

            minAbs = Math.min(minAbs, absNum);
            absSum += absNum;
        }
    }

    return negativeCount % 2 === 0 ? absSum : absSum - minAbs * 2;
};
module.exports = maxMatrixSum;