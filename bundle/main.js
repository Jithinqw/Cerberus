(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var normEmail = require('../lib/emailDomains.json')
var emailValidation = require('./isEmail')
var assertString = require('../lib/isString')

/**
 * @exports normalizeEmail
 * @desc Checks if the email is belonging to a particular domain or not.
 * @param {String} email
 * @param {String} domainName
 */
exports.normalizeEmail = (email, domainName) => {
    assertString.isString(email)
    if (emailValidation.emailValidator(email) === false) {
        return false
    } else {
        var nameMatch = email.split('@')
        for (let i = 0; i <= normEmail[domainName].length; i++) {
            if (nameMatch[1] == normEmail[domainName][i]) {
                return true
            } else {
                return false
            }
        }
    }
}

/**
 * @exports getUsername
 * @desc Returns an username from the email address
 * @param {String} email
 * @returns {String | null}
 */
exports.getUsername = email => {
    assertString.isString(email)
    if (emailValidation.emailValidator(email) === false) {
        return null
    } else {
        var name = email.split('@')
        return name[0] ? name[0] : null
    }
}

},{"../lib/emailDomains.json":17,"../lib/isString":19,"./isEmail":6}],2:[function(require,module,exports){
var assertString = require('../lib/isString')

/**
 * @exports isIFSCode
 * @param {String} code
 * @returns {Boolean}
 */
var IFSCodeValidator = (exports.isIFSCode = code => {
    assertString.isString(code)
    const IFSC = /^(?=.*\d)(?=.*[0-9A-Z]).{11}$/
    return IFSC.test(code)
})

/**
 * @exports getBankCode
 * @param { String } code
 * @returns {String}
 */
exports.getBankCode = code => {
    assertString.isString(code)
    if (IFSCodeValidator(code) === true) {
        return code.substring(0, 4)
    } else {
        return false
    }
}

/**
 * @exports getBranchCode
 * @param { String } code
 * @returns {String}
 */
exports.getBranchCode = code => {
    assertString.isString(code)
    if (IFSCodeValidator(code) === true) {
        return code.substring(5, 11)
    } else {
        return false
    }
}

},{"../lib/isString":19}],3:[function(require,module,exports){
var assertString = require('../lib/isString')

/**
 * @exports validate CVV number
 * @desc validate cvv number for cards.
 * @param {String} cvvNumber
 * @returns {Boolean}
 * @todo Find other ways to validate a CVV number.This method is not good.
 */
exports.CVVValidator = cvvNumber => {
    assertString.isString(cvvNumber)
    if (cvvNumber.length == 3) {
        return true
    } else {
        return false
    }
}

},{"../lib/isString":19}],4:[function(require,module,exports){
var assertString = require('../lib/isString')
var luhnCheck = require('../lib/luhnCheck')

/**
 * @exports isCreditCardNumber
 * @desc Checks if the credit card number is valid or not.
 * @param { String } creditCardNumber
 * @return { Boolean }
 */
exports.isCreditCardNumber = creditCardNumber => {
    return luhnCheck.luhnCheck(creditCardNumber)
}

/**
 * @exports detectCardType
 * @desc detects card type
 * @param { String } cardNumber
 * @returns { String }
 */
exports.detectCardType = cardNumber => {
    assertString.isString(cardNumber)
    if (luhnCheck.luhnCheck(cardNumber) == true) {
        var re = {
            electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
            maestro: /^(5[06789]|6)[0-9]{0,}$/,
            dankort: /^(5019)\d+$/,
            interpayment: /^(636)\d+$/,
            unionpay: /^(62[0-9]{14,17})$/,
            visa: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
            bcglobal: /^(6541|6556)[0-9]{12}$/,
            carteblanchecard: /^389[0-9]{11}$/,
            instapaycard: /^63[7-9][0-9]{13}$/,
            koreanlocalCard:/^9[0-9]{15}$/,
            lasercard: /^(6304|6706|6709|6771)[0-9]{12,15}$/,
            solocard: /^(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}$/,
            switchcard: /^(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}$/,
            mastercard: /^5[1-5][0-9]{14}$/,
            americanexpress: /^3[47][0-9]{13}$/,
            dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            rupay: /^6[0-9]{15}$/,
            discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
        }

        for (var key in re) {
            if (re[key].test(cardNumber)) {
                return key
            }
        }
    } else {
        return false;
    }
}

},{"../lib/isString":19,"../lib/luhnCheck":20}],5:[function(require,module,exports){
/**
 * @exports isDate
 * @desc This function only recognize ISO format defined by ECMA Script ECMA-256
 * https://www.ecma-international.org/ecma-262/6.0/#sec-date.parse
 * @param {String} dateValue
 * @returns {Boolean}
 */
exports.isDate = dateValue => {
    let validateDate = Date.parse(new Date(dateValue))
    if (isNaN(validateDate)) {
        return false
    } else {
        return true
    }
}

},{}],6:[function(require,module,exports){
var splitUsername = require('../fns/emailNormalizer')
var restrictedDomains = require('../lib/reservedDomains.json')
var assertString = require('../lib/isString')

/**
 * @function isUsernameValid
 * @param {*} email
 * @returns {Boolean}
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
 * @param {*} email
 */
var emailChecker = (exports.emailValidator = email => {
    assertString.isString(email)
    re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    return re.test(String(email).toLowerCase())
})

/**
 * @function restrictedDomainCheck
 * @param {*} email
 * @returns {Boolean}
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
 * @param {String} email
 * @return {Boolean}
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

},{"../fns/emailNormalizer":1,"../lib/isString":19,"../lib/reservedDomains.json":21}],7:[function(require,module,exports){
var assertString = require('../lib/isString');

/**
 * @exports isEthereumHash
 * @param {String} hash
 * @returns {Boolean}
 */
exports.isEthereumHash = hash =>{
    assertString.isString(hash);
    const REGEX = /^0x([A-Fa-f0-9]{64})$/
    return REGEX.test(hash);
}
},{"../lib/isString":19}],8:[function(require,module,exports){
var assertString = require('../lib/isString')

/**
 * @exports isJWT
 * @param {String} str
 * @returns {Boolean}
 */
exports.isJWT = str => {
    assertString.isString(str);
    const jwt = /^([A-Za-z0-9\-_~+\/]+[=]{0,2})\.([A-Za-z0-9\-_~+\/]+[=]{0,2})(?:\.([A-Za-z0-9\-_~+\/]+[=]{0,2}))?$/
    return jwt.test(str);
}

},{"../lib/isString":19}],9:[function(require,module,exports){
var convertToHexa = require('../lib/isHexaDecimal')
var assertString = require('../lib/isString')

/**
 * @exports isMongoId
 * @param {String} id
 * @returns {Boolean}
 */
exports.isMongoId = id => {
    assertString.isString(id);
    return convertToHexa.isHexaDecimal(id) && id.length === 24
}

},{"../lib/isHexaDecimal":18,"../lib/isString":19}],10:[function(require,module,exports){
var assertString = require('../lib/isString')

/**
 * @exports isPanCard
 * @param {String} panNumber
 * @returns {Boolean}
 */
exports.isPanCard = panNumber => {
    assertString.isString(panNumber)
    let regExPan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/
    return regExPan.test(panNumber)
}

},{"../lib/isString":19}],11:[function(require,module,exports){
/**
 * @fileoverview finds if a string is a phone number or not.
 * @desc Follows The international public telecommunication numbering plan (IPTNP)
 * Please see https://en.wikipedia.org/wiki/E.164
 * regular expression taken from http://regexlib.com/Search.aspx?k=phone&AspxAutoDetectCookieSupport=1
 */

var assertString = require('../lib/isString')
const phones = {
    'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
    'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
    'ar-EG': /^((\+?20)|0)?1[0125]\d{8}$/,
    'ar-IQ': /^(\+?964|0)?7[0-9]\d{8}$/,
    'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
    'ar-KW': /^(\+?965)[569]\d{7}$/,
    'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
    'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
    'ar-TN': /^(\+?216)?[2459]\d{7}$/,
    'be-BY': /^(\+?375)?(24|25|29|33|44)\d{7}$/,
    'bg-BG': /^(\+?359|0)?8[789]\d{7}$/,
    'bn-BD': /^(\+?880|0)1[1356789][0-9]{8}$/,
    'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    'da-DK': /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
    'de-DE': /^(\+49)?0?1(5[0-25-9]\d|6([23]|0\d?)|7([0-57-9]|6\d))\d{7}$/,
    'el-GR': /^(\+?30|0)?(69\d{8})$/,
    'en-AU': /^(\+?61|0)4\d{8}$/,
    'en-GB': /^(\+?44|0)7\d{9}$/,
    'en-GH': /^(\+233|0)(20|50|24|54|27|57|26|56|23|28)\d{7}$/,
    'en-HK': /^(\+?852\-?)?[456789]\d{3}\-?\d{4}$/,
    'en-IE': /^(\+?353|0)8[356789]\d{7}$/,
    'en-IN': /^(\+?91|0)?[6789]\d{9}$/,
    'en-KE': /^(\+?254|0)(7|1)\d{8}$/,
    'en-MU': /^(\+?230|0)?\d{8}$/,
    'en-NG': /^(\+?234|0)?[789]\d{9}$/,
    'en-NZ': /^(\+?64|0)[28]\d{7,9}$/,
    'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
    'en-RW': /^(\+?250|0)?[7]\d{8}$/,
    'en-SG': /^(\+65)?[89]\d{7}$/,
    'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
    'en-UG': /^(\+?256|0)?[7]\d{8}$/,
    'en-US': /^((\+1|1)?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
    'en-ZA': /^(\+?27|0)\d{9}$/,
    'en-ZM': /^(\+?26)?09[567]\d{7}$/,
    'es-CL': /^(\+?56|0)[2-9]\d{1}\d{7}$/,
    'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
    'es-MX': /^(\+?52)?(1|01)?\d{10,11}$/,
    'es-PY': /^(\+?595|0)9[9876]\d{7}$/,
    'es-UY': /^(\+598|0)9[1-9][\d]{6}$/,
    'et-EE': /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
    'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
    'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
    'fo-FO': /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
    'fr-FR': /^(\+?33|0)[67]\d{8}$/,
    'he-IL': /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}$/,
    'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
    'id-ID': /^(\+?62|0)8(1[123456789]|2[1238]|3[1238]|5[12356789]|7[78]|9[56789]|8[123456789])([\s?|\d]{5,11})$/,
    'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
    'ja-JP': /^(\+?81|0)[789]0[ \-]?[1-9]\d{2}[ \-]?\d{5}$/,
    'kk-KZ': /^(\+?7|8)?7\d{9}$/,
    'kl-GL': /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
    'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
    'lt-LT': /^(\+370|8)\d{8}$/,
    'ms-MY': /^(\+?6?01){1}(([0145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
    'nb-NO': /^(\+?47)?[49]\d{7}$/,
    'nl-BE': /^(\+?32|0)4?\d{8}$/,
    'nn-NO': /^(\+?47)?[49]\d{7}$/,
    'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
    'pt-BR': /(?=^(\+?5{2}\-?|0)[1-9]{2}\-?\d{4}\-?\d{4}$)(^(\+?5{2}\-?|0)[1-9]{2}\-?[6-9]{1}\d{3}\-?\d{4}$)|(^(\+?5{2}\-?|0)[1-9]{2}\-?9[6-9]{1}\d{3}\-?\d{4}$)/,
    'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
    'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
    'ru-RU': /^(\+?7|8)?9\d{9}$/,
    'sl-SI': /^(\+386\s?|0)(\d{1}\s?\d{3}\s?\d{2}\s?\d{2}|\d{2}\s?\d{3}\s?\d{3})$/,
    'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
    'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
    'sv-SE': /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
    'th-TH': /^(\+66|66|0)\d{9}$/,
    'tr-TR': /^(\+?90|0)?5\d{9}$/,
    'uk-UA': /^(\+?38|8)?0\d{9}$/,
    'vi-VN': /^(\+?84|0)((3([2-9]))|(5([2689]))|(7([0|6-9]))|(8([1-6|89]))|(9([0-9])))([0-9]{7})$/,
    'zh-CN': /^((\+|00)86)?1([358][0-9]|4[579]|6[67]|7[0135678]|9[189])[0-9]{8}$/,
    'zh-TW': /^(\+?886\-?|0)?9\d{8}$/,
}

/**
 * @exports isPhoneNumber
 * @param {String} phoneNumber
 * @param {String} countryCode
 * @returns {Boolean}
 */
exports.isPhoneNumber = (phoneNumber, countryCode) => {
    assertString.isString(phoneNumber)
    if (countryCode in phones === true) {
        return phones[countryCode].test(phoneNumber)
    }
}

},{"../lib/isString":19}],12:[function(require,module,exports){
var assertString = require('../lib/isString')

const threeDigit = /^\d{3}$/;
const fourDigit = /^\d{4}$/;
const fiveDigit = /^\d{5}$/;
const sixDigit = /^\d{6}$/;


const postalPattern = {
    AD: /^AD\d{3}$/,
    AT: fourDigit,
    AU: fourDigit,
    BE: fourDigit,
    BG: fourDigit,
    BR: /^\d{5}-\d{3}$/,
    CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
    CH: fourDigit,
    CZ: /^\d{3}\s?\d{2}$/,
    DE: fiveDigit,
    DK: fourDigit,
    DZ: fiveDigit,
    EE: fiveDigit,
    ES: fiveDigit,
    FI: fiveDigit,
    FR: /^\d{2}\s?\d{3}$/,
    GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
    GR: /^\d{3}\s?\d{2}$/,
    HR: /^([1-5]\d{4}$)/,
    HU: fourDigit,
    ID: fiveDigit,
    IE: /^[A-z]\d[\d|w]\s\w{4}$/i,
    IL: fiveDigit,
    IN: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
    IS: threeDigit,
    IT: fiveDigit,
    JP: /^\d{3}\-\d{4}$/,
    KE: fiveDigit,
    LI: /^(948[5-9]|949[0-7])$/,
    LT: /^LT\-\d{5}$/,
    LU: fourDigit,
    LV: /^LV\-\d{4}$/,
    MX: fiveDigit,
    MT: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
    NL: /^\d{4}\s?[a-z]{2}$/i,
    NO: fourDigit,
    NZ: fourDigit,
    PL: /^\d{2}\-\d{3}$/,
    PR: /^00[679]\d{2}([ -]\d{4})?$/,
    PT: /^\d{4}\-\d{3}?$/,
    RO: sixDigit,
    RU: sixDigit,
    SA: fiveDigit,
    SE: /^[1-9]\d{2}\s?\d{2}$/,
    SI: fourDigit,
    SK: /^\d{3}\s?\d{2}$/,
    TN: fourDigit,
    TW: /^\d{3}(\d{2})?$/,
    UA: fiveDigit,
    US: /^\d{5}(-\d{4})?$/,
    ZA: fourDigit,
    ZM: fiveDigit
}

/**
 * @exports isPostalCodeValid
 * @param {String} postalCode
 * @param {String} countryCode
 * @returns {Boolean}
 */
exports.isPostalCodeValid = (postalCode, countryCode) => {
    assertString.isString(postalCode)
    if (countryCode.toUpperCase() in postalPattern === true) {
        return postalPattern[countryCode].test(postalCode)
    } else {
        throw new Error(`Invalid country code ${countryCode}`)
    }
}

},{"../lib/isString":19}],13:[function(require,module,exports){
var assertString = require('../lib/isString')

/**
 * @exports isStringJSON
 * @desc checks if the string is a JSON or not.
 * @param {String} string
 * @returns {Boolean}
 */
exports.isStringJSON = string => {
    assertString.isString(string)
    try {
        if (typeof (JSON.parse(string) === Object)) {
            return true
        } else {
            return false
        }
    } catch (e) {
        return false
    }
}

},{"../lib/isString":19}],14:[function(require,module,exports){
var assertString = require('../lib/isString');

/**
 * @exports isValidPort 
 * @param {String} port
 * @returns {Boolean}
 */
exports.isValidPort = port =>{
    assertString.isString(port);
    if(parseInt(port) > 0 && parseInt(port) < 65535){
        const REGEX =  /^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/;
        return REGEX.test(port);
    }
    return false;
}
},{"../lib/isString":19}],15:[function(require,module,exports){
var assertIter = require('../lib/typeChecker')

/**
 * @exports unique
 * @desc returns unique iterable on passing an iterable
 * inspired from lodash lib.
 * @param {Object}
 * @returns {Object}
 */
exports.unique = iter => {
    assertIter.isIterable(iter)
    var filerArry = iter.filter((item, pos) => {
        return iter.indexOf(item) == pos
    })
    return filerArry
}

},{"../lib/typeChecker":22}],16:[function(require,module,exports){
/**
 * @fileoverview Entry point for Cerberus.
 * @author Jithin Zacharia
 */

var isEmail = require("../fns/isEmail");
var isDate = require("../fns/isDate");
var emailNormalizer = require("../fns/emailNormalizer");
var creditCard = require("../fns/isCreditCard");
var cvvNumber = require("../fns/isCVVNumber");
var JWTValidator = require("../fns/isJWTValid");
var mongoValidator = require("../fns/isMongoId");
var phoneNumberValidator = require("../fns/isPhoneNumber");
var postalCodeValidator = require("../fns/isPostalCode");
var jsonValidator = require("../fns/isStringJSON");
var bankCode = require("../fns/ifscCode");
var luhnCheck = require("../lib/luhnCheck");
var PANCardValidator = require("../fns/isPANCard");
var unique = require("../fns/unique");
var validateEtherHash = require('../fns/isEthereumHash');
var isValidPort = require('../fns/isValidPort');

const version = "0.5.0";
const author = "Jithin Zacharia";

const cerebreus={
    isEmailValid: isEmail.isEmailValid,
    getCardProvider: creditCard.detectCardType,
    isCardValid: creditCard.isCreditCardNumber,
    isCVVValid: cvvNumber.CVVValidator,
    isJWTValid: JWTValidator.isJWT,
    isDate: isDate.isDate,
    luhnCheck: luhnCheck.luhnCheck,
    panCardValidaror: PANCardValidator.isPanCard,
    getUnique: unique.unique,
    isMongoId: mongoValidator.isMongoId,
    isPhoneNumberValid: phoneNumberValidator.isPhoneNumber,
    isPostalCodeValid: postalCodeValidator.isPostalCodeValid,
    isStringJSON: jsonValidator.isStringJSON,
    getUserEmailUserName: emailNormalizer.getUsername,
    normalizeEmail: emailNormalizer.normalizeEmail,
    isEthereumHash: validateEtherHash.isEthereumHash,
    isIFSCValid: bankCode.isIFSCode,
    isValidPort: isValidPort.isValidPort,
    getBankCode: bankCode.getBankCode,
    getBranchCode: bankCode.getBranchCode
};

const about = {
    version: version,
    author: author
};

module.exports = {
    cerebreus,
    about
};
},{"./fns/emailNormalizer":1,"./fns/ifscCode":2,"./fns/isCVVNumber":3,"./fns/isCreditCard":4,"./fns/isDate":5,"./fns/isEmail":6,"./fns/isEthereumHash":7,"./fns/isJWTValid":8,"./fns/isMongoId":9,"./fns/isPANCard":10,"./fns/isPhoneNumber":11,"./fns/isPostalCode":12,"./fns/isStringJSON":13,"./fns/isValidPort":14,"./fns/unique":15,"./lib/luhnCheck":20}],17:[function(require,module,exports){
module.exports={
	"outlook": [
		"hotmail.at",
		"hotmail.be",
		"hotmail.ca",
		"hotmail.cl",
		"hotmail.co.il",
		"hotmail.co.nz",
		"hotmail.co.th",
		"hotmail.co.uk",
		"hotmail.com",
		"hotmail.com.ar",
		"hotmail.com.au",
		"hotmail.com.br",
		"hotmail.com.gr",
		"hotmail.com.mx",
		"hotmail.com.pe",
		"hotmail.com.tr",
		"hotmail.com.vn",
		"hotmail.cz",
		"hotmail.de",
		"hotmail.dk",
		"hotmail.es",
		"hotmail.fr",
		"hotmail.hu",
		"hotmail.id",
		"hotmail.ie",
		"hotmail.in",
		"hotmail.it",
		"hotmail.jp",
		"hotmail.kr",
		"hotmail.lv",
		"hotmail.my",
		"hotmail.ph",
		"hotmail.pt",
		"hotmail.sa",
		"hotmail.sg",
		"hotmail.sk",
		"live.be",
		"live.co.uk",
		"live.com",
		"live.com.ar",
		"live.com.mx",
		"live.de",
		"live.es",
		"live.eu",
		"live.fr",
		"live.it",
		"live.nl",
		"msn.com",
		"outlook.at",
		"outlook.be",
		"outlook.cl",
		"outlook.co.il",
		"outlook.co.nz",
		"outlook.co.th",
		"outlook.com",
		"outlook.com.ar",
		"outlook.com.au",
		"outlook.com.br",
		"outlook.com.gr",
		"outlook.com.pe",
		"outlook.com.tr",
		"outlook.com.vn",
		"outlook.cz",
		"outlook.de",
		"outlook.dk",
		"outlook.es",
		"outlook.fr",
		"outlook.hu",
		"outlook.id",
		"outlook.ie",
		"outlook.in",
		"outlook.it",
		"outlook.jp",
		"outlook.kr",
		"outlook.lv",
		"outlook.my",
		"outlook.ph",
		"outlook.pt",
		"outlook.sa",
		"outlook.sg",
		"outlook.sk",
		"passport.com"
    ],
    "ust":[
        "ust-global.com"
    ],
    "gmail":[
        "gmail.com"
	],
	"tcs":[
		"tcs.com"
	],
	"infosys":[
		"infosys.com"
	],
	"congnizant":[
		"cognizant.com"
	],
    "yahoo":[
        "rocketmail.com",
        "yahoo.ca",
        "yahoo.co.uk",
        "yahoo.com",
        "yahoo.de",
        "yahoo.fr",
        "yahoo.in",
        "yahoo.it",
        "ymail.com"
    ],
    "apple":[
        "icloud.com",
        "mac.com",
        "me.com"
    ]
}
},{}],18:[function(require,module,exports){
var assertString = require("./isString");

/**
 * @exports isHexaDecimal
 * @param {String} value
 * @returns {Boolean} 
 */
exports.isHexaDecimal = value=> {
    assertString.isString(value);
    const hexaReg = /^[0-9A-F]+$/i;
    return hexaReg.test(value);
}
},{"./isString":19}],19:[function(require,module,exports){
/**
 * @exports isString
 * @param {String} value 
 * @returns {Boolean}
 */
exports.isString = value=> {
    if(typeof(value) === "string"){
        return true;
    }else{
        throw new Error("Invalid type");
    }
}
},{}],20:[function(require,module,exports){
var assertString = require("../lib/isString");

/**
 * @exports luhnCheck
 * @desc Checks if the card number is valid or not.
 * @param {String} cardNum
 * @returns {Boolean}
 */
exports.luhnCheck = (cardNum)=>{
    assertString.isString(cardNum);
    var numericDashRegex = /^[\d\-\s]+$/
    if (!numericDashRegex.test(cardNum)) return false;

    var nCheck = 0, nDigit = 0, bEven = false;
    var strippedField = cardNum.replace(/\D/g, "");

    for (var n = strippedField.length - 1; n >= 0; n--) {
        var cDigit = strippedField.charAt(n);
        nDigit = parseInt(cDigit, 10);
        if (bEven) {
            if ((nDigit *= 2) > 9) nDigit -= 9;
        }

        nCheck += nDigit;
        bEven = !bEven;
    }

  	return (nCheck % 10) === 0;
}
},{"../lib/isString":19}],21:[function(require,module,exports){
module.exports={
    "domains": [
        ".example",
        ".invalid",
        "example.com",
        "example.net",
        "example.org"
    ]
}
},{}],22:[function(require,module,exports){
/**
 * @exports isFunction
 * @param {Object} fn
 * @returns {Boolean} 
 */
exports.isFunction = fn=>{
    if(typeof(fn) == "function"){
        return true;
    }else{
        throw new Error ("Invalid type")
    }
}

/**
 * @exports isIterable
 * @param {Object} iter
 * @returns {Boolean}
 */
exports.isIterable = iter=>{
    if (iter == null) {
        throw new Error("Invalid type");
    }
    return typeof iter[Symbol.iterator] === "function";
}
},{}]},{},[16]);
