var convertToHexa = require("../lib/isHexaDecimal");

/**
 * @exports isMongoId
 * @param {String} id
 * @returns {Boolean}
 */
exports.isMongoId = id=> {
    return convertToHexa.isHexaDecimal(id) && id.length === 24;
}