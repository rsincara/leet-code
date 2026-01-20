const fn = require('./index');

describe('Tests', () => {
	test('Test 1', () => {
    	expect(fn([1,2,2,1,1,3])).toBe(true);
	});

	test('Test 2', () => {
    	expect(fn([1,2])).toBe(false);
	});

	test('Test 3', () => {
    	expect(fn([-3,0,1,-3,1,1,1,-3,10,0])).toBe(true);
	});
});