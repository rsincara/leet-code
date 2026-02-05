const fn = require('./index');

describe('Tests', () => {
    test('Test 1', () => {
        expect(fn([3,7,5])).toBe(3);
    });

    test('Test 2', () => {
        expect(fn([1])).toBe(1);
    });

    test('Test 3', () => {
        expect(fn([4,4,4,4])).toBe(3);
    });

    test('Test 4', () => {
        expect(fn([1, 1])).toBe(2);
    });
});
