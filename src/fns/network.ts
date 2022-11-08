import http from 'http';

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

const networking = {
    isInternetConnected
}
export default networking;

