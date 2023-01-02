import 'mocha';
import assert from 'assert';

import { greet, isOld, countOdd } from './index';

describe('ts tests', () => {
  it('get greeting', () => {
    const birthYear = 1995;
    const name = 'Sophia';

    const result = greet(name, birthYear);

    assert.strictEqual(result, 'Hello Sophia, you are 28 years old');
  });

  it('returns true if age is above 35', () => {
    // act
    const is34Old = isOld(34);
    const is35Old = isOld(35);
    const is36Old = isOld(36);
  
    // assert
    assert.strictEqual(is34Old, false);
    assert.strictEqual(is35Old, true);
    assert.strictEqual(is36Old, true);
  });

  it('fun with variables', () => {
    // act
    let name : string = 'Sophia';
    let nameImplicit = 'Sophia';
    let nameImplicit2 = name;
  
    const cool : boolean = true;
    const birthYear = 1995;
  
    // arrange
    assert.strictEqual(typeof(cool), 'boolean');
    assert.strictEqual(typeof(birthYear), 'number');
    assert.strictEqual(typeof(name), 'string');
    assert.strictEqual(typeof(nameImplicit), 'string');
    assert.strictEqual(typeof(nameImplicit2), 'string');
  });

  it('count odd numbers', () => {
    // arrange
    const firstFive = [1, 2, 3, 4, 5];
  
    // act
    const numberOfOdds = countOdd(firstFive);
  
    // arrange
    assert.strictEqual(numberOfOdds, 3);
  });
});
