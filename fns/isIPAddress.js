var assertString = require('../lib/isString');

/**
 * @function isIPAddress
 * @param {string} address
 * @returns {Boolean}
 */
exports.isIPAddress = address=> {
  assertString.isString(address);
  IP_REG = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  return IP_REG.test(address)
}
