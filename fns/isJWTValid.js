var assertString = require("../lib/isString");

/**
 * @exports isJWT
 * @param {String} str
 * @returns {Boolean}
 */
exports.isJWT = (str)=> {
    assertString.isString(str);
    const jwt = /^([A-Za-z0-9\-_~+\/]+[=]{0,2})\.([A-Za-z0-9\-_~+\/]+[=]{0,2})(?:\.([A-Za-z0-9\-_~+\/]+[=]{0,2}))?$/;
    return jwt.test(str);
}