var assertString = require('../lib/isString')

/**
 * @exports isIFSCode
 * @param {string} code
 * @returns {boolean}
 */
var IFSCodeValidator = (exports.isIFSCode = code => {
    assertString.isString(code)
    const IFSC = /^(?=.*\d)(?=.*[0-9A-Z]).{11}$/
    return IFSC.test(code)
})

/**
 * @exports getBankCode
 * @param {string } code
 * @returns {string}
 */
exports.getBankCode = code => {
    assertString.isString(code)
    if (IFSCodeValidator(code) === true) {
        return code.substring(0, 4)
    } else {
        return false
    }
}

/**
 * @exports getBranchCode
 * @param { string } code
 * @returns {string}
 */
exports.getBranchCode = code => {
    assertString.isString(code)
    if (IFSCodeValidator(code) === true) {
        return code.substring(5, 11)
    } else {
        return false
    }
}
