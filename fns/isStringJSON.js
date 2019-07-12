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