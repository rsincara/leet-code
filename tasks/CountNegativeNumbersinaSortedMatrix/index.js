/**
 * @param {number[][]} grid
 * @return {number}
 */
const countNegatives = function(grid) {
    let x = grid[0].length;
    let y = grid.length;

    let positive = 0;

    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            if (grid[j][i] >= 0) {
                positive++;
            } else {
                y = j;
            }
        }
    }

    return grid[0].length * grid.length - positive;
};
module.exports = countNegatives;