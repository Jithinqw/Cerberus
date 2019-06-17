var isString = require("../lib/isString");
var IFSCCode = require("../lib/bank.json");

/**
 * @exports isIFSCode
 * @param {String} code
 * @returns {Boolean}
 */
var IFSCodeValidator = exports.isIFSCode = code=> {
    if(isString.isString(code) === false){
        return false;
    }else{
        const IFSC = /^(?=.*\d)(?=.*[0-9A-Z]).{11}$/;
        return IFSC.test(code);
    }
}

exports.getBankCode = code=> {
    if(isString.isString(code) === false){
        return false;
    }else{
        if(IFSCodeValidator(code) === true){
            return (code.substring(0,4))
        }else{
            return false;
        }
    }
}

exports.getBranchCode = code=>{
    if(isString.isString(code) === false){
        return false;
    }else{
        if(IFSCodeValidator(code) === true){
            return (code.substring(5, 11))
        }else{
            return false;
        }
    }
}