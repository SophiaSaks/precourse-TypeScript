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
});
