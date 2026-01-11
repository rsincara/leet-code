const fn = require('./index');

test('Test 1', () => {
    expect(fn([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])).toBe(8);
});

test('Test 2', () => {
    expect(fn([[3,2],[1,0]])).toBe(0);
});

test('Test 3', () => {
    expect(fn([[5,1,0],[-5,-5,-5]])).toBe(3);
});

