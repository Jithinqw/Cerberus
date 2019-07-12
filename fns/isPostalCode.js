var assertString = require("../lib/isString");
const postalPattern = {
    IL: /^\d{5}$/,
    IN: /^\d{6}$/,
    US: /^\d{5}(-\d{4})?$/
}

exports.isPostalCodeValid = (postalCode, countryCode)=>{
    assertString.isString(postalCode);
    if (countryCode.toUpperCase() in postalPattern === true){
        return (postalPattern[countryCode].test(postalCode));
    }else{
        throw new Error (`Invalid country code ${countryCode}`);
    }
}