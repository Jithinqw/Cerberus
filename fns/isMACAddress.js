var assertString = require('../lib/isString');

/**
 * @exports isMACAddress
 * @param {string} address
 * @returns {boolean}
 */
exports.isMACAddress = address => {
    assertString.isString(address);
    const MAC_REG = /^(([A-Fa-f0-9]{2}[:]){5}[A-Fa-f0-9]{2}[,]?)+$/;
    return MAC_REG.test(address);
}