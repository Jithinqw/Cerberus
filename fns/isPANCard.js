var assertString = require("../lib/isString");

/**
 * @exports isPanCard
 * @param {String} panNumber
 * @returns {Boolean}
 */
exports.isPanCard = panNumber=>{
    assertString.isPanCard(panNumber);
    let regExPan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;
    return regExPan.test(panNumber);
}