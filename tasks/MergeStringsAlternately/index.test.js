const fn = require('./index');

test('Test 1', () => {
    expect(fn('abc', 'pqr')).toBe('apbqcr');
});

test('Test 2', () => {
    expect(fn('ab', 'pqrs')).toBe('apbqrs');
});

test('Test 3', () => {
    expect(fn('abcd', 'pq')).toBe('apbqcd');
});
