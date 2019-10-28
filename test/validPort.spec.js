const assert = require('assert');
let portValid = require('../fns/isValidPort');

describe('Unit test for port validator', () => {
    it('This function should be able return true on valid port', () => {
        let portValidator = portValid.isValidPort('3000')
        assert.strictEqual(portValidator, true)
    })

    it('This function should be able return true on invalid port', () => {
        let portValidator = portValid.isValidPort('3000000')
        assert.strictEqual(portValidator, false)
    })
})