const assert = require("assert");
var JWTValidator = require("../fns/isJWTValid");

describe("Unit test for JWT validator", ()=>{
    it("The function should return true on valid JWT token",()=>{
        let JWT = JWTValidator.isJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
        assert.strictEqual(JWT, true);
    });
    
    it("The function should return false on invalid JWT token",()=>{
        let JWT = JWTValidator.isJWT(".SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
        assert.strictEqual(JWT, false);
    })
})