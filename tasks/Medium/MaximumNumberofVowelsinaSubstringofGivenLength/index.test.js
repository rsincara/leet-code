const fn = require('./index');

test('Test 1', () => {
    expect(fn("abciiidef", 3)).toBe(3);
});

test('Test 2', () => {
    expect(fn("aeiou", 2)).toBe(2);
});

test('Test 3', () => {
    expect(fn("leetcode", 3)).toBe(2);
});

test('Test 4', () => {
    expect(fn("weallloveyou", 7)).toBe(4);
});
