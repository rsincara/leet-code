const fn = require('./index');

test('Test 1', () => {
    expect(fn('the sky is blue')).toBe('blue is sky the');
});

test('Test 2', () => {
    expect(fn('  hello world  ')).toBe('world hello');
});

test('Test 3', () => {
    expect(fn('a good   example')).toBe('example good a');
});
