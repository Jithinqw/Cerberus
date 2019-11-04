var assertString = require('../lib/isString');

/**
 * @exports isEthereumHash
 * @param {string} hash
 * @returns {boolean}
 */
exports.isEthereumHash = hash =>{
    assertString.isString(hash);
    const REGEX = /^0x([A-Fa-f0-9]{64})$/
    return REGEX.test(hash);
}