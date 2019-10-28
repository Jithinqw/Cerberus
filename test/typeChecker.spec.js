const assert = require('assert');
const typeValidator = require('../lib/typeChecker');

describe('Unit test for function validation functions', ()=> {
    it('This function should able return true on valid function', ()=>{
        var addFunc = ()=>{
            return 5+6;
        }
        var funcValidator = typeValidator.isFunction(addFunc)
        assert.strictEqual(funcValidator, true);
    })

    it('This function should able return false on invalid function', ()=>{
        var sub = {};
        assert.throws(()=> typeValidator.isFunction(sub), Error);
    })
})