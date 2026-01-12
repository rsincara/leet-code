/**
 * @param {number[][]} points
 * @return {number}
 */
/* Решение влоб, после работы.
    в идеале исходить из формулы: Minimum time = max(|x2 - x1|, |y2 - y1|)
    //eg; [1,1] to [3,4]
    //Minimum time = max(2, 3) = 3 seconds
 */
var minTimeToVisitAllPoints = function(points) {
    let cost = 0;
    let findingPointIndex = 1;

    let curr = points[0];

    while (findingPointIndex < points.length) {
        const next = points[findingPointIndex];

        if (curr[0] === next[0] && curr[1] === next[1]) {
            findingPointIndex++;
            continue;
        }

        const diff = [next[0] === curr[0] ? 0 : 1, next[1] === curr[1] ? 0 : 1];

        if (next[0] < curr[0]) {
            diff[0]*= - 1;
        }

        if (next[1] < curr[1]) {
            diff[1] *= - 1;
        }

        curr[0]+=diff[0];
        curr[1]+=diff[1];

        cost++;
    }

    return cost;
};

module.exports = minTimeToVisitAllPoints;