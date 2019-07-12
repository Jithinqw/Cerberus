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