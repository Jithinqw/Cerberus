const assert = require('assert')
var postalCodeValidator = require('../fns/isPostalCode')

describe('Unit test for postal code validator', () => {
    it('This function should return true on valid postalCode', () => {
        let validPostalCode = postalCodeValidator.isPostalCodeValid(
            '690519',
            'IN'
        )
        assert.strictEqual(validPostalCode, true)
    })

    it('This function should return true on valid postalCode', () => {
        let validPostalCode = postalCodeValidator.isPostalCodeValid(
            '6905109',
            'IN'
        )
        assert.strictEqual(validPostalCode, false)
    })
})
