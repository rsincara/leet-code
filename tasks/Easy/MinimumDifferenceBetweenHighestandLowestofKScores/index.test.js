const fn = require('./index');

describe('Tests', () => {
	test('Test 1', () => {
    	expect(fn([90], 1)).toBe(0);
	});

	test('Test 2', () => {
    	expect(fn([9,4,1,7], 2)).toBe(2);
	});

    test('Test 3', () => {
    	expect(fn([87063,61094,44530,21297,95857,93551,9918], 6)).toBe(74560);
	});
});