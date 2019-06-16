var splitUsername = require("../fns/emailNormalizer");
var restrictedDomains = require("../lib/reservedDomains.json");

/**
 * @function isUsernameValid
 * @param {*} email 
 * @returns {Boolean}
 */
var isUsernameValid = email=> {
    let username = splitUsername.getUsername(email);
    if(/[\.";<>]/.test(username.charAt(0)) === false){
        return true;
    }else{
        return false;
    }
}

/**
 * @function restrictedDomainCheck
 * @param {*} email 
 * @returns {Boolean}
 */
var restrictedDomainCheck = email=> {
    domain = email.split("@");
    for(let i=0; i<=restrictedDomains["domains"].length; i++){
        if(restrictedDomains["domains"] === domain[1]){
            return false;
        }else{
            return true;
        }
    }
}

/**
 * @exports isEmailValid
 * @desc Checks if the email is valid accoriding to the default or options config.
 * Checking is done using spec defined in RFC 5321.
 * @param {String} email
 * @param {Object} oprtions
 * @return {Boolean}
 */
exports.isEmailValid = (email)=> {
    if(isUsernameValid(email)){
        if(restrictedDomainCheck(email) === false){
            return true;
        }else{
            return false;
        }
    }else{
        false;
    }
}