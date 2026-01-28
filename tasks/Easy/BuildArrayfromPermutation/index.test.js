const fn = require('./index');

describe('Tests', () => {
	test('Test 1', () => {
    	expect(fn([0,2,1,5,3,4])).toBe(null);
	});

	test('Test 2', () => {
    	expect(fn([5,0,1,2,3,4])).toBe(null);
	});
});