const fn = require('./index');

test('Test 1', () => {
    expect(fn([[1,-1],[-1,1]])).toBe(4);
});

test('Test 2', () => {
    expect(fn([[1,2,3],[-1,-2,-3],[1,2,3]]
    )).toBe(16);
});

test('Test 3', () => {
    expect(fn([[-1,0,-1],[-2,1,3],[3,2,2]]
    )).toBe(15);
});

test('Test 4', () => {
    expect(fn([[-3,0,0],[0,0,0],[0,3,2]]
    )).toBe(8);
});

test('Test 5', () => {
    expect(fn([[10,-6,-6,-8],[-3,-7,-8,-9],[-4,-8,-5,-8],[-9,-9,-6,-8]]
    )).toBe(108);
});