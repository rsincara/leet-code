const fn = require('./index');

test('Test 1', () => {
    expect(fn([[1,1],[3,4],[-1,0]])).toBe(7);
});