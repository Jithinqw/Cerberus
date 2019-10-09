/**
 * @exports paramsValidator
 * @status expiremental
 * @desc Validator function for checking if the
 * params passed are required or not.
 * @param {Object | String} incoming
 * @param {Object | String} required
 * @returns {Boolean}
 */
exports.paramsValidator = (incoming, required) => {
    if (JSON.stringify(incoming) === JSON.stringify(Object.keys(required))) {
        return true
    } else {
        return false
    }
}
