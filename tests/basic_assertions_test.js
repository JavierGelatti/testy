'use strict';

const { suite, test, assert } = require('../testy');

let emptyFunction = () => { };

suite('testing testy - basic assertions', () => {
  test('something is true', () => {
    assert.isTrue(1 === 1);
    assert.that(1 === 1).isTrue();
  });
  
  test('something is false', () => {
    assert.isFalse(1 === 0);
    assert.that(1 === 0).isFalse();
  });
  
  test('objects are equal (using ===)', () => {
    assert.that(42).isEqualTo(40 + 2);
    assert.areEqual(42, 40 + 2);
  });
  
  test('objects are not equal (using !==)', () => {
    assert.that(42).isNotEqualTo(41);
    assert.areNotEqual(42, 41);
  });
  
  test('inclusion in collection', () => assert.that([1, 2, 3]).includes(2));
  
  test('error checking', () => assert.that(() => { throw 'hey!'; }).raises("hey!"));
  
  // commented so CI can pass - uncomment to see the failure
  // test('tests can fail as well :)', () => assert.that(() => { throw 'hey!'; }).raises("ho!"));
  
  test('no specific error happened', () =>
    assert.that(emptyFunction).doesNotRaise("hey!")
  );
  
  test('testing that no specific error happened - even if other error occurs', () =>
    assert.that(() => { throw "ho!"; }).doesNotRaise("hey!")
  );
  
  test('testing that no error happens at all', () =>
    assert.that(emptyFunction).doesNotRaiseAnyErrors()
  );
  
  test('object comparison', () =>
    assert.areEqual({ a: 2, b: [1, 2, 3] }, { a: 2, b: [1, 2, 3] })
  );
});