var assertString = require('../lib/isString')

/**
 * @exports isPanCard
 * @param {string} panNumber
 * @returns {boolean}
 */
exports.isPanCard = panNumber => {
    assertString.isString(panNumber)
    const PAN_REG = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/
    return PAN_REG.test(panNumber)
}
