var assertString = require('../lib/isString');

/**
 * @exports isValidPort 
 * @param {string} port
 * @returns {boolean}
 */
exports.isValidPort = port =>{
    assertString.isString(port);
    if(parseInt(port) > 0 && parseInt(port) < 65535){
        const REGEX = /^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$/;
        return REGEX.test(port);
    }
    return false;
}