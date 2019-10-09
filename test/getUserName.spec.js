const assert = require('assert')
var getUsername = require('../fns/emailNormalizer')

describe('Unit test for getting the username from the email address', () => {
    it('The function should return username on valid username', () => {
        let username = getUsername.getUsername('jithin@gmail.com')
        assert.strictEqual(username, 'jithin')
    })

    it('The function should return false on invalid email address', () => {
        let username = getUsername.getUsername('@fgdfg.com')
        assert.strictEqual(username, null)
    })

    it('The function should return false on wiered email address', () => {
        let username = getUsername.getUsername('Wdfgg@@gmail.com')
        assert.strictEqual(username, null)
    })
})
