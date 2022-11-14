/**
 * @function isNull
 * @param {any} value 
 * @returns {boolean}
 */
const isNull = (value: any): boolean => {
    return value === null;
}

/**
 * @function isNumber
 * @param {any} value 
 * @returns {boolean}
 */
const isNumber = (value: any):boolean => {
    return typeof value === 'number';
}

/**
 * @function isObject
 * @param value 
 * @returns {boolean}
 */
const isObject = (value: any): boolean => {
    const type = typeof value;
    return (
        value !== null && 
        (type === 'object' || type === 'function')
    );
}

/**
 * @function isString
 * @param {any} value 
 * @returns {boolean}
 */
const isString = (value: any): boolean => {
    const type = typeof value;
    return value !== null && (type === 'string');
}

/**
 * @function isEqual
 * @param {any} value 
 * @param {any} otherValue 
 * @returns {boolean}
 */
const isEqual = (value: any, otherValue: any):boolean => {
    return (
        value === otherValue || 
        (value !== value && otherValue !== otherValue)
    );
}

/**
 * @exports isIterable
 * @param {any} iter
 * @returns {boolean}
 */
const isIterable = (iter: any):boolean =>{
    let iterTruth: boolean = false;
    iterTruth = typeof iter[Symbol.iterator] === "function";
    return iterTruth;
}

const contains = (arrayIter: Array<any>, item:any) => {
    return arrayIter.indexOf(item) !== -1
}

const typeDef = (value: any) => {
    // Null is special
    if (value === null) return 'null';
    const primitives = new Set([
      'undefined',
      'boolean',
      'number',
      'string',
      'bigint',
      'symbol'
    ]);
    const _type = typeof value;
    if (_type === 'function') return _type;
    if (primitives.has(_type)) return _type;
    if (value instanceof String) return 'string';
    if (value instanceof Error) return 'error';
    if (Array.isArray(value)) return 'array';
    return _type;
};
  
const core = {
    isNull,
    isNumber,
    isObject,
    isString,
    isEqual,
    isIterable,
    contains,
    typeDef
}

export default core;