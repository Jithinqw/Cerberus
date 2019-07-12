var assertString = require("../lib/isString");
/**
 * @exports luhnCheck
 * @desc Checks if the card number is valid or not.
 * @param {String} cardNum
 * @returns {Boolean}
 */
exports.luhnCheck = (cardNum)=>{
    assertString.isString(cardNum);
    var numericDashRegex = /^[\d\-\s]+$/
    if (!numericDashRegex.test(cardNum)) return false;

    var nCheck = 0, nDigit = 0, bEven = false;
    var strippedField = cardNum.replace(/\D/g, "");

    for (var n = strippedField.length - 1; n >= 0; n--) {
        var cDigit = strippedField.charAt(n);
        nDigit = parseInt(cDigit, 10);
        if (bEven) {
            if ((nDigit *= 2) > 9) nDigit -= 9;
        }

        nCheck += nDigit;
        bEven = !bEven;
    }

  	return (nCheck % 10) === 0;
}