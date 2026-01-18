const fn = require('./index.js');

test('Test 1', () => {
    expect(fn("cooear")).toBe(2);
});

test('Test 2', () => {
    expect(fn('axeyizou')).toBe(1);
});

test('Test 3', () => {
    expect(fn('au 123')).toBe(0);
});

test('Test 4', () => {
    expect(fn('i3')).toBe(0);
});
