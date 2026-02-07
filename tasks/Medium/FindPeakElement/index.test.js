const fn = require('./index');

describe('Tests', () => {
	test('Test 1', () => {
    	expect(fn([1,2,3,1])).toBe(2);
	});

	test('Test 2', () => {
    	expect(fn([1,2,1,3,5,6,4])).toBe(5);
	});

    test('Test 3', () => {
    	expect(fn([1,2])).toBe(1);
	});
});