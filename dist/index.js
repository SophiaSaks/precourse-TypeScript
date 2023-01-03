"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPersonNameString = exports.getPersonStreetNo = exports.sumEven = exports.countOdd = exports.isOld = exports.greet = void 0;
;
function greet(name, birthYear) {
    const age = new Date().getFullYear() - birthYear;
    return `Hello ${name}, you are ${age} years old`;
}
exports.greet = greet;
function isOld(age) {
    if (age >= 35) {
        return true;
    }
    return false;
}
exports.isOld = isOld;
function countOdd(array) {
    return array.filter(num => num % 2 !== 0).length;
}
exports.countOdd = countOdd;
function sumEven(array) {
    return array
        .filter(num => num % 2 === 0)
        .reduce((sum, curr) => sum + curr, 0);
}
exports.sumEven = sumEven;
function getPersonStreetNo(p) {
    return p.address.streetNo;
}
exports.getPersonStreetNo = getPersonStreetNo;
function getPersonNameString(p) {
    return `${p.name}, ${p.birthYear.toString()}`;
}
exports.getPersonNameString = getPersonNameString;
