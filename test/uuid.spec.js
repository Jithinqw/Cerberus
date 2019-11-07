const assert = require('assert');
var UUIDValidator = require('../fns/isUUID');

describe('Unit test for UUID3', () => {
    it('This function should return true on UUID3', () => {
        let validUUID = UUIDValidator.isUUID('a3bb189e-8bf9-3888-9912-ace4e6543002', '3')
        assert.strictEqual(validUUID, true);
    });

    it('This function should return false on invalid UUID3', () => {
        let invalidUUID = UUIDValidator.isUUID('sdfdff', '3')
        assert.strictEqual(invalidUUID, false);
    });
});

describe('Unit test for UUID 4', () => {
    it('This function should return true on UUID4', () => {
        let validUUID = UUIDValidator.isUUID('927f7d85-52b6-49ab-81fc-8cb092d27447', '4')
        assert.strictEqual(validUUID, true);
    });

    it('This function should return false on invalid UUID4', () => {
        let invalidUUID = UUIDValidator.isUUID('sdfdff', '4')
        assert.strictEqual(invalidUUID, false);
    });
});

describe('Unit test for UUID 5', () => {
    it('This function should return true on UUID5', () => {
        let validUUID = UUIDValidator.isUUID('a6edc906-2f9f-5fb2-a373-efac406f0ef2', '5')
        assert.strictEqual(validUUID, true);
    });

    it('This function should return false on invalid UUID5', () => {
        let invalidUUID = UUIDValidator.isUUID('sdfdff', '5')
        assert.strictEqual(invalidUUID, false);
    });
});

describe('Unit test for UUID all', () => {
    it('This function should return true on UUID all', () => {
        let validUUID = UUIDValidator.isUUID('a6edc906-2f9f-5fb2-a373-efac406f0ef2', 'all')
        assert.strictEqual(validUUID, true);
    });

    it('This function should return false on invalid UUID all', () => {
        let invalidUUID = UUIDValidator.isUUID('sdfdff', 'all')
        assert.strictEqual(invalidUUID, false);
    });
});