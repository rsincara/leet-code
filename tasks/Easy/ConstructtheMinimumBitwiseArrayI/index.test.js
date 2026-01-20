const fn = require('./index');

describe('Tests', () => {
	test('Test 1', () => {
    	expect(fn([2,3,5,7])).toStrictEqual([-1,1,4,3]);
	});

	test('Test 2', () => {
    	expect(fn([11,13,31])).toStrictEqual([9,12,15]);
	});
});