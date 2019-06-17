var normEmail = require("../lib/emailDomains.json");
var emailValidation = require("./isEmail");

/**
 * @exports normalizeEmail
 * @desc Checks if the email is belonging to a particular domain or not.
 * @param {String} email 
 * @param {String} domainName
 */
exports.normalizeEmail = (email, domainName)=>{
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
    if(emailValidation.emailValidator(email) === false){
        return null;
    }else{
        var name = email.split("@");
        return name[0] ? name[0] : null;
    }
}