const assert = require('assert');
var colorValidator = require('../fns/colorValidator');

describe('Unit test for RGB color validator', () => {
    it('This function should return true on correct rgb string', () => {
        let validRGB = colorValidator.isColorValid("rgb(252, 186, 3)", "reg")
        assert.strictEqual(validRGB, true);
    });

    it('This function should return false on incorrect rgb string', () => {
        let invalidRGB = colorValidator.isColorValid("rgb(2523, 1386, 3)", "reg")
        assert.strictEqual(invalidRGB, false);
    });
})

describe('Unit test for HEX color validator', () => {
    it('This function should return true on correct rgb string', () => {
        let validHEX = colorValidator.isColorValid("#fcba03", "hex")
        assert.strictEqual(validHEX, true);
    });

    it('This function should return false on incorrect rgb string', () => {
        let invalidHEX = colorValidator.isColorValid("#fcba03ssssss", "hex")
        assert.strictEqual(invalidHEX, false);
    });
})

describe('Unit test for REGA color validator', () => {
    it('This function should return true on correct REGA string', () => {
        let validREGA = colorValidator.isColorValid("rgba(255,0,0,0.2)", "rega")
        assert.strictEqual(validREGA, true);
    });

    it('This function should return false on incorrect rgb string', () => {
        let invalidREGA = colorValidator.isColorValid("rgba(255e,0,0,0.2)", "rega")
        assert.strictEqual(invalidREGA, false);
    });
})

describe('Unit test for HSL color validator', () => {
    it('This function should return true on correct HSL string', () => {
        let validHSL = colorValidator.isColorValid("hsl(217, 90%, 61%)", "hsl")
        assert.strictEqual(validHSL, true);
    });

    it('This function should return false on incorrect HSL string', () => {
        let invalidHSL = colorValidator.isColorValid("hsl(2554e,0,0,0.2)", "hsl")
        assert.strictEqual(invalidHSL, false);
    });
})

describe('Unit test for HSLA color validator', () => {
    it('This function should return true on correct HSLA string', () => {
        let validHSLA = colorValidator.isColorValid("hsla(180,2%,100%,0.5)", "hsla")
        assert.strictEqual(validHSLA, true);
    });

    it('This function should return false on incorrect HSLA string', () => {
        let invalidHSLA = colorValidator.isColorValid("hsla(1804,2%,100%,0.5)", "hsla")
        assert.strictEqual(invalidHSLA, false);
    });
})