var assertString = require('../lib/isString');

/**
 * @exports isEthereumHash
 * @param {String} hash
 * @returns {Boolean}
 */
exports.isEthereumHash = hash =>{
    assertString.isString(hash);
    const REGEX = /^0x([A-Fa-f0-9]{64})$/
    return REGEX.test(hash);
}