const fn = require('./index');

test('Test 1', () => {
    expect(fn([1,7,3,6,5,6])).toBe(3);
});

test('Test 2', () => {
    expect(fn([1,2,3])).toBe(-1);
});

test('Test 3', () => {
    expect(fn([2,1,-1])).toBe(0);
});
