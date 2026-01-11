/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function(str1, str2) {
    let res = '';

    const minStr = str1.length < str2.length ? str1 : str2;

    for (let i = 1; i <= minStr.length; i++) {
        const prefix = minStr.slice(0, i);

        let str1Modulo = str1.replaceAll(prefix, '').length;
        let str2Modulo = str2.replaceAll(prefix, '').length;

        let isCommonPrefix = str1Modulo === 0 && str2Modulo === 0;

        if (isCommonPrefix) {
            res = prefix;
        }
    }

    return res;
};

module.exports = gcdOfStrings;