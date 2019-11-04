var assertString = require('../lib/isString');

/**
* @function isDivisible
* @param {string} str
* @param {number} num
* @returns {Boolean}  
*/
exports.isDivisible = (str, num)=>{
  assertString(str);
  return parseFloat(str) % parseInt(number, 10) === 0;
}
