const fn = require('./index');

describe('Tests', () => {
	test('Test 1', () => {
    	expect(fn([5,1,3], [1,2,3,4,5], 7)).toStrictEqual([4,0,3]);
	});

	test('Test 2', () => {
    	expect(fn([3,1,2], [8,5,8], 16)).toStrictEqual([2,0,2]);
	});

    test('Test 3', () => {
    	expect(fn([1,2,3,4,5,6,7], [1,2,3,4,5,6,7], 25)).toStrictEqual([0,0,0,1,3,3,4]);
	});
});