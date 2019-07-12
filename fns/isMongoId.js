var convertToHexa = require("../lib/isHexaDecimal");
var assertString = require("../lib/isString");
/**
 * @exports isMongoId
 * @param {String} id
 * @returns {Boolean}
 */
exports.isMongoId = id=> {
    assertString.isString(id);
    return convertToHexa.isHexaDecimal(id) && id.length === 24;
}