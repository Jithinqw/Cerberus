var assertIter = require("../lib/typeChecker");

/**
 * @exports unique
 * @desc returns unique iterable on passing an iterable
 * @param {Object}
 * @returns {Object}
 */
exprots.unique = iter=>{
    assertIter.isIterable(iter);
    let uniqueiter = [];
    for(let i=0;i<iter.length;i++){
        if(iter.indexOf(iter[i] === -1)){
            uniqueiter.push(iter[i]);
        }
    }
    return uniqueiter;
}