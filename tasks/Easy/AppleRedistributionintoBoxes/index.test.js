const fn = require('./index');

test('Test 1', () => {
    expect(fn([1,3,2], [4,3,1,5,2])).toBe(2);
});

test('Test 1', () => {
    expect(fn([5,5,5], [2,4,2,7])).toBe(4);
});
