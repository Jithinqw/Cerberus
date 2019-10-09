const assert = require('assert')
var uniqueIter = require('../fns/unique')

describe('Unit test for unique iter function', () => {
    it('The function should return iter array who have unique values', () => {
        let iterArray = [2, 4, 5, 6, 4, 5, 5, 5, 5, 5]
        let validArry = [2, 4, 5, 6]
        let returnArray = uniqueIter.unique(iterArray)
        assert.deepEqual(returnArray, validArry)
    })

    it('The function should be throw an error on passing a non iterator', () => {
        let invalidInput = 444
        assert.throws(() => uniqueIter.unique(invalidInput), Error)
    })
})
