var assertString = require('../lib/isString')
var luhnCheck = require('../lib/luhnCheck')

/**
 * @exports isCreditCardNumber
 * @desc Checks if the credit card number is valid or not.
 * @param { String } creditCardNumber
 * @return { Boolean }
 */
exports.isCreditCardNumber = creditCardNumber => {
    return luhnCheck.luhnCheck(creditCardNumber)
}

/**
 * @exports detectCardType
 * @desc detects card type
 * @param { String } cardNumber
 * @returns { String }
 */
exports.detectCardType = cardNumber => {
    assertString.isString(cardNumber)
    if (luhnCheck.luhnCheck(cardNumber) == true) {
        var re = {
            electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
            maestro: /^(5[06789]|6)[0-9]{0,}$/,
            dankort: /^(5019)\d+$/,
            interpayment: /^(636)\d+$/,
            unionpay: /^(62[0-9]{14,17})$/,
            visa: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
            bcglobal: /^(6541|6556)[0-9]{12}$/,
            carteblanchecard: /^389[0-9]{11}$/,
            instapaycard: /^63[7-9][0-9]{13}$/,
            koreanlocalCard:/^9[0-9]{15}$/,
            lasercard: /^(6304|6706|6709|6771)[0-9]{12,15}$/,
            solocard: /^(6334|6767)[0-9]{12}|(6334|6767)[0-9]{14}|(6334|6767)[0-9]{15}$/,
            switchcard: /^(4903|4905|4911|4936|6333|6759)[0-9]{12}|(4903|4905|4911|4936|6333|6759)[0-9]{14}|(4903|4905|4911|4936|6333|6759)[0-9]{15}|564182[0-9]{10}|564182[0-9]{12}|564182[0-9]{13}|633110[0-9]{10}|633110[0-9]{12}|633110[0-9]{13}$/,
            mastercard: /^5[1-5][0-9]{14}$/,
            americanexpress: /^3[47][0-9]{13}$/,
            dinersclub: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
            rupay: /^6[0-9]{15}$/,
            discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
            jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
        }

        for (var key in re) {
            if (re[key].test(cardNumber)) {
                return key
            }
        }
    } else {
        return false;
    }
}
