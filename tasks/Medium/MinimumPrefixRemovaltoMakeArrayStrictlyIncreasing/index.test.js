const fn = require('./index');

describe('Tests', () => {
	test('Test 1', () => {
    	expect(fn([1,-1,2,3,3,4,5])).toBe(4);
	});

	test('Test 2', () => {
    	expect(fn([4,3,-2,-5])).toBe(3);
	});

	test('Test 3', () => {
    	expect(fn([1,2,3,4])).toBe(0);
	});

    test('Test 4', () => {
    	expect(fn([-4,-10])).toBe(1);
	});
});