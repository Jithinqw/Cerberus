var assertString = require('../lib/isString');

/**
 * @exports isBase32
 * @param {string} str
 * @returns {boolean}
 */
exports.isAscii = str =>{
    assertString.isString(str);
    const ASCII_REG = /^[\x00-\x7F]+$/;
    return ASCII_REG.test(str);
}
