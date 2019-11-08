var assertString = require('../lib/isString')

/**
 * @exports validate CVV number
 * @desc validate cvv number for cards.
 * @param {string} cvvNumber
 * @returns {boolean}
 * @todo Find other ways to validate a CVV number.This method is not good.
 */
exports.CVVValidator = (cvvNumber, size=3) => {
    assertString.isString(cvvNumber)
    if(size == 3 && cvvNumber.length == 3){
        return true;
    }else if(size == 4 && cvvNumber.length == 4){
        return true;
    }
    return false;
}
