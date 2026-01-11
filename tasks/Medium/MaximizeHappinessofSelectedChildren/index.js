/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    let summ = 0;

    const sortedHappiness = happiness.toSorted((a,b) => b - a);

    for (let i = 0; i < k; i++) {
        summ += Math.max(0, sortedHappiness[i] - i);
    }

    return summ;
};
module.exports = maximumHappinessSum;