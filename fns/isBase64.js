var assertString = require('../lib/isString');

/**
* @exports isBase64
* @param {string} str
* @returns {boolean}
*/
exports.isBase64 = str =>{
  assertString.isString(str);
  const BASE64_REGEX = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
  return (BASE64_REGEX.test(str));
}
