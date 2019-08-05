(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var normEmail = require("../lib/emailDomains.json");
var emailValidation = require("./isEmail");
var assertString = require("../lib/isString");

/**
 * @exports normalizeEmail
 * @desc Checks if the email is belonging to a particular domain or not.
 * @param {String} email 
 * @param {String} domainName
 */
exports.normalizeEmail = (email, domainName)=>{
    assertString.isString(email);
    if(emailValidation.emailValidator(email) === false){
        return false
    }else{
        var nameMatch = email.split("@");
        for(let i=0; i<=normEmail[domainName].length; i++){
        if(nameMatch[1] == normEmail[domainName][i]){
            return true;
        }else{
            return false;
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
exports.getUsername = (email)=> {
    assertString.isString(email);
    if(emailValidation.emailValidator(email) === false){
        return null;
    }else{
        var name = email.split("@");
        return name[0] ? name[0] : null;
    }
}
},{"../lib/emailDomains.json":14,"../lib/isString":16,"./isEmail":6}],2:[function(require,module,exports){
var assertString = require("../lib/isString");
var IFSCCode = require("../lib/bank.json");

/**
 * @exports isIFSCode
 * @param {String} code
 * @returns {Boolean}
 */
var IFSCodeValidator = exports.isIFSCode = code=> {
    assertString.isString(code);
    const IFSC = /^(?=.*\d)(?=.*[0-9A-Z]).{11}$/;
    return IFSC.test(code);
}

/**
 * @exports getBankCode
 * @param { String } code 
 * @returns {String}
 */
exports.getBankCode = (code)=> {
    assertString.isString(code);
    if(IFSCodeValidator(code) === true){
        return (code.substring(0,4))
    }else{
        return false;
    }
}

/**
 * @exports getBranchCode
 * @param { String } code 
 * @returns {String}
 */
exports.getBranchCode = (code)=>{
    assertString.isString(code);
    if(IFSCodeValidator(code) === true){
        return (code.substring(5, 11))
    }else{
        return false;
    }
}
},{"../lib/bank.json":13,"../lib/isString":16}],3:[function(require,module,exports){
var assertString = require("../lib/isString");

/**
 * @exports validate CVV number
 * @desc validate cvv number for cards.
 * @param {String} cvvNumber 
 * @returns {Boolean}
 * @todo Find other ways to validate a CVV number method is not good.
 */
exports.CVVValidator = (cvvNumber)=>{
    assertString.isString(cvvNumber);
    if(cvvNumber.length == 3){
        return true;
    }else{
        return false;
    }
}
},{"../lib/isString":16}],4:[function(require,module,exports){
var assertString = require("../lib/isString");
var luhnCheck = require("../lib/luhnCheck");
/**
 * @exports isCreditCardNumber
 * @desc Checks if the credit card number is valid or not.
 * @param { String } creditCardNumber 
 * @return { Boolean }
 */
exports.isCreditCardNumber = creditCardNumber=> {
    return (luhnCheck.luhnCheck(creditCardNumber));
}

/**
 * @exports detectCardType
 * @desc detects card type
 * @param { String } cardNumber
 * @returns { String }
 */
exports.detectCardType = cardNumber =>{
    assertString.isString(cardNumber);
        var re = {
            electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
            maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
            dankort: /^(5019)\d+$/,
            interpayment: /^(636)\d+$/,
            unionpay: /^(62|88)\d+$/,
            visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
            mastercard: /^5[1-5][0-9]{14}$/,
            amex: /^3[47][0-9]{13}$/,
            diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            jcb: /^(?:2131|1800|35\d{3})\d{11}$/
        }
    
        for(var key in re) {
            if(re[key].test(cardNumber)) {
                return key
            }
        }
}
},{"../lib/isString":16,"../lib/luhnCheck":17}],5:[function(require,module,exports){
/**
 * @exports isDate
 * @desc This function only recognize ISO format defined by ECMA Script ECMA-256
 * https://www.ecma-international.org/ecma-262/6.0/#sec-date.parse
 * @param {String} dateValue
 * @returns {Boolean}
 */
exports.isDate = dateValue=> {
    let validateDate = Date.parse(new Date(dateValue));
    if(isNaN(validateDate)){
        return false;
    }else{
        return true;
    }
}
},{}],6:[function(require,module,exports){
var splitUsername = require("../fns/emailNormalizer");
var restrictedDomains = require("../lib/reservedDomains.json");
var assertString = require("../lib/isString");
/**
 * @function isUsernameValid
 * @param {*} email 
 * @returns {Boolean}
 */
var isUsernameValid = email=> {
    assertString.isString(email);
    let username = splitUsername.getUsername(email);
    if(/[\.";<>]/.test(username.charAt(0)) === false){
        return true;
    }else{
        return false;
    }
}

/**
 * @function validateEmail
 * @param {*} email 
 */
var emailChecker = exports.emailValidator = email=>{
    assertString.isString(email);
    re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

/**
 * @function restrictedDomainCheck
 * @param {*} email 
 * @returns {Boolean}
 */
var restrictedDomainCheck = email=> {
    assertString.isString(email);
    var result = true;
    domain = email.split("@");
    for(let i=0; i <= restrictedDomains["domains"].length; i++){
        if((restrictedDomains["domains"][i]) === domain[1]){
            result = true;
        }else{
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
exports.isEmailValid = email=> {
    assertString.isString(email);
    if(emailChecker(email) === true){
        if(restrictedDomainCheck(email) === false){
            if(isUsernameValid(email) === true){
                return true
            }
        }
    }else{
        return false;
    }
}
},{"../fns/emailNormalizer":1,"../lib/isString":16,"../lib/reservedDomains.json":18}],7:[function(require,module,exports){
var assertString = require("../lib/isString");
/**
 * @exports isJWT
 * @param {String} str
 * @returns {Boolean}
 */
exports.isJWT = (str)=> {
    assertString.isString(str);
    const jwt = /^([A-Za-z0-9\-_~+\/]+[=]{0,2})\.([A-Za-z0-9\-_~+\/]+[=]{0,2})(?:\.([A-Za-z0-9\-_~+\/]+[=]{0,2}))?$/;
    return jwt.test(str);
}
},{"../lib/isString":16}],8:[function(require,module,exports){
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
},{"../lib/isHexaDecimal":15,"../lib/isString":16}],9:[function(require,module,exports){
/**
* @fileoverview finds if a string is a phone number or not.
* @desc Follows The international public telecommunication numbering plan (IPTNP)
* Please see https://en.wikipedia.org/wiki/E.164
* regular expression taken from http://regexlib.com/Search.aspx?k=phone&AspxAutoDetectCookieSupport=1
*/
var assertString = require("../lib/isString");
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
};

/**
 * @exports isPhoneNumber
 * @param {String} phoneNumber
 * @param {String} countryCode
 * @returns {Boolean}
 */
exports.isPhoneNumber = (phoneNumber, countryCode)=> {
  assertString.isString(phoneNumber);
  if(countryCode in phones === true){
    return phones[countryCode].test(phoneNumber);
  }
}

},{"../lib/isString":16}],10:[function(require,module,exports){
var assertString = require("../lib/isString");
const postalPattern = {
    IL: /^\d{5}$/,
    IN: /^\d{6}$/,
    US: /^\d{5}(-\d{4})?$/
}

/**
 * @exports isPostalCodeValid
 * @param {String} postalCode
 * @param {String} countryCode
 * @returns {Boolean}
 */
exports.isPostalCodeValid = (postalCode, countryCode)=>{
    assertString.isString(postalCode);
    if (countryCode.toUpperCase() in postalPattern === true){
        return (postalPattern[countryCode].test(postalCode));
    }else{
        throw new Error (`Invalid country code ${countryCode}`);
    }
}
},{"../lib/isString":16}],11:[function(require,module,exports){
var assertString = require("../lib/isString");
/**
 * @exports isStringJSON
 * @desc checks if the string is a JSON or not.
 * @param {String} string
 * @returns {Boolean} 
 */
exports.isStringJSON = (string)=> {
    assertString.isString(string);
    try{
        if(typeof(JSON.parse(string) === Object)){
            return true;
        }else{
            return false;
        }
    }catch(e){
        return false;
    }
}
},{"../lib/isString":16}],12:[function(require,module,exports){
/**
 * @fileoverview Entry point for Cerberus.
 * @author Jithin Zacharia
 */

var isEmail = require("./fns/isEmail");
var isDate = require("./fns/isDate");
var emailNormalizer = require("./fns/emailNormalizer");
var creditCard = require("./fns/isCreditCard");
var cvvNumber = require("./fns/isCVVNumber");
var JWTValidator = require("./fns/isJWTValid");
var mongoValidator = require("./fns/isMongoId");
var phoneNumberValidator = require("./fns/isPhoneNumber");
var postalCodeValidator = require("./fns/isPostalCode");
var jsonValidator = require("./fns/isStringJSON");
var bankCode = require("./fns/ifscCode");

const version = "0.0.3";

exports.cerebreus = {
    isEmailValid: isEmail.isEmailValid,
    getCardProvider: creditCard.detectCardType,
    isCardValid: creditCard.isCreditCardNumber,
    isCVVValid: cvvNumber.CVVValidator,
    isJWTValid: JWTValidator.isJWT,
    isDate: isDate.isDate,
    isMongoId: mongoValidator.isMongoId,
    isPhoneNumberValid: phoneNumberValidator.isPhoneNumber,
    isPostalCodeValid: postalCodeValidator.isPostalCodeValid,
    isStringJSON: jsonValidator.isStringJSON,
    getUserEmailUserName: emailNormalizer.getUsername,
    normalizeEmail: emailNormalizer.normalizeEmail,
    isIFSCValid: bankCode.isIFSCode,
    getBankCode: bankCode.getBankCode,
    getBranchCode: bankCode.getBranchCode
}
},{"./fns/emailNormalizer":1,"./fns/ifscCode":2,"./fns/isCVVNumber":3,"./fns/isCreditCard":4,"./fns/isDate":5,"./fns/isEmail":6,"./fns/isJWTValid":7,"./fns/isMongoId":8,"./fns/isPhoneNumber":9,"./fns/isPostalCode":10,"./fns/isStringJSON":11}],13:[function(require,module,exports){
module.exports={
    "bankIFSC":[
        "ABHY",
        "AMCB",
        "AIRP",
        "AKJB",
        "ALLA",
        "AUCB",
        "ANDB",
        "APGB",
        "ANZB",
        "UTIB",
        "BDBL",
        "BOFA",
        "BBKM",
        "BARB",
        "BCEY",
        "BKID",
        "MAHB",
        "BOTM",
        "BARC",
        "BACB",
        "CNRB",
        "CSBK",
        "CBIN",
        "CITI",
        "CIUB",
        "CORP",
        "DCBL",
        "BKDN",
        "DEOB",
        "DEUT",
        "DLXB",
        "FDRL",
        "GGBK",
        "HDFC",
        "HPSC",
        "HSBC",
        "IBKL",
        "IDFB",
        "IDIB",
        "IOBA",
        "INDB",
        "JAKA",
        "KARB",
        "KVGB",
        "KVBL",
        "KLGB",
        "KKBK",
        "LAVB",
        "NTBL",
        "ORBC",
        "PKGB",
        "PRTH",
        "PSIB",
        "PUNB",
        "RATN",
        "RBIS",
        "SIBL",
        "SCBL",
        "SBBJ",
        "SBHY",
        "SBIN",
        "SBMY",
        "STBP",
        "SBTR",
        "SYNB",
        "TMBL",
        "UCBA",
        "UTIB",
        "VIJB",
        "YESB",
        "ZSBL",
        "ICIC"
    ]
}
},{}],14:[function(require,module,exports){
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
},{}],15:[function(require,module,exports){
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
},{"./isString":16}],16:[function(require,module,exports){
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
},{}],17:[function(require,module,exports){
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
},{"../lib/isString":16}],18:[function(require,module,exports){
module.exports={
    "domains": [
        ".example",
        ".invalid",
        "example.com",
        "example.net",
        "example.org"
    ]
}
},{}]},{},[12])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy5udm0vdmVyc2lvbnMvbm9kZS92OC4xMi4wL2xpYi9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiZm5zL2VtYWlsTm9ybWFsaXplci5qcyIsImZucy9pZnNjQ29kZS5qcyIsImZucy9pc0NWVk51bWJlci5qcyIsImZucy9pc0NyZWRpdENhcmQuanMiLCJmbnMvaXNEYXRlLmpzIiwiZm5zL2lzRW1haWwuanMiLCJmbnMvaXNKV1RWYWxpZC5qcyIsImZucy9pc01vbmdvSWQuanMiLCJmbnMvaXNQaG9uZU51bWJlci5qcyIsImZucy9pc1Bvc3RhbENvZGUuanMiLCJmbnMvaXNTdHJpbmdKU09OLmpzIiwiaW5kZXguanMiLCJsaWIvYmFuay5qc29uIiwibGliL2VtYWlsRG9tYWlucy5qc29uIiwibGliL2lzSGV4YURlY2ltYWwuanMiLCJsaWIvaXNTdHJpbmcuanMiLCJsaWIvbHVobkNoZWNrLmpzIiwibGliL3Jlc2VydmVkRG9tYWlucy5qc29uIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJ2YXIgbm9ybUVtYWlsID0gcmVxdWlyZShcIi4uL2xpYi9lbWFpbERvbWFpbnMuanNvblwiKTtcbnZhciBlbWFpbFZhbGlkYXRpb24gPSByZXF1aXJlKFwiLi9pc0VtYWlsXCIpO1xudmFyIGFzc2VydFN0cmluZyA9IHJlcXVpcmUoXCIuLi9saWIvaXNTdHJpbmdcIik7XG5cbi8qKlxuICogQGV4cG9ydHMgbm9ybWFsaXplRW1haWxcbiAqIEBkZXNjIENoZWNrcyBpZiB0aGUgZW1haWwgaXMgYmVsb25naW5nIHRvIGEgcGFydGljdWxhciBkb21haW4gb3Igbm90LlxuICogQHBhcmFtIHtTdHJpbmd9IGVtYWlsIFxuICogQHBhcmFtIHtTdHJpbmd9IGRvbWFpbk5hbWVcbiAqL1xuZXhwb3J0cy5ub3JtYWxpemVFbWFpbCA9IChlbWFpbCwgZG9tYWluTmFtZSk9PntcbiAgICBhc3NlcnRTdHJpbmcuaXNTdHJpbmcoZW1haWwpO1xuICAgIGlmKGVtYWlsVmFsaWRhdGlvbi5lbWFpbFZhbGlkYXRvcihlbWFpbCkgPT09IGZhbHNlKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfWVsc2V7XG4gICAgICAgIHZhciBuYW1lTWF0Y2ggPSBlbWFpbC5zcGxpdChcIkBcIik7XG4gICAgICAgIGZvcihsZXQgaT0wOyBpPD1ub3JtRW1haWxbZG9tYWluTmFtZV0ubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZihuYW1lTWF0Y2hbMV0gPT0gbm9ybUVtYWlsW2RvbWFpbk5hbWVdW2ldKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vKipcbiAqIEBleHBvcnRzIGdldFVzZXJuYW1lXG4gKiBAZGVzYyBSZXR1cm5zIGFuIHVzZXJuYW1lIGZyb20gdGhlIGVtYWlsIGFkZHJlc3NcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbWFpbFxuICogQHJldHVybnMge1N0cmluZyB8IG51bGx9IFxuICovXG5leHBvcnRzLmdldFVzZXJuYW1lID0gKGVtYWlsKT0+IHtcbiAgICBhc3NlcnRTdHJpbmcuaXNTdHJpbmcoZW1haWwpO1xuICAgIGlmKGVtYWlsVmFsaWRhdGlvbi5lbWFpbFZhbGlkYXRvcihlbWFpbCkgPT09IGZhbHNlKXtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfWVsc2V7XG4gICAgICAgIHZhciBuYW1lID0gZW1haWwuc3BsaXQoXCJAXCIpO1xuICAgICAgICByZXR1cm4gbmFtZVswXSA/IG5hbWVbMF0gOiBudWxsO1xuICAgIH1cbn0iLCJ2YXIgYXNzZXJ0U3RyaW5nID0gcmVxdWlyZShcIi4uL2xpYi9pc1N0cmluZ1wiKTtcbnZhciBJRlNDQ29kZSA9IHJlcXVpcmUoXCIuLi9saWIvYmFuay5qc29uXCIpO1xuXG4vKipcbiAqIEBleHBvcnRzIGlzSUZTQ29kZVxuICogQHBhcmFtIHtTdHJpbmd9IGNvZGVcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG52YXIgSUZTQ29kZVZhbGlkYXRvciA9IGV4cG9ydHMuaXNJRlNDb2RlID0gY29kZT0+IHtcbiAgICBhc3NlcnRTdHJpbmcuaXNTdHJpbmcoY29kZSk7XG4gICAgY29uc3QgSUZTQyA9IC9eKD89LipcXGQpKD89LipbMC05QS1aXSkuezExfSQvO1xuICAgIHJldHVybiBJRlNDLnRlc3QoY29kZSk7XG59XG5cbi8qKlxuICogQGV4cG9ydHMgZ2V0QmFua0NvZGVcbiAqIEBwYXJhbSB7IFN0cmluZyB9IGNvZGUgXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5leHBvcnRzLmdldEJhbmtDb2RlID0gKGNvZGUpPT4ge1xuICAgIGFzc2VydFN0cmluZy5pc1N0cmluZyhjb2RlKTtcbiAgICBpZihJRlNDb2RlVmFsaWRhdG9yKGNvZGUpID09PSB0cnVlKXtcbiAgICAgICAgcmV0dXJuIChjb2RlLnN1YnN0cmluZygwLDQpKVxuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4vKipcbiAqIEBleHBvcnRzIGdldEJyYW5jaENvZGVcbiAqIEBwYXJhbSB7IFN0cmluZyB9IGNvZGUgXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICovXG5leHBvcnRzLmdldEJyYW5jaENvZGUgPSAoY29kZSk9PntcbiAgICBhc3NlcnRTdHJpbmcuaXNTdHJpbmcoY29kZSk7XG4gICAgaWYoSUZTQ29kZVZhbGlkYXRvcihjb2RlKSA9PT0gdHJ1ZSl7XG4gICAgICAgIHJldHVybiAoY29kZS5zdWJzdHJpbmcoNSwgMTEpKVxuICAgIH1lbHNle1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSIsInZhciBhc3NlcnRTdHJpbmcgPSByZXF1aXJlKFwiLi4vbGliL2lzU3RyaW5nXCIpO1xuXG4vKipcbiAqIEBleHBvcnRzIHZhbGlkYXRlIENWViBudW1iZXJcbiAqIEBkZXNjIHZhbGlkYXRlIGN2diBudW1iZXIgZm9yIGNhcmRzLlxuICogQHBhcmFtIHtTdHJpbmd9IGN2dk51bWJlciBcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQHRvZG8gRmluZCBvdGhlciB3YXlzIHRvIHZhbGlkYXRlIGEgQ1ZWIG51bWJlciBtZXRob2QgaXMgbm90IGdvb2QuXG4gKi9cbmV4cG9ydHMuQ1ZWVmFsaWRhdG9yID0gKGN2dk51bWJlcik9PntcbiAgICBhc3NlcnRTdHJpbmcuaXNTdHJpbmcoY3Z2TnVtYmVyKTtcbiAgICBpZihjdnZOdW1iZXIubGVuZ3RoID09IDMpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iLCJ2YXIgYXNzZXJ0U3RyaW5nID0gcmVxdWlyZShcIi4uL2xpYi9pc1N0cmluZ1wiKTtcbnZhciBsdWhuQ2hlY2sgPSByZXF1aXJlKFwiLi4vbGliL2x1aG5DaGVja1wiKTtcbi8qKlxuICogQGV4cG9ydHMgaXNDcmVkaXRDYXJkTnVtYmVyXG4gKiBAZGVzYyBDaGVja3MgaWYgdGhlIGNyZWRpdCBjYXJkIG51bWJlciBpcyB2YWxpZCBvciBub3QuXG4gKiBAcGFyYW0geyBTdHJpbmcgfSBjcmVkaXRDYXJkTnVtYmVyIFxuICogQHJldHVybiB7IEJvb2xlYW4gfVxuICovXG5leHBvcnRzLmlzQ3JlZGl0Q2FyZE51bWJlciA9IGNyZWRpdENhcmROdW1iZXI9PiB7XG4gICAgcmV0dXJuIChsdWhuQ2hlY2subHVobkNoZWNrKGNyZWRpdENhcmROdW1iZXIpKTtcbn1cblxuLyoqXG4gKiBAZXhwb3J0cyBkZXRlY3RDYXJkVHlwZVxuICogQGRlc2MgZGV0ZWN0cyBjYXJkIHR5cGVcbiAqIEBwYXJhbSB7IFN0cmluZyB9IGNhcmROdW1iZXJcbiAqIEByZXR1cm5zIHsgU3RyaW5nIH1cbiAqL1xuZXhwb3J0cy5kZXRlY3RDYXJkVHlwZSA9IGNhcmROdW1iZXIgPT57XG4gICAgYXNzZXJ0U3RyaW5nLmlzU3RyaW5nKGNhcmROdW1iZXIpO1xuICAgICAgICB2YXIgcmUgPSB7XG4gICAgICAgICAgICBlbGVjdHJvbjogL14oNDAyNnw0MTc1MDB8NDQwNXw0NTA4fDQ4NDR8NDkxM3w0OTE3KVxcZCskLyxcbiAgICAgICAgICAgIG1hZXN0cm86IC9eKDUwMTh8NTAyMHw1MDM4fDU2MTJ8NTg5M3w2MzA0fDY3NTl8Njc2MXw2NzYyfDY3NjN8MDYwNHw2MzkwKVxcZCskLyxcbiAgICAgICAgICAgIGRhbmtvcnQ6IC9eKDUwMTkpXFxkKyQvLFxuICAgICAgICAgICAgaW50ZXJwYXltZW50OiAvXig2MzYpXFxkKyQvLFxuICAgICAgICAgICAgdW5pb25wYXk6IC9eKDYyfDg4KVxcZCskLyxcbiAgICAgICAgICAgIHZpc2E6IC9eNFswLTldezEyfSg/OlswLTldezN9KT8kLyxcbiAgICAgICAgICAgIG1hc3RlcmNhcmQ6IC9eNVsxLTVdWzAtOV17MTR9JC8sXG4gICAgICAgICAgICBhbWV4OiAvXjNbNDddWzAtOV17MTN9JC8sXG4gICAgICAgICAgICBkaW5lcnM6IC9eMyg/OjBbMC01XXxbNjhdWzAtOV0pWzAtOV17MTF9JC8sXG4gICAgICAgICAgICBkaXNjb3ZlcjogL142KD86MDExfDVbMC05XXsyfSlbMC05XXsxMn0kLyxcbiAgICAgICAgICAgIGpjYjogL14oPzoyMTMxfDE4MDB8MzVcXGR7M30pXFxkezExfSQvXG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gcmUpIHtcbiAgICAgICAgICAgIGlmKHJlW2tleV0udGVzdChjYXJkTnVtYmVyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxufSIsIi8qKlxuICogQGV4cG9ydHMgaXNEYXRlXG4gKiBAZGVzYyBUaGlzIGZ1bmN0aW9uIG9ubHkgcmVjb2duaXplIElTTyBmb3JtYXQgZGVmaW5lZCBieSBFQ01BIFNjcmlwdCBFQ01BLTI1NlxuICogaHR0cHM6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1kYXRlLnBhcnNlXG4gKiBAcGFyYW0ge1N0cmluZ30gZGF0ZVZhbHVlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5pc0RhdGUgPSBkYXRlVmFsdWU9PiB7XG4gICAgbGV0IHZhbGlkYXRlRGF0ZSA9IERhdGUucGFyc2UobmV3IERhdGUoZGF0ZVZhbHVlKSk7XG4gICAgaWYoaXNOYU4odmFsaWRhdGVEYXRlKSl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufSIsInZhciBzcGxpdFVzZXJuYW1lID0gcmVxdWlyZShcIi4uL2Zucy9lbWFpbE5vcm1hbGl6ZXJcIik7XG52YXIgcmVzdHJpY3RlZERvbWFpbnMgPSByZXF1aXJlKFwiLi4vbGliL3Jlc2VydmVkRG9tYWlucy5qc29uXCIpO1xudmFyIGFzc2VydFN0cmluZyA9IHJlcXVpcmUoXCIuLi9saWIvaXNTdHJpbmdcIik7XG4vKipcbiAqIEBmdW5jdGlvbiBpc1VzZXJuYW1lVmFsaWRcbiAqIEBwYXJhbSB7Kn0gZW1haWwgXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xudmFyIGlzVXNlcm5hbWVWYWxpZCA9IGVtYWlsPT4ge1xuICAgIGFzc2VydFN0cmluZy5pc1N0cmluZyhlbWFpbCk7XG4gICAgbGV0IHVzZXJuYW1lID0gc3BsaXRVc2VybmFtZS5nZXRVc2VybmFtZShlbWFpbCk7XG4gICAgaWYoL1tcXC5cIjs8Pl0vLnRlc3QodXNlcm5hbWUuY2hhckF0KDApKSA9PT0gZmFsc2Upe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9ZWxzZXtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAZnVuY3Rpb24gdmFsaWRhdGVFbWFpbFxuICogQHBhcmFtIHsqfSBlbWFpbCBcbiAqL1xudmFyIGVtYWlsQ2hlY2tlciA9IGV4cG9ydHMuZW1haWxWYWxpZGF0b3IgPSBlbWFpbD0+e1xuICAgIGFzc2VydFN0cmluZy5pc1N0cmluZyhlbWFpbCk7XG4gICAgcmUgPSAvXigoW148PigpXFxbXFxdXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClcXFtcXF1cXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChbXjw+KClbXFxdXFwuLDs6XFxzQFxcXCJdK1xcLikrW148PigpW1xcXVxcLiw7Olxcc0BcXFwiXXsyLH0pJC9pO1xuICAgIHJldHVybiByZS50ZXN0KFN0cmluZyhlbWFpbCkudG9Mb3dlckNhc2UoKSk7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uIHJlc3RyaWN0ZWREb21haW5DaGVja1xuICogQHBhcmFtIHsqfSBlbWFpbCBcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG52YXIgcmVzdHJpY3RlZERvbWFpbkNoZWNrID0gZW1haWw9PiB7XG4gICAgYXNzZXJ0U3RyaW5nLmlzU3RyaW5nKGVtYWlsKTtcbiAgICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgICBkb21haW4gPSBlbWFpbC5zcGxpdChcIkBcIik7XG4gICAgZm9yKGxldCBpPTA7IGkgPD0gcmVzdHJpY3RlZERvbWFpbnNbXCJkb21haW5zXCJdLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgaWYoKHJlc3RyaWN0ZWREb21haW5zW1wiZG9tYWluc1wiXVtpXSkgPT09IGRvbWFpblsxXSl7XG4gICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQGV4cG9ydHMgaXNFbWFpbFZhbGlkXG4gKiBAZGVzYyBDaGVja3MgaWYgdGhlIGVtYWlsIGlzIHZhbGlkIGFjY29yaWRpbmcgdG8gdGhlIGRlZmF1bHQgb3Igb3B0aW9ucyBjb25maWcuXG4gKiBDaGVja2luZyBpcyBkb25lIHVzaW5nIHNwZWMgZGVmaW5lZCBpbiBSRkMgNTMyMS5cbiAqIEBwYXJhbSB7U3RyaW5nfSBlbWFpbFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5pc0VtYWlsVmFsaWQgPSBlbWFpbD0+IHtcbiAgICBhc3NlcnRTdHJpbmcuaXNTdHJpbmcoZW1haWwpO1xuICAgIGlmKGVtYWlsQ2hlY2tlcihlbWFpbCkgPT09IHRydWUpe1xuICAgICAgICBpZihyZXN0cmljdGVkRG9tYWluQ2hlY2soZW1haWwpID09PSBmYWxzZSl7XG4gICAgICAgICAgICBpZihpc1VzZXJuYW1lVmFsaWQoZW1haWwpID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfWVsc2V7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59IiwidmFyIGFzc2VydFN0cmluZyA9IHJlcXVpcmUoXCIuLi9saWIvaXNTdHJpbmdcIik7XG4vKipcbiAqIEBleHBvcnRzIGlzSldUXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5pc0pXVCA9IChzdHIpPT4ge1xuICAgIGFzc2VydFN0cmluZy5pc1N0cmluZyhzdHIpO1xuICAgIGNvbnN0IGp3dCA9IC9eKFtBLVphLXowLTlcXC1ffitcXC9dK1s9XXswLDJ9KVxcLihbQS1aYS16MC05XFwtX34rXFwvXStbPV17MCwyfSkoPzpcXC4oW0EtWmEtejAtOVxcLV9+K1xcL10rWz1dezAsMn0pKT8kLztcbiAgICByZXR1cm4gand0LnRlc3Qoc3RyKTtcbn0iLCJ2YXIgY29udmVydFRvSGV4YSA9IHJlcXVpcmUoXCIuLi9saWIvaXNIZXhhRGVjaW1hbFwiKTtcbnZhciBhc3NlcnRTdHJpbmcgPSByZXF1aXJlKFwiLi4vbGliL2lzU3RyaW5nXCIpO1xuLyoqXG4gKiBAZXhwb3J0cyBpc01vbmdvSWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZFxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuaXNNb25nb0lkID0gaWQ9PiB7XG4gICAgYXNzZXJ0U3RyaW5nLmlzU3RyaW5nKGlkKTtcbiAgICByZXR1cm4gY29udmVydFRvSGV4YS5pc0hleGFEZWNpbWFsKGlkKSAmJiBpZC5sZW5ndGggPT09IDI0O1xufSIsIi8qKlxuKiBAZmlsZW92ZXJ2aWV3IGZpbmRzIGlmIGEgc3RyaW5nIGlzIGEgcGhvbmUgbnVtYmVyIG9yIG5vdC5cbiogQGRlc2MgRm9sbG93cyBUaGUgaW50ZXJuYXRpb25hbCBwdWJsaWMgdGVsZWNvbW11bmljYXRpb24gbnVtYmVyaW5nIHBsYW4gKElQVE5QKVxuKiBQbGVhc2Ugc2VlIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0UuMTY0XG4qIHJlZ3VsYXIgZXhwcmVzc2lvbiB0YWtlbiBmcm9tIGh0dHA6Ly9yZWdleGxpYi5jb20vU2VhcmNoLmFzcHg/az1waG9uZSZBc3B4QXV0b0RldGVjdENvb2tpZVN1cHBvcnQ9MVxuKi9cbnZhciBhc3NlcnRTdHJpbmcgPSByZXF1aXJlKFwiLi4vbGliL2lzU3RyaW5nXCIpO1xuY29uc3QgcGhvbmVzID0ge1xuICAnYXItQUUnOiAvXigoXFwrPzk3MSl8MCk/NVswMjQ1NjhdXFxkezd9JC8sXG4gICdhci1EWic6IC9eKFxcKz8yMTN8MCkoNXw2fDcpXFxkezh9JC8sXG4gICdhci1FRyc6IC9eKChcXCs/MjApfDApPzFbMDEyNV1cXGR7OH0kLyxcbiAgJ2FyLUlRJzogL14oXFwrPzk2NHwwKT83WzAtOV1cXGR7OH0kLyxcbiAgJ2FyLUpPJzogL14oXFwrPzk2MnwwKT83Wzc4OV1cXGR7N30kLyxcbiAgJ2FyLUtXJzogL14oXFwrPzk2NSlbNTY5XVxcZHs3fSQvLFxuICAnYXItU0EnOiAvXighPyhcXCs/OTY2KXwwKT81XFxkezh9JC8sXG4gICdhci1TWSc6IC9eKCE/KFxcKz85NjMpfDApPzlcXGR7OH0kLyxcbiAgJ2FyLVROJzogL14oXFwrPzIxNik/WzI0NTldXFxkezd9JC8sXG4gICdiZS1CWSc6IC9eKFxcKz8zNzUpPygyNHwyNXwyOXwzM3w0NClcXGR7N30kLyxcbiAgJ2JnLUJHJzogL14oXFwrPzM1OXwwKT84Wzc4OV1cXGR7N30kLyxcbiAgJ2JuLUJEJzogL14oXFwrPzg4MHwwKTFbMTM1Njc4OV1bMC05XXs4fSQvLFxuICAnY3MtQ1onOiAvXihcXCs/NDIwKT8gP1sxLTldWzAtOV17Mn0gP1swLTldezN9ID9bMC05XXszfSQvLFxuICAnZGEtREsnOiAvXihcXCs/NDUpP1xccz9cXGR7Mn1cXHM/XFxkezJ9XFxzP1xcZHsyfVxccz9cXGR7Mn0kLyxcbiAgJ2RlLURFJzogL14oXFwrNDkpPzA/MSg1WzAtMjUtOV1cXGR8NihbMjNdfDBcXGQ/KXw3KFswLTU3LTldfDZcXGQpKVxcZHs3fSQvLFxuICAnZWwtR1InOiAvXihcXCs/MzB8MCk/KDY5XFxkezh9KSQvLFxuICAnZW4tQVUnOiAvXihcXCs/NjF8MCk0XFxkezh9JC8sXG4gICdlbi1HQic6IC9eKFxcKz80NHwwKTdcXGR7OX0kLyxcbiAgJ2VuLUdIJzogL14oXFwrMjMzfDApKDIwfDUwfDI0fDU0fDI3fDU3fDI2fDU2fDIzfDI4KVxcZHs3fSQvLFxuICAnZW4tSEsnOiAvXihcXCs/ODUyXFwtPyk/WzQ1Njc4OV1cXGR7M31cXC0/XFxkezR9JC8sXG4gICdlbi1JRSc6IC9eKFxcKz8zNTN8MCk4WzM1Njc4OV1cXGR7N30kLyxcbiAgJ2VuLUlOJzogL14oXFwrPzkxfDApP1s2Nzg5XVxcZHs5fSQvLFxuICAnZW4tS0UnOiAvXihcXCs/MjU0fDApKDd8MSlcXGR7OH0kLyxcbiAgJ2VuLU1VJzogL14oXFwrPzIzMHwwKT9cXGR7OH0kLyxcbiAgJ2VuLU5HJzogL14oXFwrPzIzNHwwKT9bNzg5XVxcZHs5fSQvLFxuICAnZW4tTlonOiAvXihcXCs/NjR8MClbMjhdXFxkezcsOX0kLyxcbiAgJ2VuLVBLJzogL14oKFxcKzkyKXwoMDA5MikpLXswLDF9XFxkezN9LXswLDF9XFxkezd9JHxeXFxkezExfSR8XlxcZHs0fS1cXGR7N30kLyxcbiAgJ2VuLVJXJzogL14oXFwrPzI1MHwwKT9bN11cXGR7OH0kLyxcbiAgJ2VuLVNHJzogL14oXFwrNjUpP1s4OV1cXGR7N30kLyxcbiAgJ2VuLVRaJzogL14oXFwrPzI1NXwwKT9bNjddXFxkezh9JC8sXG4gICdlbi1VRyc6IC9eKFxcKz8yNTZ8MCk/WzddXFxkezh9JC8sXG4gICdlbi1VUyc6IC9eKChcXCsxfDEpPyggfC0pPyk/KFxcKFsyLTldWzAtOV17Mn1cXCl8WzItOV1bMC05XXsyfSkoIHwtKT8oWzItOV1bMC05XXsyfSggfC0pP1swLTldezR9KSQvLFxuICAnZW4tWkEnOiAvXihcXCs/Mjd8MClcXGR7OX0kLyxcbiAgJ2VuLVpNJzogL14oXFwrPzI2KT8wOVs1NjddXFxkezd9JC8sXG4gICdlcy1DTCc6IC9eKFxcKz81NnwwKVsyLTldXFxkezF9XFxkezd9JC8sXG4gICdlcy1FUyc6IC9eKFxcKz8zNCk/KDZcXGR7MX18N1sxMjM0XSlcXGR7N30kLyxcbiAgJ2VzLU1YJzogL14oXFwrPzUyKT8oMXwwMSk/XFxkezEwLDExfSQvLFxuICAnZXMtUFknOiAvXihcXCs/NTk1fDApOVs5ODc2XVxcZHs3fSQvLFxuICAnZXMtVVknOiAvXihcXCs1OTh8MCk5WzEtOV1bXFxkXXs2fSQvLFxuICAnZXQtRUUnOiAvXihcXCs/MzcyKT9cXHM/KDV8OFsxLTRdKVxccz8oWzAtOV1cXHM/KXs2LDd9JC8sXG4gICdmYS1JUic6IC9eKFxcKz85OFtcXC1cXHNdP3wwKTlbMC0zOV1cXGRbXFwtXFxzXT9cXGR7M31bXFwtXFxzXT9cXGR7NH0kLyxcbiAgJ2ZpLUZJJzogL14oXFwrPzM1OHwwKVxccz8oNCgwfDF8Mnw0fDV8Nik/fDUwKVxccz8oXFxkXFxzPyl7NCw4fVxcZCQvLFxuICAnZm8tRk8nOiAvXihcXCs/Mjk4KT9cXHM/XFxkezJ9XFxzP1xcZHsyfVxccz9cXGR7Mn0kLyxcbiAgJ2ZyLUZSJzogL14oXFwrPzMzfDApWzY3XVxcZHs4fSQvLFxuICAnaGUtSUwnOiAvXihcXCs5NzJ8MCkoWzIzNDg5XXw1WzAxMjM0NTY4OV18NzcpWzEtOV1cXGR7Nn0kLyxcbiAgJ2h1LUhVJzogL14oXFwrPzM2KSgyMHwzMHw3MClcXGR7N30kLyxcbiAgJ2lkLUlEJzogL14oXFwrPzYyfDApOCgxWzEyMzQ1Njc4OV18MlsxMjM4XXwzWzEyMzhdfDVbMTIzNTY3ODldfDdbNzhdfDlbNTY3ODldfDhbMTIzNDU2Nzg5XSkoW1xccz98XFxkXXs1LDExfSkkLyxcbiAgJ2l0LUlUJzogL14oXFwrPzM5KT9cXHM/M1xcZHsyfSA/XFxkezYsN30kLyxcbiAgJ2phLUpQJzogL14oXFwrPzgxfDApWzc4OV0wWyBcXC1dP1sxLTldXFxkezJ9WyBcXC1dP1xcZHs1fSQvLFxuICAna2stS1onOiAvXihcXCs/N3w4KT83XFxkezl9JC8sXG4gICdrbC1HTCc6IC9eKFxcKz8yOTkpP1xccz9cXGR7Mn1cXHM/XFxkezJ9XFxzP1xcZHsyfSQvLFxuICAna28tS1InOiAvXigoXFwrPzgyKVsgXFwtXT8pPzA/MShbMHwxfDZ8N3w4fDldezF9KVsgXFwtXT9cXGR7Myw0fVsgXFwtXT9cXGR7NH0kLyxcbiAgJ2x0LUxUJzogL14oXFwrMzcwfDgpXFxkezh9JC8sXG4gICdtcy1NWSc6IC9eKFxcKz82PzAxKXsxfSgoWzAxNDVdezF9KFxcLXxcXHMpP1xcZHs3LDh9KXwoWzIzNjc4OV17MX0oXFxzfFxcLSk/XFxkezd9KSkkLyxcbiAgJ25iLU5PJzogL14oXFwrPzQ3KT9bNDldXFxkezd9JC8sXG4gICdubC1CRSc6IC9eKFxcKz8zMnwwKTQ/XFxkezh9JC8sXG4gICdubi1OTyc6IC9eKFxcKz80Nyk/WzQ5XVxcZHs3fSQvLFxuICAncGwtUEwnOiAvXihcXCs/NDgpPyA/WzUtOF1cXGQgP1xcZHszfSA/XFxkezJ9ID9cXGR7Mn0kLyxcbiAgJ3B0LUJSJzogLyg/PV4oXFwrPzV7Mn1cXC0/fDApWzEtOV17Mn1cXC0/XFxkezR9XFwtP1xcZHs0fSQpKF4oXFwrPzV7Mn1cXC0/fDApWzEtOV17Mn1cXC0/WzYtOV17MX1cXGR7M31cXC0/XFxkezR9JCl8KF4oXFwrPzV7Mn1cXC0/fDApWzEtOV17Mn1cXC0/OVs2LTldezF9XFxkezN9XFwtP1xcZHs0fSQpLyxcbiAgJ3B0LVBUJzogL14oXFwrPzM1MSk/OVsxMjM2XVxcZHs3fSQvLFxuICAncm8tUk8nOiAvXihcXCs/ND8wKVxccz83XFxkezJ9KFxcL3xcXHN8XFwufFxcLSk/XFxkezN9KFxcc3xcXC58XFwtKT9cXGR7M30kLyxcbiAgJ3J1LVJVJzogL14oXFwrPzd8OCk/OVxcZHs5fSQvLFxuICAnc2wtU0knOiAvXihcXCszODZcXHM/fDApKFxcZHsxfVxccz9cXGR7M31cXHM/XFxkezJ9XFxzP1xcZHsyfXxcXGR7Mn1cXHM/XFxkezN9XFxzP1xcZHszfSkkLyxcbiAgJ3NrLVNLJzogL14oXFwrPzQyMSk/ID9bMS05XVswLTldezJ9ID9bMC05XXszfSA/WzAtOV17M30kLyxcbiAgJ3NyLVJTJzogL14oXFwrMzgxNnwwNilbLSBcXGRdezUsOX0kLyxcbiAgJ3N2LVNFJzogL14oXFwrPzQ2fDApW1xcc1xcLV0/N1tcXHNcXC1dP1swMjM2OV0oW1xcc1xcLV0/XFxkKXs3fSQvLFxuICAndGgtVEgnOiAvXihcXCs2Nnw2NnwwKVxcZHs5fSQvLFxuICAndHItVFInOiAvXihcXCs/OTB8MCk/NVxcZHs5fSQvLFxuICAndWstVUEnOiAvXihcXCs/Mzh8OCk/MFxcZHs5fSQvLFxuICAndmktVk4nOiAvXihcXCs/ODR8MCkoKDMoWzItOV0pKXwoNShbMjY4OV0pKXwoNyhbMHw2LTldKSl8KDgoWzEtNnw4OV0pKXwoOShbMC05XSkpKShbMC05XXs3fSkkLyxcbiAgJ3poLUNOJzogL14oKFxcK3wwMCk4Nik/MShbMzU4XVswLTldfDRbNTc5XXw2WzY3XXw3WzAxMzU2NzhdfDlbMTg5XSlbMC05XXs4fSQvLFxuICAnemgtVFcnOiAvXihcXCs/ODg2XFwtP3wwKT85XFxkezh9JC8sXG59O1xuXG4vKipcbiAqIEBleHBvcnRzIGlzUGhvbmVOdW1iZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwaG9uZU51bWJlclxuICogQHBhcmFtIHtTdHJpbmd9IGNvdW50cnlDb2RlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn1cbiAqL1xuZXhwb3J0cy5pc1Bob25lTnVtYmVyID0gKHBob25lTnVtYmVyLCBjb3VudHJ5Q29kZSk9PiB7XG4gIGFzc2VydFN0cmluZy5pc1N0cmluZyhwaG9uZU51bWJlcik7XG4gIGlmKGNvdW50cnlDb2RlIGluIHBob25lcyA9PT0gdHJ1ZSl7XG4gICAgcmV0dXJuIHBob25lc1tjb3VudHJ5Q29kZV0udGVzdChwaG9uZU51bWJlcik7XG4gIH1cbn1cbiIsInZhciBhc3NlcnRTdHJpbmcgPSByZXF1aXJlKFwiLi4vbGliL2lzU3RyaW5nXCIpO1xuY29uc3QgcG9zdGFsUGF0dGVybiA9IHtcbiAgICBJTDogL15cXGR7NX0kLyxcbiAgICBJTjogL15cXGR7Nn0kLyxcbiAgICBVUzogL15cXGR7NX0oLVxcZHs0fSk/JC9cbn1cblxuLyoqXG4gKiBAZXhwb3J0cyBpc1Bvc3RhbENvZGVWYWxpZFxuICogQHBhcmFtIHtTdHJpbmd9IHBvc3RhbENvZGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBjb3VudHJ5Q29kZVxuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmV4cG9ydHMuaXNQb3N0YWxDb2RlVmFsaWQgPSAocG9zdGFsQ29kZSwgY291bnRyeUNvZGUpPT57XG4gICAgYXNzZXJ0U3RyaW5nLmlzU3RyaW5nKHBvc3RhbENvZGUpO1xuICAgIGlmIChjb3VudHJ5Q29kZS50b1VwcGVyQ2FzZSgpIGluIHBvc3RhbFBhdHRlcm4gPT09IHRydWUpe1xuICAgICAgICByZXR1cm4gKHBvc3RhbFBhdHRlcm5bY291bnRyeUNvZGVdLnRlc3QocG9zdGFsQ29kZSkpO1xuICAgIH1lbHNle1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKGBJbnZhbGlkIGNvdW50cnkgY29kZSAke2NvdW50cnlDb2RlfWApO1xuICAgIH1cbn0iLCJ2YXIgYXNzZXJ0U3RyaW5nID0gcmVxdWlyZShcIi4uL2xpYi9pc1N0cmluZ1wiKTtcbi8qKlxuICogQGV4cG9ydHMgaXNTdHJpbmdKU09OXG4gKiBAZGVzYyBjaGVja3MgaWYgdGhlIHN0cmluZyBpcyBhIEpTT04gb3Igbm90LlxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZ1xuICogQHJldHVybnMge0Jvb2xlYW59IFxuICovXG5leHBvcnRzLmlzU3RyaW5nSlNPTiA9IChzdHJpbmcpPT4ge1xuICAgIGFzc2VydFN0cmluZy5pc1N0cmluZyhzdHJpbmcpO1xuICAgIHRyeXtcbiAgICAgICAgaWYodHlwZW9mKEpTT04ucGFyc2Uoc3RyaW5nKSA9PT0gT2JqZWN0KSl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9Y2F0Y2goZSl7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59IiwiLyoqXG4gKiBAZmlsZW92ZXJ2aWV3IEVudHJ5IHBvaW50IGZvciBDZXJiZXJ1cy5cbiAqIEBhdXRob3IgSml0aGluIFphY2hhcmlhXG4gKi9cblxudmFyIGlzRW1haWwgPSByZXF1aXJlKFwiLi9mbnMvaXNFbWFpbFwiKTtcbnZhciBpc0RhdGUgPSByZXF1aXJlKFwiLi9mbnMvaXNEYXRlXCIpO1xudmFyIGVtYWlsTm9ybWFsaXplciA9IHJlcXVpcmUoXCIuL2Zucy9lbWFpbE5vcm1hbGl6ZXJcIik7XG52YXIgY3JlZGl0Q2FyZCA9IHJlcXVpcmUoXCIuL2Zucy9pc0NyZWRpdENhcmRcIik7XG52YXIgY3Z2TnVtYmVyID0gcmVxdWlyZShcIi4vZm5zL2lzQ1ZWTnVtYmVyXCIpO1xudmFyIEpXVFZhbGlkYXRvciA9IHJlcXVpcmUoXCIuL2Zucy9pc0pXVFZhbGlkXCIpO1xudmFyIG1vbmdvVmFsaWRhdG9yID0gcmVxdWlyZShcIi4vZm5zL2lzTW9uZ29JZFwiKTtcbnZhciBwaG9uZU51bWJlclZhbGlkYXRvciA9IHJlcXVpcmUoXCIuL2Zucy9pc1Bob25lTnVtYmVyXCIpO1xudmFyIHBvc3RhbENvZGVWYWxpZGF0b3IgPSByZXF1aXJlKFwiLi9mbnMvaXNQb3N0YWxDb2RlXCIpO1xudmFyIGpzb25WYWxpZGF0b3IgPSByZXF1aXJlKFwiLi9mbnMvaXNTdHJpbmdKU09OXCIpO1xudmFyIGJhbmtDb2RlID0gcmVxdWlyZShcIi4vZm5zL2lmc2NDb2RlXCIpO1xuXG5jb25zdCB2ZXJzaW9uID0gXCIwLjAuM1wiO1xuXG5leHBvcnRzLmNlcmVicmV1cyA9IHtcbiAgICBpc0VtYWlsVmFsaWQ6IGlzRW1haWwuaXNFbWFpbFZhbGlkLFxuICAgIGdldENhcmRQcm92aWRlcjogY3JlZGl0Q2FyZC5kZXRlY3RDYXJkVHlwZSxcbiAgICBpc0NhcmRWYWxpZDogY3JlZGl0Q2FyZC5pc0NyZWRpdENhcmROdW1iZXIsXG4gICAgaXNDVlZWYWxpZDogY3Z2TnVtYmVyLkNWVlZhbGlkYXRvcixcbiAgICBpc0pXVFZhbGlkOiBKV1RWYWxpZGF0b3IuaXNKV1QsXG4gICAgaXNEYXRlOiBpc0RhdGUuaXNEYXRlLFxuICAgIGlzTW9uZ29JZDogbW9uZ29WYWxpZGF0b3IuaXNNb25nb0lkLFxuICAgIGlzUGhvbmVOdW1iZXJWYWxpZDogcGhvbmVOdW1iZXJWYWxpZGF0b3IuaXNQaG9uZU51bWJlcixcbiAgICBpc1Bvc3RhbENvZGVWYWxpZDogcG9zdGFsQ29kZVZhbGlkYXRvci5pc1Bvc3RhbENvZGVWYWxpZCxcbiAgICBpc1N0cmluZ0pTT046IGpzb25WYWxpZGF0b3IuaXNTdHJpbmdKU09OLFxuICAgIGdldFVzZXJFbWFpbFVzZXJOYW1lOiBlbWFpbE5vcm1hbGl6ZXIuZ2V0VXNlcm5hbWUsXG4gICAgbm9ybWFsaXplRW1haWw6IGVtYWlsTm9ybWFsaXplci5ub3JtYWxpemVFbWFpbCxcbiAgICBpc0lGU0NWYWxpZDogYmFua0NvZGUuaXNJRlNDb2RlLFxuICAgIGdldEJhbmtDb2RlOiBiYW5rQ29kZS5nZXRCYW5rQ29kZSxcbiAgICBnZXRCcmFuY2hDb2RlOiBiYW5rQ29kZS5nZXRCcmFuY2hDb2RlXG59IiwibW9kdWxlLmV4cG9ydHM9e1xuICAgIFwiYmFua0lGU0NcIjpbXG4gICAgICAgIFwiQUJIWVwiLFxuICAgICAgICBcIkFNQ0JcIixcbiAgICAgICAgXCJBSVJQXCIsXG4gICAgICAgIFwiQUtKQlwiLFxuICAgICAgICBcIkFMTEFcIixcbiAgICAgICAgXCJBVUNCXCIsXG4gICAgICAgIFwiQU5EQlwiLFxuICAgICAgICBcIkFQR0JcIixcbiAgICAgICAgXCJBTlpCXCIsXG4gICAgICAgIFwiVVRJQlwiLFxuICAgICAgICBcIkJEQkxcIixcbiAgICAgICAgXCJCT0ZBXCIsXG4gICAgICAgIFwiQkJLTVwiLFxuICAgICAgICBcIkJBUkJcIixcbiAgICAgICAgXCJCQ0VZXCIsXG4gICAgICAgIFwiQktJRFwiLFxuICAgICAgICBcIk1BSEJcIixcbiAgICAgICAgXCJCT1RNXCIsXG4gICAgICAgIFwiQkFSQ1wiLFxuICAgICAgICBcIkJBQ0JcIixcbiAgICAgICAgXCJDTlJCXCIsXG4gICAgICAgIFwiQ1NCS1wiLFxuICAgICAgICBcIkNCSU5cIixcbiAgICAgICAgXCJDSVRJXCIsXG4gICAgICAgIFwiQ0lVQlwiLFxuICAgICAgICBcIkNPUlBcIixcbiAgICAgICAgXCJEQ0JMXCIsXG4gICAgICAgIFwiQktETlwiLFxuICAgICAgICBcIkRFT0JcIixcbiAgICAgICAgXCJERVVUXCIsXG4gICAgICAgIFwiRExYQlwiLFxuICAgICAgICBcIkZEUkxcIixcbiAgICAgICAgXCJHR0JLXCIsXG4gICAgICAgIFwiSERGQ1wiLFxuICAgICAgICBcIkhQU0NcIixcbiAgICAgICAgXCJIU0JDXCIsXG4gICAgICAgIFwiSUJLTFwiLFxuICAgICAgICBcIklERkJcIixcbiAgICAgICAgXCJJRElCXCIsXG4gICAgICAgIFwiSU9CQVwiLFxuICAgICAgICBcIklOREJcIixcbiAgICAgICAgXCJKQUtBXCIsXG4gICAgICAgIFwiS0FSQlwiLFxuICAgICAgICBcIktWR0JcIixcbiAgICAgICAgXCJLVkJMXCIsXG4gICAgICAgIFwiS0xHQlwiLFxuICAgICAgICBcIktLQktcIixcbiAgICAgICAgXCJMQVZCXCIsXG4gICAgICAgIFwiTlRCTFwiLFxuICAgICAgICBcIk9SQkNcIixcbiAgICAgICAgXCJQS0dCXCIsXG4gICAgICAgIFwiUFJUSFwiLFxuICAgICAgICBcIlBTSUJcIixcbiAgICAgICAgXCJQVU5CXCIsXG4gICAgICAgIFwiUkFUTlwiLFxuICAgICAgICBcIlJCSVNcIixcbiAgICAgICAgXCJTSUJMXCIsXG4gICAgICAgIFwiU0NCTFwiLFxuICAgICAgICBcIlNCQkpcIixcbiAgICAgICAgXCJTQkhZXCIsXG4gICAgICAgIFwiU0JJTlwiLFxuICAgICAgICBcIlNCTVlcIixcbiAgICAgICAgXCJTVEJQXCIsXG4gICAgICAgIFwiU0JUUlwiLFxuICAgICAgICBcIlNZTkJcIixcbiAgICAgICAgXCJUTUJMXCIsXG4gICAgICAgIFwiVUNCQVwiLFxuICAgICAgICBcIlVUSUJcIixcbiAgICAgICAgXCJWSUpCXCIsXG4gICAgICAgIFwiWUVTQlwiLFxuICAgICAgICBcIlpTQkxcIixcbiAgICAgICAgXCJJQ0lDXCJcbiAgICBdXG59IiwibW9kdWxlLmV4cG9ydHM9e1xuXHRcIm91dGxvb2tcIjogW1xuXHRcdFwiaG90bWFpbC5hdFwiLFxuXHRcdFwiaG90bWFpbC5iZVwiLFxuXHRcdFwiaG90bWFpbC5jYVwiLFxuXHRcdFwiaG90bWFpbC5jbFwiLFxuXHRcdFwiaG90bWFpbC5jby5pbFwiLFxuXHRcdFwiaG90bWFpbC5jby5uelwiLFxuXHRcdFwiaG90bWFpbC5jby50aFwiLFxuXHRcdFwiaG90bWFpbC5jby51a1wiLFxuXHRcdFwiaG90bWFpbC5jb21cIixcblx0XHRcImhvdG1haWwuY29tLmFyXCIsXG5cdFx0XCJob3RtYWlsLmNvbS5hdVwiLFxuXHRcdFwiaG90bWFpbC5jb20uYnJcIixcblx0XHRcImhvdG1haWwuY29tLmdyXCIsXG5cdFx0XCJob3RtYWlsLmNvbS5teFwiLFxuXHRcdFwiaG90bWFpbC5jb20ucGVcIixcblx0XHRcImhvdG1haWwuY29tLnRyXCIsXG5cdFx0XCJob3RtYWlsLmNvbS52blwiLFxuXHRcdFwiaG90bWFpbC5jelwiLFxuXHRcdFwiaG90bWFpbC5kZVwiLFxuXHRcdFwiaG90bWFpbC5ka1wiLFxuXHRcdFwiaG90bWFpbC5lc1wiLFxuXHRcdFwiaG90bWFpbC5mclwiLFxuXHRcdFwiaG90bWFpbC5odVwiLFxuXHRcdFwiaG90bWFpbC5pZFwiLFxuXHRcdFwiaG90bWFpbC5pZVwiLFxuXHRcdFwiaG90bWFpbC5pblwiLFxuXHRcdFwiaG90bWFpbC5pdFwiLFxuXHRcdFwiaG90bWFpbC5qcFwiLFxuXHRcdFwiaG90bWFpbC5rclwiLFxuXHRcdFwiaG90bWFpbC5sdlwiLFxuXHRcdFwiaG90bWFpbC5teVwiLFxuXHRcdFwiaG90bWFpbC5waFwiLFxuXHRcdFwiaG90bWFpbC5wdFwiLFxuXHRcdFwiaG90bWFpbC5zYVwiLFxuXHRcdFwiaG90bWFpbC5zZ1wiLFxuXHRcdFwiaG90bWFpbC5za1wiLFxuXHRcdFwibGl2ZS5iZVwiLFxuXHRcdFwibGl2ZS5jby51a1wiLFxuXHRcdFwibGl2ZS5jb21cIixcblx0XHRcImxpdmUuY29tLmFyXCIsXG5cdFx0XCJsaXZlLmNvbS5teFwiLFxuXHRcdFwibGl2ZS5kZVwiLFxuXHRcdFwibGl2ZS5lc1wiLFxuXHRcdFwibGl2ZS5ldVwiLFxuXHRcdFwibGl2ZS5mclwiLFxuXHRcdFwibGl2ZS5pdFwiLFxuXHRcdFwibGl2ZS5ubFwiLFxuXHRcdFwibXNuLmNvbVwiLFxuXHRcdFwib3V0bG9vay5hdFwiLFxuXHRcdFwib3V0bG9vay5iZVwiLFxuXHRcdFwib3V0bG9vay5jbFwiLFxuXHRcdFwib3V0bG9vay5jby5pbFwiLFxuXHRcdFwib3V0bG9vay5jby5uelwiLFxuXHRcdFwib3V0bG9vay5jby50aFwiLFxuXHRcdFwib3V0bG9vay5jb21cIixcblx0XHRcIm91dGxvb2suY29tLmFyXCIsXG5cdFx0XCJvdXRsb29rLmNvbS5hdVwiLFxuXHRcdFwib3V0bG9vay5jb20uYnJcIixcblx0XHRcIm91dGxvb2suY29tLmdyXCIsXG5cdFx0XCJvdXRsb29rLmNvbS5wZVwiLFxuXHRcdFwib3V0bG9vay5jb20udHJcIixcblx0XHRcIm91dGxvb2suY29tLnZuXCIsXG5cdFx0XCJvdXRsb29rLmN6XCIsXG5cdFx0XCJvdXRsb29rLmRlXCIsXG5cdFx0XCJvdXRsb29rLmRrXCIsXG5cdFx0XCJvdXRsb29rLmVzXCIsXG5cdFx0XCJvdXRsb29rLmZyXCIsXG5cdFx0XCJvdXRsb29rLmh1XCIsXG5cdFx0XCJvdXRsb29rLmlkXCIsXG5cdFx0XCJvdXRsb29rLmllXCIsXG5cdFx0XCJvdXRsb29rLmluXCIsXG5cdFx0XCJvdXRsb29rLml0XCIsXG5cdFx0XCJvdXRsb29rLmpwXCIsXG5cdFx0XCJvdXRsb29rLmtyXCIsXG5cdFx0XCJvdXRsb29rLmx2XCIsXG5cdFx0XCJvdXRsb29rLm15XCIsXG5cdFx0XCJvdXRsb29rLnBoXCIsXG5cdFx0XCJvdXRsb29rLnB0XCIsXG5cdFx0XCJvdXRsb29rLnNhXCIsXG5cdFx0XCJvdXRsb29rLnNnXCIsXG5cdFx0XCJvdXRsb29rLnNrXCIsXG5cdFx0XCJwYXNzcG9ydC5jb21cIlxuICAgIF0sXG4gICAgXCJ1c3RcIjpbXG4gICAgICAgIFwidXN0LWdsb2JhbC5jb21cIlxuICAgIF0sXG4gICAgXCJnbWFpbFwiOltcbiAgICAgICAgXCJnbWFpbC5jb21cIlxuXHRdLFxuXHRcInRjc1wiOltcblx0XHRcInRjcy5jb21cIlxuXHRdLFxuXHRcImluZm9zeXNcIjpbXG5cdFx0XCJpbmZvc3lzLmNvbVwiXG5cdF0sXG5cdFwiY29uZ25pemFudFwiOltcblx0XHRcImNvZ25pemFudC5jb21cIlxuXHRdLFxuICAgIFwieWFob29cIjpbXG4gICAgICAgIFwicm9ja2V0bWFpbC5jb21cIixcbiAgICAgICAgXCJ5YWhvby5jYVwiLFxuICAgICAgICBcInlhaG9vLmNvLnVrXCIsXG4gICAgICAgIFwieWFob28uY29tXCIsXG4gICAgICAgIFwieWFob28uZGVcIixcbiAgICAgICAgXCJ5YWhvby5mclwiLFxuICAgICAgICBcInlhaG9vLmluXCIsXG4gICAgICAgIFwieWFob28uaXRcIixcbiAgICAgICAgXCJ5bWFpbC5jb21cIlxuICAgIF0sXG4gICAgXCJhcHBsZVwiOltcbiAgICAgICAgXCJpY2xvdWQuY29tXCIsXG4gICAgICAgIFwibWFjLmNvbVwiLFxuICAgICAgICBcIm1lLmNvbVwiXG4gICAgXVxufSIsInZhciBhc3NlcnRTdHJpbmcgPSByZXF1aXJlKFwiLi9pc1N0cmluZ1wiKTtcbi8qKlxuICogQGV4cG9ydHMgaXNIZXhhRGVjaW1hbFxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gXG4gKi9cbmV4cG9ydHMuaXNIZXhhRGVjaW1hbCA9IHZhbHVlPT4ge1xuICAgIGFzc2VydFN0cmluZy5pc1N0cmluZyh2YWx1ZSk7XG4gICAgY29uc3QgaGV4YVJlZyA9IC9eWzAtOUEtRl0rJC9pO1xuICAgIHJldHVybiBoZXhhUmVnLnRlc3QodmFsdWUpO1xufSIsIi8qKlxuICogQGV4cG9ydHMgaXNTdHJpbmdcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZSBcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnRzLmlzU3RyaW5nID0gdmFsdWU9PiB7XG4gICAgaWYodHlwZW9mKHZhbHVlKSA9PT0gXCJzdHJpbmdcIil7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1lbHNle1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHR5cGVcIik7XG4gICAgfVxufSIsInZhciBhc3NlcnRTdHJpbmcgPSByZXF1aXJlKFwiLi4vbGliL2lzU3RyaW5nXCIpO1xuLyoqXG4gKiBAZXhwb3J0cyBsdWhuQ2hlY2tcbiAqIEBkZXNjIENoZWNrcyBpZiB0aGUgY2FyZCBudW1iZXIgaXMgdmFsaWQgb3Igbm90LlxuICogQHBhcmFtIHtTdHJpbmd9IGNhcmROdW1cbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5leHBvcnRzLmx1aG5DaGVjayA9IChjYXJkTnVtKT0+e1xuICAgIGFzc2VydFN0cmluZy5pc1N0cmluZyhjYXJkTnVtKTtcbiAgICB2YXIgbnVtZXJpY0Rhc2hSZWdleCA9IC9eW1xcZFxcLVxcc10rJC9cbiAgICBpZiAoIW51bWVyaWNEYXNoUmVnZXgudGVzdChjYXJkTnVtKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgdmFyIG5DaGVjayA9IDAsIG5EaWdpdCA9IDAsIGJFdmVuID0gZmFsc2U7XG4gICAgdmFyIHN0cmlwcGVkRmllbGQgPSBjYXJkTnVtLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcblxuICAgIGZvciAodmFyIG4gPSBzdHJpcHBlZEZpZWxkLmxlbmd0aCAtIDE7IG4gPj0gMDsgbi0tKSB7XG4gICAgICAgIHZhciBjRGlnaXQgPSBzdHJpcHBlZEZpZWxkLmNoYXJBdChuKTtcbiAgICAgICAgbkRpZ2l0ID0gcGFyc2VJbnQoY0RpZ2l0LCAxMCk7XG4gICAgICAgIGlmIChiRXZlbikge1xuICAgICAgICAgICAgaWYgKChuRGlnaXQgKj0gMikgPiA5KSBuRGlnaXQgLT0gOTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5DaGVjayArPSBuRGlnaXQ7XG4gICAgICAgIGJFdmVuID0gIWJFdmVuO1xuICAgIH1cblxuICBcdHJldHVybiAobkNoZWNrICUgMTApID09PSAwO1xufSIsIm1vZHVsZS5leHBvcnRzPXtcbiAgICBcImRvbWFpbnNcIjogW1xuICAgICAgICBcIi5leGFtcGxlXCIsXG4gICAgICAgIFwiLmludmFsaWRcIixcbiAgICAgICAgXCJleGFtcGxlLmNvbVwiLFxuICAgICAgICBcImV4YW1wbGUubmV0XCIsXG4gICAgICAgIFwiZXhhbXBsZS5vcmdcIlxuICAgIF1cbn0iXX0=
