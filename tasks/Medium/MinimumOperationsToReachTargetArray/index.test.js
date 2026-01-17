const fn = require('./index.js');

describe('test', () => {
    test('Test 1', () => {
        expect(fn([1,2,3],[2,1,3])).toBe(2);
    });

    test('Test 2', () => {
        expect(fn([4,1,4], [5,1,4])).toBe(1);
    });

    test('Test 3', () => {
        expect(fn([7,3,7], [5,5,9])).toBe(2);
    });

    test('Test 4', () => {
        expect(fn( [2, 2, 1, 2, 3, 3, 2], [5, 4, 9, 2, 8, 3, 7])).toBe(3);
    });
});
