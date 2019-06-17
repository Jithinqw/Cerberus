/**
 * @exports isString
 * @param {String} value 
 * @returns {Boolean}
 */
exports.isString = value=> {
    if(typeof(value) === "string"){
        return true;
    }else{
        return false;
    }
}