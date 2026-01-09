const fn = require('./index');

test('Test 1', () => {
    expect(fn([2,3,5,1,3], 3)).equals([true,true,true,false,true] );
});
