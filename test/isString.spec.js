const assert = require("assert");
var isStringValid = require("../lib/isString");

describe("Unit test for isString function", ()=> {

    it("The function should be able to send true on string", ()=>{
        let isValid = isStringValid.isString("Jithin");
        assert.strictEqual(isValid, true);
    });

    it("The function should send false if the string is false", ()=>{
        let isValid = isStringValid.isString(2333);
        assert.strictEqual(isValid, false);
    })
})