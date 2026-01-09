const fn = require('./index');

test('Test 1', () => {
    expect(fn([1,2,3,4], 5)).toBe(2);
});

test('Test 2', () => {
    expect(fn([3,1,3,4,3], 6)).toBe(1);
});
