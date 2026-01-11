const fn = require('./index');

test('Test 1', () => {
    expect(fn('abc')).toBe(2);
});

test('Test 2', () => {
    expect(fn('dd')).toBe(1);
});

test('Test 3', () => {
    expect(fn('bob')).toBe(2);
});
