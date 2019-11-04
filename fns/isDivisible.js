var assertString = require('../lib/isString');

/**
* @function isDivisible
* @param {string} str
* @param {number} num
* @returns {boolean}  
*/
exports.isDivisible = (str, num)=>{
  assertString(str);
  return parseFloat(str) % parseInt(num, 10) === 0;
}
