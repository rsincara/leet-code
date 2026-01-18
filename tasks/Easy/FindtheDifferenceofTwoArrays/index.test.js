const fn = require('./index');

// Файл теста
describe('Tests', () => {
	test('Test 1', () => {
    	expect(fn([1,2,3], [2,4,6])).toStrictEqual([[1,3],[4,6]]);
	});
});