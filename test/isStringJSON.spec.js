const assert = require('assert')
var isStringJSON = require('../fns/isStringJSON')

describe('Unit test for isStringJSON function', () => {
    it('This function should return true on valid JSON', () => {
        let validString = isStringJSON.isStringJSON('{}')
        assert.strictEqual(validString, true)
    })

    it('This function should return false on invalid JSON', () => {
        let invalidString = isStringJSON.isStringJSON('')
        assert.strictEqual(invalidString, false)
    })
})
