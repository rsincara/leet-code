const fn = require('./index');

test('Test 1', () => {
    expect(fn([-1,1,0])).toBe(5);
});

test('Test 2', () => {
    expect(fn([2,-3])).toBe(2);
});

