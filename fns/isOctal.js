var assertString = require('../lib/isString');

const OCTAL_REG = /^(0o)?[0-7]+$/i;

exports.isOctal = str => {
  assertString.isString(str);
  return OCTAL_REG.test(str);
}