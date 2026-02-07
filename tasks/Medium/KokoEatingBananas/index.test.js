const fn = require('./index');

describe('Tests', () => {
	test('Test 1', () => {
    	expect(fn([3,6,7,11], 8)).toBe(4);
	});

	test('Test 3', () => {
    	expect(fn([30,11,23,4,20], 5)).toBe(30);
	});

	test('Test 5', () => {
    	expect(fn([30,11,23,4,20], 6)).toBe(23);
	});

    test('Test 6', () => {
    	expect(fn([312884470], 312884469)).toBe(2);
	});

    test('Test 7', () => {
    	expect(fn([1000000000], 2)).toBe(500000000);
	});
});