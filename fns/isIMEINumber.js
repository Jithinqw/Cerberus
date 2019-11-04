var assertString = require('../lib/isString');
var luhnAlgo = require('../lib/luhnCheck');

/**
 * @exports isIMEINumber
 * @param {string} imeiNumber
 * @returns {boolean}
 */
exports.isIMEINumber = imeiNumber => {
    assertString.isString(imeiNumber);
    return luhnAlgo.luhnCheck(imeiNumber);
}