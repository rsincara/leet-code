const fn = require('./index');

test('Test 1', () => {
    expect(fn([-5,1,5,0,-7])).toBe(1);
});

test('Test 2', () => {
    expect(fn([-4,-3,-2,-1,4,3,2])).toBe(0);
});
