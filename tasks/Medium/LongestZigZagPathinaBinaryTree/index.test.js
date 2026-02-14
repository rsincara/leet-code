const fn = require('./index');

describe('Tests', () => {
	test('Test 1', () => {
    	expect(fn([1,null,1,1,1,null,null,1,1,null,1,null,null,null,1])).toBe(null);
	});

	test('Test 2', () => {
    	expect(fn([1,1,1,null,1,null,null,1,1,null,1])).toBe(null);
	});

	test('Test 3', () => {
    	expect(fn([1])).toBe(null);
	});
});