const fn = require('./index');

test('Test 1', () => {
    expect(fn('ABCABC', 'ABC')).toBe('ABC');
});

test('Test 2', () => {
    expect(fn('ABABAB', 'ABAB')).toBe('AB');
});

test('Test 3', () => {
    expect(fn('LEET', 'CODE')).toBe('');
});

test('Test 4', () => {
    expect(fn('AAAAAB', 'AAA')).toBe('');
});
