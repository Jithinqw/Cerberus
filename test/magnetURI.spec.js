const assert = require('assert');
var magnetURIValidator = require('../fns/isMagnetURI');

describe('Unit test for Magnet URI', () => {
    it('This function should return true on correct magnet uri', () => {
        let validMagnet = magnetURIValidator.isMagnetURI('magnet:?xt=urn:btih:c12fe1c06bba254a9dc9f519b335aa7c1367a88a');
        assert.strictEqual(validMagnet, true);
    });

    it('This function should return false on incorrect magnet uri', () => {
        let invalidMagnet = magnetURIValidator.isMagnetURI('https://gooogle.com');
        assert.strictEqual(invalidMagnet, false);
    });
});