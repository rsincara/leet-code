const _ = require('lodash');

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * const guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

const guessNumber = function(n) {
    let left = 1;
    let right = n;
    let mid = Math.floor((left + right) / 2);

    let guessed = guess(mid);
    while (guessed !== 0) {
        if (guessed === -1) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }

        mid = Math.floor((left + right) / 2);
        guessed = guess(mid);
    }

    return mid;
};

module.exports = guessNumber;