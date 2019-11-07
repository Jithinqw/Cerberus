const assert = require('assert');
var MACAddressValidator = require('../fns/isMACAddress');

describe('Unit test for MAC Address', () => {
    it('This function should return true on correct MAC', () => {
        let validMAC = MACAddressValidator.isMACAddress('00:A0:C9:14:C8:29')
        assert.strictEqual(validMAC, true);
    });

    it('This function should return false on incorrect MAC address', () => {
        let invalidMAC = MACAddressValidator.isMACAddress('doodd')
        assert.strictEqual(invalidMAC, false);
    });
});