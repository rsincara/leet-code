/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
const canPlaceFlowers = function(flowerbed, n) {
    let canPlantedCount = 0;

    for (let i = 0; i < flowerbed.length; i++) {
        let canBePlanted = flowerbed[i] === 0 && !flowerbed[i - 1] && !flowerbed[i + 1];

        if (canBePlanted) {
            flowerbed[i] = 1;
            canPlantedCount++;
            i++;
        }
    }

    return canPlantedCount >= n;
};
module.exports = canPlaceFlowers;