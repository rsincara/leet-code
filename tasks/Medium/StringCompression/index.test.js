const fn = require('./index');

test('Test 1', () => {
    expect(fn(["a","a","b","b","c","c","c"])).toBe(6);
});

test('Test 2', () => {
    expect(fn(["a"])).toBe(1);
});

test('Test 3', () => {
    expect(fn(["a","b","b","b","b","b","b","b","b","b","b","b","b"])).toBe(4);
});