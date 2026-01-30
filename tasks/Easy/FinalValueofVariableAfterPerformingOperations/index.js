/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = function(operations) {
    let value = 0;

    for (const operation of operations) {
        switch (operation) {
            case "--X":
            case "X--": {
                value--;
                break;
            }
            case "++X":
            case "X++": {
                value++;
                break;
            }
        }
    }

    return value;
};

module.exports = finalValueAfterOperations;