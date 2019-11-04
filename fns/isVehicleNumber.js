var assertString = require('../lib/isString');

const PLATE_REG = {
    IND: /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/
};

/**
 * @exports isVehiclePlateValid
 * @param {string} number
 * @param {string} countryCode 
 * @param {boolean}
 */
exports.isVehiclePlateValid = (number, countryCode='IND') => {
    assertString.isString(number);
    const pattern = PLATE_REG[countryCode];
    return pattern && pattern.test(number)
}