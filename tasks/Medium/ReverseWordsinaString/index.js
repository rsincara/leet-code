/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    return s.split(' ').filter(Boolean).reverse().join(' ');
};

module.exports = reverseWords;