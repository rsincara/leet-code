const fn = require('./index');

describe('Tests', () => {
	test('Test 1', () => {
    	expect(fn([1,3,5,4,2,6])).toBe(true);
	});

	test('Test 2', () => {
    	expect(fn([2,1,3])).toBe(false);
	});

    test('Test 3', () => {
    	expect(fn([1,4,8,9])).toBe(false);
	});

    test('Test 4', () => {
    	expect(fn([4,1,5,2,3])).toBe(false);
	});

    test('Test 5', () => {
    	expect(fn([5,9,1,7])).toBe(true);
	});

    test('Test 6', () => {
    	expect(fn([6,8,2,5,9])).toBe(true);
	});
});