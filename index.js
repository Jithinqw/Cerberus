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
var luhnCheck = require("./lib/luhnCheck");
var PANCardValidator = require("./fns/isPANCard");
var unique = require("./fns/unique");
var validateEtherHash = require('./fns/isEthereumHash');
var isValidPort = require('./fns/isValidPort');
var isUUID = require('./fns/isUUID');
var isIPAddress = require('./fns/isIPAddress');
var isDivisible = require('./fns/isDivisible');
var isBase64 = require('./fns/isBase64');
var colorValidator = require('./fns/colorValidator');
var isVehiclePlateValid = require('./fns/isVehicleNumber');

const VERSION = "0.7.0";
const AUTHOR = "Jithin Zacharia";

const cerebreus={
    isEmailValid: isEmail.isEmailValid,
    getCardProvider: creditCard.detectCardType,
    isCardValid: creditCard.isCreditCardNumber,
    isCVVValid: cvvNumber.CVVValidator,
    isJWTValid: JWTValidator.isJWT,
    isDate: isDate.isDate,
    luhnCheck: luhnCheck.luhnCheck,
    panCardValidator: PANCardValidator.isPanCard,
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
    getBranchCode: bankCode.getBranchCode,
    isUUID: isUUID,
    isIPAddress: isIPAddress,
    isDivisible: isDivisible,
    isBase64: isBase64,
    isVehiclePlateValid: isVehiclePlateValid,
    colorValidator: colorValidator,
    version: VERSION,
    author: AUTHOR
};

module.exports = {
    cerebreus
};
