const fn = require('./index');

describe('Tests', () => {
	test('Test 1', () => {
    	expect(fn([5,10,-5])).toStrictEqual([5,10]);
	});

	test('Test 2', () => {
    	expect(fn([8,-8])).toStrictEqual([]);
	});

	test('Test 3', () => {
    	expect(fn([10,2,-5])).toStrictEqual([10]);
	});

	test('Test 4', () => {
    	expect(fn([3,5,-6,2,-1,4])).toStrictEqual([-6,2,4]);
	});

	test('Test 5', () => {
    	expect(fn([-2,-1,1,2])).toStrictEqual([-2,-1,1,2]);
	});

    test('Test 6', () => {
    	expect(fn([-2,-2,1,-2])).toStrictEqual([-2,-2,-2]);
	});
});