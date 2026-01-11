/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
const minimumBoxes = function(apple, capacity) {
    let applesCount = apple.reduce((acc, curr) => {
        return acc + curr;
    }, 0);

    let result = 0;

    const sortedCapacities = capacity.toSorted((a, b) => b-a);

    while (applesCount > 0) {
        const boxCapacity = sortedCapacities.shift();

        applesCount -= boxCapacity;

        result++;
    }

    return result;
};

minimumBoxes([1,3,2], [4,3,1,5,2])

module.exports = minimumBoxes;