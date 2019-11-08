var assertString = require('../lib/isString');

/**
 * @exports isBase32
 * @param {string} str
 * @returns {boolean}
 */
exports.isBase32 = str =>{
    assertString.isString(str);
    const BASE32_REG = /^[A-Z2-7]+=*$/;
    if (str.length > 0 && str.length % 8 === 0 && BASE32_REG.test(str)) {
        return true;
    }
    return false;
}
