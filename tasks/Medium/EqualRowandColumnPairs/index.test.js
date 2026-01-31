const fn = require('./index');

describe('Tests', () => {
	test('Test 1', () => {
    	expect(fn([[3,2,1],[1,7,6],[2,7,7]])).toBe(1);
	});

	test('Test 2', () => {
    	expect(fn([[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]])).toBe(3);
	});
});