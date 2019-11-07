const assert = require('assert');
var octalValidator = require('../fns/isOctal');

describe('Unit test for Octal', () => {
    it('This function should return true on correct octal', () => {
        let validOctal = octalValidator.isOctal('0')
        assert.strictEqual(validOctal, true);
    });

    it('This function should return false on incorrect magnet uri', () => {
        let invalidOctal = octalValidator.isOctal('d')
        assert.strictEqual(invalidOctal, false);
    });
})