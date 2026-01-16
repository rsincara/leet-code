const fn = require('./index');

test('Test 1', () => {
    expect(fn([1,1,1,0,0,0,1,1,1,1,0], 2)).toBe(6);
});

test('Test 2', () => {
    expect(fn([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3)).toBe(10);
});

test('Test 3', () => {
    expect(fn([0,0,0,1], 4)).toBe(4);
});

test('Test 4', () => {
    expect(fn([1,0,1,0,1,0,1,1,1], 1)).toBe(5);
});

test('Test 5', () => {
    expect(fn([1, 0, 1, 1, 0, 1, 1, 1, 0, 1], 2)).toBe(8);
});


