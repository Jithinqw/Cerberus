var assertString = require('../lib/isString')

/**
 * @exports validate CVV number
 * @desc validate cvv number for cards.
 * @param {string} cvvNumber
 * @returns {boolean}
 * @todo Find other ways to validate a CVV number.This method is not good.
 */
exports.CVVValidator = cvvNumber => {
    assertString.isString(cvvNumber)
    if (cvvNumber.length == 3) {
        return true
    } else {
        return false
    }
}
