const assert = require('assert');
var asciiValidator = require('../fns/isAscii');

describe('Unit test for checking if a string is ascii', ()=>{
    it('This function should return true on correct ascii string', () => {
        let validascii = asciiValidator.isAscii('x0052')
        assert.strictEqual(validascii, true);
    });
    
    it('This function should return false on correct asciii string', () => {
        let invalidascii = asciiValidator.isAscii('');
        assert.strictEqual(invalidascii, false);
    });
});