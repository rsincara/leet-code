const fn = require('./index');

test('Test 1', () => {
    expect(fn('abc', 'ahbgdc')).toBe(true);
});

test('Test 2', () => {
    expect(fn('axc', 'ahbgdc')).toBe(false);
});
