const assert = require('assert');
var base32Validator = require('../fns/isBase32');

describe('Unit test for checking if a string is base32', ()=>{
    it('This function should return true on correct base64 string', () => {
        let validBase32 = base32Validator.isBase32('AJU3JX7ZIA54EZQ=')
        assert.strictEqual(validBase32, true);
    });
    
    it('This function should return false on correct base32 string', () => {
        let invalidBase32 = base32Validator.isBase32('dffcc')
        assert.strictEqual(invalidBase32, false);
    });
});