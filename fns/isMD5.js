var assertString = require('../lib/isString');

/**
 * @exports isMD5
 * @param {string} str
 * @returns {boolean}
 */

exports.isMD5 = str => {
    assertString.isString(str);
    const MD5_REG = /^[a-f0-9]{32}$/;
    return MD5_REG.test(str);
}