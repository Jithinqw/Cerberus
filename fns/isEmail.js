var splitUsername = require('../fns/emailNormalizer')
var restrictedDomains = require('../lib/reservedDomains.json')
var assertString = require('../lib/isString')

/**
 * @function isUsernameValid
 * @param {string} email
 * @returns {boolean}
 */
var isUsernameValid = email => {
    assertString.isString(email)
    let username = splitUsername.getUsername(email)
    if (/[\.";<>]/.test(username.charAt(0)) === false) {
        return true
    } else {
        return false
    }
}

/**
 * @function validateEmail
 * @param {string} email
 * @returns {boolean}
 */
var emailChecker = (exports.emailValidator = email => {
    assertString.isString(email)
    re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    return re.test(String(email).toLowerCase())
})

/**
 * @function restrictedDomainCheck
 * @param {*} email
 * @returns {boolean}
 */
var restrictedDomainCheck = email => {
    assertString.isString(email)
    var result = true
    let domain = email.split('@')
    for (let i = 0; i <= restrictedDomains['domains'].length; i++) {
        if (restrictedDomains['domains'][i] === domain[1]) {
            result = true;
        } else {
            result = false;
        }
    }
    return result;
}

/**
 * @exports isEmailValid
 * @desc Checks if the email is valid accoriding to the default or options config.
 * Checking is done using spec defined in RFC 5321.
 * @param {string} email
 * @return {boolean}
 */
exports.isEmailValid = email => {
    assertString.isString(email)
    if (emailChecker(email) === true) {
        if (restrictedDomainCheck(email) === false) {
            if (isUsernameValid(email) === true) {
                return true;
            }
        }
    } else {
        return false;
    }
}
