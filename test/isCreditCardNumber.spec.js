const assert = require('assert')
var creditCardValidator = require('../fns/isCreditCard')

describe('Unit test for credit card valiatrions', () => {
    it('The function should return true on valid credit card', () => {
        let validCreditCard = creditCardValidator.isCreditCardNumber(
            '5241933380249003'
        )
        assert.strictEqual(validCreditCard, true)
    })

    it('The function should return false on invalid credit card', () => {
        let invalidCreditCard = creditCardValidator.isCreditCardNumber(
            '05241933380249003'
        )
        assert.strictEqual(invalidCreditCard, true)
    })
})

describe('Unit test for find the payment gateway for credit card', () => {
    it('The function should return masaterCard on valid credit card', () => {
        let validCreditCard = creditCardValidator.detectCardType(
            '5241933380249003'
        )
        assert.strictEqual(validCreditCard, 'mastercard')
    })

    it('The function should return masaterCard on valid credit card', () => {
        let validCreditCard = creditCardValidator.detectCardType(
            '4419333830249003'
        )
        assert.strictEqual(validCreditCard, 'visa')
    })
})
