const _ = require('lodash');

/**
 * @param {number[][]} grid
 * @return {number}
 */const equalPairs = function(grid) {
    let count = 0;

    const matrixSize = grid.length;
    for (let i = 0; i < matrixSize; i++) {
        const newColumn = [];

        for (let j = 0; j < matrixSize; j++) {
            newColumn.push(grid[j][i])
        }

        for (const row of grid) {
            if (_.isEqual(row, newColumn)) {
                count++;
            }
        }
    }

    return count;
};


module.exports = equalPairs;