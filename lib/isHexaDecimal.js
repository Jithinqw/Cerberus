/**
 * @exports isHexaDecimal
 * @param {String} value
 * @returns {Boolean} 
 */
exports.isHexaDecimal = value=> {
    const hexaReg = /^[0-9A-F]+$/i;
    return hexaReg.test(value);
}