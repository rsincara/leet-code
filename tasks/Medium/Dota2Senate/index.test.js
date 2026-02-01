const fn = require('./index');

describe('Tests', () => {
	test('Test 1', () => {
    	expect(fn("RD")).toBe('Radiant');
	});

	test('Test 2', () => {
    	expect(fn("RDD")).toBe('Dire');
	});

    test('Test 3', () => {
    	expect(fn("RRR")).toBe('Radiant');
	});

    test('Test 4', () => {
    	expect(fn("RDRD")).toBe('Radiant');
	});
});