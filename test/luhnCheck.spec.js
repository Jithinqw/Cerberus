const assert = require('assert')
var luhnCheck = require('../lib/luhnCheck')
var iscvvNumber = require('../fns/isCVVNumber')

describe('Unit test for luhn algorithm implmentation', () => {
    it('This function should return true on valid card number', () => {
        var validCard = luhnCheck.luhnCheck('5241933380249003')
        assert.strictEqual(validCard, true)
    })

    it('The function should return false on invalid card number', () => {
        var invalidCard = luhnCheck.luhnCheck('524193338049003')
        assert.strictEqual(invalidCard, false)
    })
})

describe('Unit test for CVV number validator', () => {
    it('This function should return true on valid cvv numbers', () => {
        var validCVV = iscvvNumber.CVVValidator('344')
        assert.strictEqual(validCVV, true)
    })

    it('This function should return false on valid cvv numbers', () => {
        var invalidCVV = iscvvNumber.CVVValidator('34433')
        assert.strictEqual(invalidCVV, false)
    })
})
