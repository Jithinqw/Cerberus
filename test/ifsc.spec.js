const assert = require('assert')
var ifscCode = require('../fns/ifscCode')

describe('Unit test for IFSC validator', () => {
    it('The function should return true on valid IFSC code', () => {
        var validCode = ifscCode.isIFSCode('ADCB0000002')
        assert.strictEqual(validCode, true)
    })

    it('The function should return false on invlaid IFSC code', () => {
        var invalidCode = ifscCode.isIFSCode('ADCB000002')
        assert.strictEqual(invalidCode, false)
    })
})

describe('Unit testing for getting branchCode', () => {
    it('the function should return the value of a branch', () => {
        var validBranchCode = ifscCode.getBranchCode('ADCB0000002')
        assert.strictEqual(validBranchCode, '000002')
    })
})

describe('Unit testing for getting bankcode', () => {
    it('The function should return value of bankcode', () => {
        var validBankCode = ifscCode.getBankCode('ADCB0000002')
        assert.strictEqual(validBankCode, 'ADCB')
    })
})
