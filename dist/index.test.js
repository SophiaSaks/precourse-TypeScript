"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const assert_1 = __importDefault(require("assert"));
const index_1 = require("./index");
describe('ts tests', () => {
    it('get greeting', () => {
        const birthYear = 1995;
        const name = 'Sophia';
        const result = (0, index_1.greet)(name, birthYear);
        assert_1.default.strictEqual(result, 'Hello Sophia, you are 28 years old');
    });
    it('returns true if age is above 35', () => {
        // act
        const is34Old = (0, index_1.isOld)(34);
        const is35Old = (0, index_1.isOld)(35);
        const is36Old = (0, index_1.isOld)(36);
        // assert
        assert_1.default.strictEqual(is34Old, false);
        assert_1.default.strictEqual(is35Old, true);
        assert_1.default.strictEqual(is36Old, true);
    });
    it('fun with variables', () => {
        // act
        let name = 'Sophia';
        let nameImplicit = 'Sophia';
        let nameImplicit2 = name;
        const cool = true;
        const birthYear = 1995;
        // arrange
        assert_1.default.strictEqual(typeof (cool), 'boolean');
        assert_1.default.strictEqual(typeof (birthYear), 'number');
        assert_1.default.strictEqual(typeof (name), 'string');
        assert_1.default.strictEqual(typeof (nameImplicit), 'string');
        assert_1.default.strictEqual(typeof (nameImplicit2), 'string');
    });
    it('count odd numbers', () => {
        // arrange
        const firstFive = [1, 2, 3, 4, 5];
        // act
        const numberOfOdds = (0, index_1.countOdd)(firstFive);
        // arrange
        assert_1.default.strictEqual(numberOfOdds, 3);
    });
    it('sum event numbers', () => {
        // arrange
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // act
        const sum = (0, index_1.sumEven)(nums);
        // arrange
        assert_1.default.strictEqual(sum, 30);
    });
    it('gets the street number for a person', () => {
        //arrange
        const p = {
            name: 'Sophia',
            birthYear: 1995,
            address: {
                street: 'Exempelgatan',
                streetNo: 37,
                city: 'Stockholm'
            }
        };
        //act
        const streetNo = (0, index_1.getPersonStreetNo)(p);
        // assert
        assert_1.default.strictEqual(streetNo, 37);
    });
    it('prints an IPerson', () => {
        //arrange
        const p1 = { name: 'Sophia', birthYear: 1995 };
        const p2 = { name: 'David', birthYear: 1972, drummer: true };
        //act
        const p1Address = (0, index_1.getPersonNameString)(p1);
        const p2Address = (0, index_1.getPersonNameString)(p2);
        //assert
        assert_1.default.strictEqual(p1Address, "Sophia, 1995");
        assert_1.default.strictEqual(p2Address, "David, 1972");
    });
});
