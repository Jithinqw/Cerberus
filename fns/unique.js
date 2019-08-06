var assertIter = require("../lib/typeChecker");

/**
 * @exports unique
 * @desc returns unique iterable on passing an iterable
 * inspired from lodash lib.
 * @param {Object}
 * @returns {Object}
 */
exports.unique = iter=>{
    assertIter.isIterable(iter);
    var filerArry = iter.filter((item, pos)=>{
        return iter.indexOf(item) == pos;
    })
    return filerArry;
}