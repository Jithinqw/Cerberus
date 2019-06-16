var validator = require('./fns/isStringJSON');
var norm = require('./fns/emailNormalizer');
var oeo = require("./fns/isEmail");

//var demo = validator.isStringJSON("{}")
//console.log(demo);
// var demo = norm.normalizeEmail("jithin@gmail.com","gmail");
// console.log(demo);

var demo = oeo.isEmailValid("jithin@gmail.com");
console.log(demo);