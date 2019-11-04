var convertToHexa = require('../lib/isHexaDecimal')
var assertString = require('../lib/isString')

/**
 * @exports isMongoId
 * @param {string} id
 * @returns {boolean}
 */
exports.isMongoId = id => {
    assertString.isString(id);
    return convertToHexa.isHexaDecimal(id) && id.length === 24
}
