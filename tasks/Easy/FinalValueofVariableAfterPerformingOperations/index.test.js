const fn = require('./index');

describe('Tests', () => {
	test('Test 1', () => {
    	expect(fn(["--X","X++","X++"])).toBe(1);
	});

	test('Test 2', () => {
    	expect(fn(["++X","++X","X++"])).toBe(3);
	});

	test('Test 3', () => {
    	expect(fn(["X++","++X","--X","X--"])).toBe(0);
	});
});