const assert = require('assert');
var base64Validator = require('../fns/isBase64');

describe('Unit test for checking if a string is base64', ()=>{
    it('This function should return true on correct base64 string', () => {
        let validBase64 = base64Validator.isBase64('VGhpcyBpcyBhIHNlY3JldA==')
        assert.strictEqual(validBase64, true);
    });
    
    it('This function should return false on correct base64 string', () => {
        let validBase64 = base64Validator.isBase64('dffcc')
        assert.strictEqual(validBase64, false);
    });
});