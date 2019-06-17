const assert = require("assert");
var isDate = require("../fns/isDate");

describe("Unit test for isDate function", ()=>{

    it("The function should return true on valid dates", ()=>{
        let validDate = isDate.isDate("10 06 2014");
        assert.strictEqual(validDate, true);
    });

    it("The function should return true on complex dates", ()=>{
        let validDate2 = isDate.isDate("2011-10-10T14:48:00.000+09:00");
        let validDate3 = isDate.isDate("2011-10-10");
        let validDate4 = isDate.isDate("2011-10-10T14:48:00");
        let validDate5 = isDate.isDate("Thu, 01 Jan 1970 00:00:00 GMT-0400")
        let validDate6 = isDate.isDate("Aug 9, 1995")
        assert.strictEqual(validDate2, true);
        assert.strictEqual(validDate3, true);
        assert.strictEqual(validDate4, true);
        assert.strictEqual(validDate5, true);
        assert.strictEqual(validDate6, true);
    });

    it("The function should return false on invlaid dates", ()=>{
        let validDate = isDate.isDate("Tell them, winter came for House Frey");
        assert.strictEqual(validDate, false);
    });

})