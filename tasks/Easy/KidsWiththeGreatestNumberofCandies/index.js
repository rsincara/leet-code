/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies);

    return candies.map((x) => x + extraCandies > maxCandies);
};

module.exports = kidsWithCandies;