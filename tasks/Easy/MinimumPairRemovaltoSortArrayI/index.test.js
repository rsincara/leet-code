const fn = require('./index');

describe('Tests', () => {
	test('Test 1', () => {
    	expect(fn([5,2,3,1])).toBe(2);
	});

	test('Test 2', () => {
    	expect(fn([1,2,2])).toBe(0);
	});
});