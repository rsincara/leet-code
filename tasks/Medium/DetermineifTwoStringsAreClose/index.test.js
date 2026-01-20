const fn = require('./index');

describe('Tests', () => {
	test('Test 1', () => {
    	expect(fn("abc", "bca")).toBe(true);
	});

	test('Test 3', () => {
    	expect(fn("a", "aa")).toBe(false);
	});

	test('Test 5', () => {
    	expect(fn("cabbba", "abbccc")).toBe(true);
	});

    test('Test 7', () => {
    	expect(fn("cabbba", "aabbss")).toBe(false);
	});

    test('Test 9', () => {
    	expect(fn("abbzzca", "babzzcz")).toBe(false);
	});

    test('Test 11', () => {
    	expect(fn("aaabbbbccddeeeeefffff", "aaaaabbcccdddeeeeffff")).toBe(false);
	});
});