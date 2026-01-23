const fn = require('./index');

describe('Tests', () => {
    test('Test 1', () => {
        expect(fn([2, 3, 5, 7])).toStrictEqual([-1, 1, 4, 3]);
    });

    test('Test 2', () => {
        expect(fn([11, 13, 31])).toStrictEqual([9, 12, 15]);
    });

    test('Test 3', () => {
        expect(fn([3391, 499, 811, 5851, 3943, 421, 4051, 1187, 1601, 9781, 3617])).toStrictEqual([3359, 497, 809, 5849, 3939, 420, 4049, 1185, 1600, 9780, 3616]
    );
    });
});