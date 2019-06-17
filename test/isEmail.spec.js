const assert = require("assert");
var isEmailValid = require("../fns/isEmail");

describe("Unit test for validating email is valid", ()=>{

    it("This function should be able to return true if email is valid", ()=>{
        let isValid = isEmailValid.isEmailValid("jithin@gmail.com");
        assert.strictEqual(isValid, true);
    });

    it("This function should return fals if the email is invalid",()=> {
        let isValid = isEmailValid.isEmailValid("jtihin");
        assert.strictEqual(isValid, false);
    });
});