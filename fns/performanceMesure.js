var assertFunction = require("../lib/typeChecker");
/**
 * @exports mesurePerformance
 * @param {Object} fn
 * @returns {Number}
 */
exports.mesurePerformance = (callback, ...params)=>{
    assertFunction.isFunction(fn);
    let startTime = Date.now();
    callback(...params);
    let endTime = Date.now();
    return String((endTime-startTime)) + "ms"
}