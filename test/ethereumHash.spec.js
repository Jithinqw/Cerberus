let validateEtherHash = require('../fns/isEthereumHash');
const assert = require('assert');

describe('Unit test for ethereum hash', ()=> {
    it('This function should able return true on valid hash', ()=>{
        let hash = validateEtherHash.isEthereumHash('0x3dde9c9cb6570577bef95433699eee7ebe8690d435de62a88b75976e12ded696');
        assert.strictEqual(hash, true);
    })
    it('This function should able return true on valid hash', ()=>{
        let hash = validateEtherHash.isEthereumHash('0x19f41bc0cacf9d0ab259256d8470052159bd691ab25de491f4ccca91d32a4f10');
        assert.strictEqual(hash, true);
    })
    it('This function should able return true on valid hash', ()=>{
        let hash = validateEtherHash.isEthereumHash('0x260477c5b5bb1e15e04f73dd9e96a4d830644d14455ccbcd0261a185cfc4bd37');
        assert.strictEqual(hash, true);
    })

})

describe('Unit test for invalid ethereum hash', ()=> {
    it('This function should able return false on valid hash', ()=>{
        let hash = validateEtherHash.isEthereumHash('0x3dde9c9cb6570577bef95433699eee7ebe8690d435de62a5976e12ded696');
        assert.strictEqual(hash, false);
    })
    it('This function should able return false on valid hash', ()=>{
        let hash = validateEtherHash.isEthereumHash('5da9b6bd77f47f5231826e7c');
        assert.strictEqual(hash, false);
    })
})