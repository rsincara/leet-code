const fn = require('./index');

describe('Tests', () => {
	test('Test 1', () => {
    	expect(fn("leet**cod*e")).toBe('lecoe');
	});

	test('Test 2', () => {
    	expect(fn("erase*****")).toBe('');
	});
});