const fn = require('./index');

test('Test 1', () => {
    expect(fn('YYNY')).toBe(2);
});

test('Test 2', () => {
    expect(fn('NNNNN')).toBe(0);
});

test('Test 3', () => {
    expect(fn('YYYY')).toBe(4);
});
