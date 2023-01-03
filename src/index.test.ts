import 'mocha';
import assert from 'assert';

import { 
    greet, 
    isOld, 
    countOdd, 
    sumEven , 
    getPersonStreetNo, 
    Person, 
    IPerson, 
    getPersonNameString,
    printThis,
    } from './index';

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

  it('sum event numbers', () => {
    // arrange
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    // act
    const sum = sumEven(nums);
  
    // arrange
    assert.strictEqual(sum, 30);
  });

  it('gets the street number for a person', () => {
    //arrange
    const p : Person = {
        name: 'Sophia',
        birthYear: 1995,
        address : {
            street: 'Exempelgatan',
            streetNo: 37,
            city: 'Stockholm'
        }
    }

    //act
    const streetNo = getPersonStreetNo(p);

    // assert
    assert.strictEqual(streetNo, 37);
  });
  it('prints an IPerson', () => {
    //arrange
    const p1: IPerson = {name: 'Sophia', birthYear: 1995};
    const p2 = {name: 'David', birthYear: 1972, drummer: true};

    //act
    const p1Address = getPersonNameString(p1);
    const p2Address = getPersonNameString(p2);

    //assert
    assert.strictEqual(p1Address, "Sophia, 1995");
    assert.strictEqual(p2Address, "David, 1972");
  })

  it('uses union types to allow null', () => {
    // act
    const result1 = printThis(undefined);
    const result2 = printThis(null);
  
    // assert
    assert.strictEqual(result1, "no person supplied");
    assert.strictEqual(result2, "no person supplied");
  });
});
