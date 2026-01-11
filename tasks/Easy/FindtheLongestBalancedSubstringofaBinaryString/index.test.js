const fn = require('./index');

test('Test 1', () => {
    expect(fn("01000111")).toBe(6);
});

test('Test 2', () => {
    expect(fn("00111")).toBe(4);
});

test('Test 3', () => {
    expect(fn("111")).toBe(0);
});

test('Test 4', () => {
    expect(fn("101")).toBe(2);
});

test('Test 5', () => {
    expect(fn("00010011")).toBe(3);
});