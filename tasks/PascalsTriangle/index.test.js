const { generate } = require('./index');

test('Test', () => {
    expect(generate(5)).toBe([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]);
});

test('Test', () => {
    expect(generate(1)).toBe([[1]]);
});
