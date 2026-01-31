const fn = require('./index');

describe('Tests', () => {
    test('Test 1', () => {
        expect(fn(")ebc#da@f(")).toBe('(fad@cb#e)');
    });

    test('Test 2', () => {
        expect(fn('z')).toBe('z');
    });

    test('Test 3', () => {
        expect(fn('!@#$%^&*()')).toBe(')(*&^%$#@!');
    });
});
