const fn = require('./index');

describe('', () => {
    test('Test 1', () => {
        expect(fn([1,1,0,1])).toBe(3);
    });

    test('Test 2', () => {
        expect(fn([0,1,1,1,0,1,1,0,1])).toBe(5);
    });

    test('Test 3', () => {
        expect(fn([1,1,1])).toBe(2);
    });
});

