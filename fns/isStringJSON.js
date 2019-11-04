var assertString = require('../lib/isString')

/**
 * @exports isStringJSON
 * @desc checks if the string is a JSON or not.
 * @param {string} string
 * @returns {boolean}
 */
exports.isStringJSON = string => {
    assertString.isString(string)
    try {
        if (typeof (JSON.parse(string) === Object)) {
            return true
        } else {
            return false
        }
    } catch (e) {
        return false
    }
}
