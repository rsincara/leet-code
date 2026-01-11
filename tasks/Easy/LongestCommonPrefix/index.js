/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = '';

    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length === 0) {
            return '';
        }

        if (i === 0) {
            result = strs[i];
            continue;
        }


        for (let j = 0; j < strs[i].length; j++) {
            if (result[j] !== strs[i][j]) {
                result = result.slice(0, j);
                break;
            }

            if (j === strs[i].length - 1) {
                result = result.slice(0, j + 1)
            }
        }

        if (result.length === 0) {
            break;
        }
    }

    return result;
};
module.exports = { longestCommonPrefix };