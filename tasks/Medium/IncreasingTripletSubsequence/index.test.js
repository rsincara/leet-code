const fn = require('./index');

describe('Tests', () => {
    test('Test 1', () => {
        expect(fn([1,2,3,4,5])).toBe(true);
    });

    test('Test 2', () => {
        expect(fn([5,4,3,2,1])).toBe(false);
    });

    test('Test 3', () => {
        expect(fn([2,1,5,0,4,6])).toBe(true);
    });

    test('Test 4', () => {
        expect(fn([2,4,-2,-3])).toBe(false);
    });

    test('Test 5', () => {
        expect(fn([4,5,2147483647,1,2])).toBe(true);
    });

    test('Test 6', () => {
        expect(fn([9,10,5,11,10,9,8])).toBe(true);
    });

    test('Test 7', () => {
        expect(fn([3,2,2,1,2,1])).toBe(false);
    });
});
