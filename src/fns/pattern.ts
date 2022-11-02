import core from "../core";

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

export default {
    isJwtToken
}

