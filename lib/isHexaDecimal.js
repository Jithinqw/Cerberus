var assertString = require("./isString");

/**
 * @exports isHexaDecimal
 * @param {String} value
 * @returns {Boolean} 
 */
exports.isHexaDecimal = value=> {
    assertString.isString(value);
    const hexaReg = /^[0-9A-F]+$/i;
    return hexaReg.test(value);
}