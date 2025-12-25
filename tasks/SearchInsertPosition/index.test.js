const fn = require('./index');

test('Test 1', () => {
    expect(fn([1,3,5,6], 5)).toBe(2);
});


test('Test 2', () => {
    expect(fn([1,3,5,6], 2)).toBe(1);
});


test('Test 3', () => {
    expect(fn([1,3,5,6], 7)).toBe(4);
});

test('Test 4', () => {
    expect(fn([1,3,5,6], 0)).toBe(0);
});

test('Test 5', () => {
    expect(fn([1,3], 0)).toBe(0);
});

test('Test 6', () => {
    expect(fn([3,5,7,9,10], 8)).toBe(3);
});
