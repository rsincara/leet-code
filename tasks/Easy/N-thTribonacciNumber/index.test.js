const fn = require('./index');

test('Test 1', () => {
    expect(fn(4)).toBe(4);
});

test('Test 2', () => {
    expect(fn(25)).toBe(1389537);
});
