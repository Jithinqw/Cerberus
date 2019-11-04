var assertString = require('../lib/isString');

/**
 * @function isColorHex
 * @param {string} color
 * @returns {Boolean}
 */
exports.isColorHex = color=> {
  assertString.isString(color);
  HEX_REG = /^#(?:[A-Fa-f0-9]{3}){1,2}$/
  return HEX_REG.test(color);
}

/**
 * @function isColorRGB
 * @param {string} color
 * @returns {Boolean}
 */
exports.isColorRGB = color=> {
  assertString.isString(color);
  RGB_REG = /^rgb[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*(?:,(?![)])|(?=[)]))){3}[)]$/
  return RGB_REG.test(color);
}

/**
 * @function isColorRGBA
 * @param {string} color
 * @returns {Boolean}
 */
exports.isColorRGBA = color=> {
  assertString.isString(color);
  RGBA_REG = /^^rgba[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*,){3}\s*0*(?:\.\d+|1(?:\.0*)?)\s*[)]$/
  return RGBA_REG.test(color);
}

/**
 * @function isColorHSL
 * @param {string} color
 * @returns {Boolean}
 */
exports.isColorHSL = color=> {
  assertString.isString(color);
  HSL_REG = /^hsl[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*[)]$/
  return HSL_REG.test(color);
}

/**
 * @function isColorHSLA
 * @param {string} color
 * @returns {Boolean}
 */
exports.isColorHSLA = color=> {
  assertString.isString(color);
  HSLA_REG = /^hsla[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*,\s*0*(?:\.\d+|1(?:\.0*)?)\s*[)]$/
  return HSLA_REG.test(color);
}
