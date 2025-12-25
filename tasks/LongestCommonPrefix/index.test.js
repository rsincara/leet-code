const { longestCommonPrefix } = require('./index');

test('test 1', () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).toBe('fl');
});

test('test 2', () => {
    expect(longestCommonPrefix(["dog","racecar","car"])).toBe('');
});

test('test 3', () => {
    expect(longestCommonPrefix(["a","b"])).toBe('');
});

test('test 5', () => {
    expect(longestCommonPrefix(["abab","aba",""])).toBe('');
});
