
// Type definitions for cerberus v0.9.0
// Project: https://github.com/Jithinqw/Cerberus
// Definitions by: Jithin Zacharia <https://github.com/Jithinqw/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import isEmail from './fns/isEmail';
import isDate = require("./fns/isDate");
import emailNormalizer = require("./fns/emailNormalizer");
import creditCard = require("./fns/isCreditCard");
import cvvNumber = require("./fns/isCVVNumber");
import JWTValidator = require("./fns/isJWTValid");
import mongoValidator = require("./fns/isMongoId");
import phoneNumberValidator = require("./fns/isPhoneNumber");
import postalCodeValidator = require("./fns/isPostalCode");
import jsonValidator = require("./fns/isStringJSON");
import bankCode = require("./fns/ifscCode");
import luhnCheck = require("./lib/luhnCheck");
import PANCardValidator = require("./fns/isPANCard");
import unique = require("./fns/unique");
import validateEtherHash = require('./fns/isEthereumHash');
import isValidPort = require('./fns/isValidPort');
import isUUID = require('./fns/isUUID');
import isIPAddress = require('./fns/isIPAddress');
import isDivisible = require('./fns/isDivisible');
import isBase64 = require('./fns/isBase64');
import isMACAddress = require('./fns/isMACAddress');
import colorValidator = require('./fns/colorValidator');
import isVehiclePlateValid = require('./fns/isVehicleNumber');
import isIMEINumber = require('./fns/isIMEINumber');
import isMagnetURI = require('./fns/isMagnetURI');
import isOctal = require('./fns/isOctal');
import isMD5 = require('./fns/isMD5');

declare const AUTHOR = 'Jithin Zacharia';
declare const VERSION = '0.9.0';

