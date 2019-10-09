const assert = require('assert')
emailNorm = require('../fns/emailNormalizer')

describe('Unit test for email normalizer', () => {
    it('This function should be able to send domain if an email is given', () => {
        let domain = emailNorm.normalizeEmail('jithin@gmail.com', 'gmail')
        assert.strictEqual(domain, true)
    })

    it('This function should return false if a false statement is given', () => {
        let domain = emailNorm.normalizeEmail('jithin@gmail.com', 'apple')
        assert.strictEqual(domain, false)
    })

    it('This function should behave strict on invalid emails', () => {
        let domain = emailNorm.normalizeEmail(
            'jithin.zacharia@@gmail.com',
            'gmail'
        )
        assert.strictEqual(domain, false)
    })
})

describe('Unit test for getting username from email', () => {
    it('This function should give username on giving the email', () => {
        let username = emailNorm.getUsername('jithin@gmail.com')
        assert.strictEqual(username, 'jithin')
    })

    it('This function should return null on giving an invlaid email', () => {
        let username = emailNorm.getUsername('@gmail.com')
        assert.strictEqual(username, null)
    })

    it('This function should be able to give username on complex email usernames', () => {
        let username = emailNorm.getUsername('jithin.zacharia23333@gmail.com')
        assert.strictEqual(username, 'jithin.zacharia23333')
    })
})
