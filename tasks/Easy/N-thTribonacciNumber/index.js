const cache = new Map();

cache.set(0, 0);
cache.set(1, 1);
cache.set(2, 1);

const tribonacci = function(n) {
    if (n < 3) {
        return cache.get(n);
    }

    if (!cache.has(n)) {
        cache.set(n, tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3))
    }

    return cache.get(n);
};

module.exports = tribonacci;