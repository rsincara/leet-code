const fn = require('./index');

test('Test 1', () => {
    expect(fn([1,0,0,0,1], 1)).toBe(true);
});

test('Test 2', () => {
    expect(fn([1,0,0,0,1], 2)).toBe(false);
});