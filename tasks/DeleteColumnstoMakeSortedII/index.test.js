const fn = require('./index');

test('Test', () => {
    expect(fn(["ca","bb","ac"])).toBe(1);
});

test('Test', () => {
    expect(fn(["xc","yb","za"])).toBe(0);
});

test('Test', () => {
    expect(fn(["zyx","wvu","tsr"])).toBe(3);
});
