/**
 * @function generateRandomNumber
 * @description Generates a random number,
 * between a min max value given as parameter
 * Will return a Javascript safe value,
 * otherwise returns 0.
 * @param {number} min 
 * @param {number} max 
 * @returns {number}
 */
const generateRandomNumber = (min: number, max: number): number => {
    let randNumber = 0;
    if(!isNaN(min) && !isNaN(max)) {
        randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if(Number.isSafeInteger(randNumber)) {
            return randNumber;
        } else {
            return randNumber;
        }
    }
    return randNumber;
}

/**
 * @function sanitizeNumber
 * @param {any} x 
 * @returns {typeof NaN | number}
 */
const sanitizeNumber = (x: any): typeof NaN | number => {
    if(isNaN(x)) {
        return NaN;
    }
    return x;
}

const numberFns = {
    generateRandomNumber,
    sanitizeNumber,
}

export default numberFns;
