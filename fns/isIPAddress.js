var assertString = require('../lib/isString');

/**
 * @exports isIPAddress
 * @param {string} address
 * @returns {boolean}
 */
exports.isIPAddress = address=> {
  assertString.isString(address);
  const IP_REG = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  return IP_REG.test(address)
}
