var assertString = require('../lib/isString')

/**
 * @exports reverseString
 * @param {string} param
 * @returns {string}
 */
exports.reverseString = param => {
    assertString.isString(param)
    let temp = []
    for (let i = 0; i <= param.length; i++) {
        temp.push(param[param.length - i])
    }
    return temp
}
