const fn = require('./index');

test('Test 1', () => {
    expect(fn([1,12,-5,-6,50,3], 4)).toBe(12.75000);
});

test('Test 2', () => {
    expect(fn([5], 1)).toBe(5);
});

test('Test 3', () => {
    expect(fn([0,1,1,3,3], 4)).toBe(2);
});
