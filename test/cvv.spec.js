const assert = require('assert')
var cvvFun = require('../fns/isCVVNumber')

describe('Unit test for checking if a string is a 3 digit valid CVV number', () => {
    it('This function should return true on correct CVV number', () => {
        let validCVV = cvvFun.CVVValidator('344',3)
        assert.strictEqual(validCVV, true)
    })

    it('This fuction should return false on invalid CVV number', () => {
        let validCVV = cvvFun.CVVValidator('3',3)
        assert.strictEqual(validCVV, false)
    })

    it('This function should raise error on giving any other types', () => {
        assert.throws(() => cvvFun.CVVValidator(44,4), Error)
    })
})

describe('Unit test for checking if a string is a valid 4 digit CVV number', () => {
    it('This function should return true on correct CVV number', () => {
        let validCVV = cvvFun.CVVValidator('3444',4)
        assert.strictEqual(validCVV, true)
    })

    it('This fuction should return false on invalid CVV number', () => {
        let validCVV = cvvFun.CVVValidator('3',4)
        assert.strictEqual(validCVV, false)
    })

    it('This function should raise error on giving any other types', () => {
        assert.throws(() => cvvFun.CVVValidator(44,4), Error)
    })
})
