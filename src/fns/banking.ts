import PATTERNEXP from '../fns/data';

/**
 * @function isIFSCValid
 * @param {string} val 
 * @returns {boolean}
 */
const isIFSCValid = (val: string): boolean => {
    return PATTERNEXP.PATTERNEXP.ifsc.test(val);
}

/**
 * @function getBankCode
 * @param {string} val 
 * @returns {string}
 */
const getBankCode = (val: string): string => {
    let bankCode: string = '';
    if(isIFSCValid(val)) {
        bankCode = val.substring(0, 4);
    }
    return bankCode;
}

/**
 * @function getBranchCode
 * @param {string} val 
 * @returns {string}
 */
const getBranchCode = (val: string): string => {
    let branchCode: string = '';
    if(isIFSCValid(val)) {
        branchCode = val.substring(5, 11);
    }
    return branchCode;
}

/**
 * @function isPANValid
 * @param {string} val 
 * @returns {boolean}
 */
const isPANValid = (val: string): boolean => {
    return PATTERNEXP.PATTERNEXP.panExp.test(val);
}

const banking = {
    isIFSCValid,
    getBankCode,
    getBranchCode,
    isPANValid,
}

export default banking;
