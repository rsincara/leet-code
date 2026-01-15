const fn = require('./index');

test('Test 1', () => {
    expect(fn(["RecentCounter","ping","ping","ping","ping"])).toBe(null);
});

test('Test 2', () => {
    expect(fn([[],[1],[100],[3001],[3002]])).toBe(null);
});