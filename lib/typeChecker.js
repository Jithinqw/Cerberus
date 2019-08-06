/**
 * @exports isFunction
 * @param {Object} fn
 * @returns {Boolean} 
 */
exports.isFunction = fn=>{
    if(typeof(fn) == "function"){
        return true;
    }else{
        throw new Error ("Invalid type")
    }
}

/**
 * @exports isIterable
 * @param {Object} iter
 * @returns {Boolean}
 */
exports.isIterable = iter=>{
    if (iter == null) {
        throw new Error("Invalid type");
    }
    return typeof iter[Symbol.iterator] === "function";
}