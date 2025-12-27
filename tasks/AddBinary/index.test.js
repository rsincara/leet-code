const fn = require('./index');

test('Test 1', () => {
    expect(fn('11', '1')).toBe('100');
});

test('Test 2', () => {
    expect(fn('1010', '1011')).toBe('10101');
});

test('Test 3', () => {
    expect(fn('')).toBe(1);
});
