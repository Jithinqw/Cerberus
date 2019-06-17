/**
 * @exports isDate
 * @desc This function only recognize ISO format defined by ECMA Script ECMA-256
 * https://www.ecma-international.org/ecma-262/6.0/#sec-date.parse
 * @param {String} dateValue
 * @returns {Boolean}
 */
exports.isDate = dateValue=> {
    let validateDate = Date.parse(new Date(dateValue));
    if(isNaN(validateDate)){
        return false;
    }else{
        return true;
    }
}