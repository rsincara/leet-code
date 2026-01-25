const fn = require('./index');

describe('Tests', () => {
	test('Test 1', () => {
    	expect(fn([1,-2,3,-4], 3)).toStrictEqual([3,-2,1,-4]);
	});

	test('Test 3', () => {
    	expect(fn([-3,-2,7], 1)).toStrictEqual([-3,-2,7]);
	});

	test('Test 5', () => {
    	expect(fn([5,4,-9,6], 2)).toStrictEqual([6,5,-9,4]);
	});
});