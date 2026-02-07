const _ = require('lodash');

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
const minEatingSpeed = function(piles, h) {
    const canEatAllBananas = (k) => {
        let sum = 0;

        for (let i = 0; i < piles.length; i++) {
            sum += Math.ceil(piles[i] / k);
        }

        return sum <= h;
    }

    let left = 1;
    let right = Math.max(...piles);

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (canEatAllBananas(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};

module.exports = minEatingSpeed;