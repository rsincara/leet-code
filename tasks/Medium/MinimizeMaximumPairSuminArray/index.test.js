const fn = require('./index');

describe('Tests', () => {
	test('Test 1', () => {
    	expect(fn([3,5,2,3])).toBe(7);
	});

	test('Test 2', () => {
    	expect(fn([3,5,4,2,4,6])).toBe(8);
	});

    test('Test 3', () => {
    	expect(fn([4,1,5,1,2,5,1,5,5,4])).toBe(8);
	});
});