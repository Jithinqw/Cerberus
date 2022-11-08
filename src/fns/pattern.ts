import core from "../core";
import PATTERNEXP from '../fns/data';

/**
 * @function isJwtToken
 * @description Check if passed value
 * is matching JWT token string match.
 * @param {any} value 
 * @returns {boolean}
 */
const isJwtToken = (value: any):boolean => {
    let isJwt: boolean = false;
    if(value && core.isString(value)) {
        isJwt = true;
    }
    return isJwt;
}

/**
 * @function isUUID
 * @description Check if UUID string,
 * should work on all versions.
 * @param {string} value 
 * @param {string} version 
 * @returns {boolean}
 */
const isUUID = (value: string, version: 'all'):boolean =>{
    let isValidUUID: boolean = false;
    if(value && core.isString(value)) {
        const pattern = PATTERNEXP.PATTERNEXP.uuidExp[version];
        isValidUUID = pattern && pattern.test(value);
    }
    return isValidUUID;
}

const isColorValid = (color: string, type: 'hex'): boolean => {
    let validColor:boolean = false;
    const patternMatch = PATTERNEXP.PATTERNEXP.colors[type];
    validColor = pattern && patternMatch.test(color);
    return validColor;
}

const pattern = {
    isJwtToken,
    isUUID,
    isColorValid,
};

export default pattern;

