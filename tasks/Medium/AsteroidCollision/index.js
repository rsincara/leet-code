/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function(asteroids) {
    const stack = [asteroids[0]];

    for (let i = 1; i < asteroids.length; i++) {
        let prevItem = stack.at(-1);
        const asteroid = asteroids[i];

        let hasDiffSigns = asteroid * prevItem < 0;

        if (!hasDiffSigns || (prevItem < 0 && asteroid > 0)) {
            stack.push(asteroid);
            continue;
        }

        const absAster = Math.abs(asteroid);
        let absPrev = Math.abs(prevItem);
        let shouldPush = false;

        while (hasDiffSigns) {
            if (absAster === absPrev) {
                stack.pop();
                hasDiffSigns = false;
                shouldPush = false;
            } else if (absPrev < absAster) {
                stack.pop();
                prevItem = stack.at(-1);
                absPrev = Math.abs(prevItem);
                hasDiffSigns = prevItem * asteroid < 0;
                shouldPush = true;
            } else {
                hasDiffSigns = false;
                shouldPush = false;
            }
        }

        if (shouldPush) {
            stack.push(asteroid);
            const next = asteroids[i + 1];
            if (next) {
                stack.push(next);
                i++;
            }
        }
    }

    return stack;
};

module.exports = asteroidCollision;