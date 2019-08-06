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

const cerebreus={
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
};

module.exports = cerebreus;