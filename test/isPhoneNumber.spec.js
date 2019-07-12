const assert = require("assert");
var phoneNumberValidator = require("../fns/isPhoneNumber");

describe("Unit test for phone number validator", ()=>{

    it("The function should return true on valid phone number", ()=>{
        let validPhone = phoneNumberValidator.isPhoneNumber("918943275569","en-IN");
        assert.strictEqual(validPhone, true);
    });

    it("The function should return false on valid phone number", ()=>{
        let validPhone = phoneNumberValidator.isPhoneNumber("9189432755639","en-IN");
        assert.strictEqual(validPhone, false);
    });
})