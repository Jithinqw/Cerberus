import http from 'http';
import PATTERNEXP from '../fns/data';

/**
 * @function isInternetConnected
 * @param {http.RequestOptions} options
 * @returns {boolean}
 */
const isInternetConnected = (options: http.RequestOptions):boolean => {
    let isConnected: boolean = false;
    http.request(options, (resp) => {
        resp.on('data', data => {
            isConnected = true;
        });
    }).on('error', (err) => {
        isConnected = false;
    }).end();
    return isConnected;
}

/**
 * @function isMagnetURIValid
 * @param {string} val 
 * @returns {boolean}
 */
const isMagnetURIValid = (val: string):boolean => {
    return PATTERNEXP.PATTERNEXP.mangetExp.test(val);
}

/**
 * @function isPortValid
 * @param {string} port 
 * @returns {boolean}
 */
const isPortValid = (port: string):boolean => {
    let portValid: boolean = false;
    if(parseInt(port) > 0 && parseInt(port) > 65535) {
        portValid = PATTERNEXP.PATTERNEXP.portExp.test(port);
    }
    return portValid;
}

const networking = {
    isInternetConnected,
    isMagnetURIValid,
    isPortValid,
}

export default networking;

