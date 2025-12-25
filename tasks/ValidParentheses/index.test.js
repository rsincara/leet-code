const { fn } = require('./index');

test('Test', () => {
    expect(fn('()')).toBe(true);
});

test('Test', () => {
    expect(fn('()[]{}')).toBe(true);
});

test('Test', () => {
    expect(fn('(]')).toBe(false);
});

test('Test', () => {
    expect(fn('([])')).toBe(true);
});

test('Test', () => {
    expect(fn('([)]')).toBe(false);
});
