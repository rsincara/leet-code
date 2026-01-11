const fn = require('./index');

test('Test 1', () => {
    expect(fn(["fusion","layout"])).toBe(1);
});

test('Test 2', () => {
    expect(fn(["ab","aa","za","aa"])).toBe(2);
});

test('Test 3', () => {
    expect(fn(["a","a","a"])).toBe(3);
});
