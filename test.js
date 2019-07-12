/**
 * @fileoverview Test file
 * @todo Remove this on stable release
 */

var cer = require("./index")

console.log(cer.cerebreus.isEmailValid('jithin@gmail.com'));
console.log(cer.cerebreus.normalizeEmail("jithin@gmail.com", "gmail"));
console.log(cer.cerebreus.isStringJSON("{}"));
console.log(cer.cerebreus.isPostalCodeValid("690519","IN"));
console.log(cer.cerebreus.isPhoneNumberValid("918943275569","en-IN"))
console.log(cer.cerebreus.isJWTValid("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"));
console.log(cer.cerebreus.isCVVValid("322"));
console.log(cer.cerebreus.getCardProvider("5241933380249003"));
console.log(cer.cerebreus.isIFSCValid("UTIB0003375"))