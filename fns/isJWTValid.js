var assertString = require('../lib/isString')

/**
 * @exports isJWT
 * @param {string} str
 * @returns {boolean}
 */
exports.isJWT = str => {
    assertString.isString(str);
    const JWT_REG = /^([A-Za-z0-9\-_~+\/]+[=]{0,2})\.([A-Za-z0-9\-_~+\/]+[=]{0,2})(?:\.([A-Za-z0-9\-_~+\/]+[=]{0,2}))?$/
    return JWT_REG.test(str);
}
