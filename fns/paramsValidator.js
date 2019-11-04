/**
 * @exports paramsValidator
 * @status expiremental
 * @desc Validator function for checking if the
 * params passed are required or not.
 * @param {Object | string} incoming
 * @param {Object | string} required
 * @returns {boolean}
 */
exports.paramsValidator = (incoming, required) => {
    if (JSON.stringify(incoming) === JSON.stringify(Object.keys(required))) {
        return true
    } else {
        return false
    }
}
