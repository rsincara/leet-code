const fn = require('./index');

test('Test 1', () => {
    expect(fn([1,2,3,4])).toBe([24,12,8,6]);
});

test('Test 2', () => {
    expect(fn([-1,1,0,-3,3])).toBe([24,12,8,6]);
});
