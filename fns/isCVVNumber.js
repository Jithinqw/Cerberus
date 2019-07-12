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