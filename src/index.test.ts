import 'mocha';
import assert from 'assert'; 

import { greet } from '.index'

describe('ts tests', () => {
    it('get greeting', () => {
        const birthYear = '1995';
        const name = 'Sophia';

        const result = greet(name + birthYear);

        assert.strictEqual(result, 'Hello Sophia, you are 27 years old');
    })
})