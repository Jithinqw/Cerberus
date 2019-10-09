const assert = require('assert')
var panCardValidator = require('../fns/isPANCard')

describe('Unit test for testing if the PAN card is valid', () => {
    it('The function should be able to return true on correct PAN card number', () => {
        let validPan = panCardValidator.isPanCard('AFZPK7190K')
        assert.strictEqual(validPan, true)
    })

    it('The function should be able to return false on incorrect PAN card number', () => {
        let invalidPan = panCardValidator.isPanCard('FERERE34234243')
        assert.strictEqual(invalidPan, false)
    })

    it('The function should raise an error on passing any other type', () => {
        assert.throws(() => panCardValidator.isPanCard(24325524), Error)
    })
})
