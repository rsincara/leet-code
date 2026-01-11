const { romanToInt } = require('./index');

test('Roman 1', () => {
    expect(romanToInt('III')).toBe(3);
});

test('Roman 2', () => {
    expect(romanToInt('LVIII')).toBe(58);
});

test('Roman 3', () => {
    expect(romanToInt('MCMXCIV')).toBe(1994);
});

test('Roman 4', () => {
    expect(romanToInt('IX')).toBe(9);
});

test('Roman 5', () => {
    expect(romanToInt('CM')).toBe(900);
});

test('Roman 6', () => {
    expect(romanToInt('CMI')).toBe(901);
});

test('Roman 7', () => {
    expect(romanToInt('VII')).toBe(7);
});