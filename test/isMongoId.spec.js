const assert = require('assert')
var checkIfMongoId = require('../fns/isMongoId')

describe('Unit test for checking if the id is a MongoId', () => {
    it('The function should return true, if the given a real MongoId', () => {
        let validMongo = checkIfMongoId.isMongoId('5c6fbc39c43d0e786ddc744c')
        assert.strictEqual(validMongo, true)
    })

    it('The function should return false, if a non mongoId is given', () => {
        let invalidMongo = checkIfMongoId.isMongoId('dichlorodifluoromethanes')
        assert.strictEqual(invalidMongo, false)
    })
})
