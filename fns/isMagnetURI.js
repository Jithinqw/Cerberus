var assertString = require('../lib/isString');

const magnetURI = /magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32}/i;

/**
 * @exports isMagnetURI 
 * @param {string} isMagnetURI 
 * @returns {boolean}
 */
exports.isMagnetURI = url =>{
  assertString.isString(url);
  return magnetURI.test(url.trim());
}