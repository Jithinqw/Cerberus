const assert = require('assert');
var IMEINumberValidator = require('../fns/isIMEINumber');

describe('Unit test for checking if a IMEI number string is valid', ()=>{
    it('This function should return true on correct IMEI number', ()=>{
        let validIMEI = IMEINumberValidator.isIMEINumber('490154203237518');
        assert.strictEqual(validIMEI, true);
    });
    
    it('This function should return false on correct IMEI number', ()=>{
        let validIMEI = IMEINumberValidator.isIMEINumber('4954203238');
        assert.strictEqual(validIMEI, false);
    });
});