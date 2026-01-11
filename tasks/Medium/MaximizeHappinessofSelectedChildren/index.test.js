const fn = require('./index');

test('Test 1', () => {
    expect(fn([1,2,3], 2)).toBe(4);
});

test('Test 2', () => {
    expect(fn([1,1,1,1], 2)).toBe(1);
});

test('Test 3', () => {
    expect(fn([2,3,4,5], 1)).toBe(5);
});
