enum Ops {
    SET,
    GET
}

/**
 * @function makeLocalStorage
 * @description Make a localstorage.
 * @param key 
 * @param value 
 * @returns {void}
 */
const makeLocalStorage = (key: string, value: any):void => {
    window && window.localStorage.setItem(key, value);
}

/**
 * @function localStorageOps
 * @description Operations on localstorage.
 * @param key 
 * @param localObj 
 * @param ops 
 * @returns 
 */
const localStorageOps = (key: string, localObj: any, ops:Ops) => {
    switch(ops) {
        case Ops.GET:
            const localStorageObj = window && window.localStorage.getItem(key);
            return localStorageObj && JSON.parse(localStorageObj);
        case Ops.SET:
            window && window.localStorage.setItem(key, JSON.stringify(localObj));
            break;
        default:
            const localStorageObjrs = window && window.localStorage.getItem(key);
            return localStorageObjrs && JSON.parse(localStorageObjrs);
    }
}

/**
 * @function makeSessionStorage
 * @param key 
 * @param value 
 */
const makeSessionStorage = (key: string, value: any) => {
    window && window.sessionStorage.setItem(key, value);
}

/**
 * @function sessionStorageOps
 * @param key 
 * @param localObj 
 * @param ops 
 * @returns 
 */
const sessionStorageOps = (key: string, localObj: any, ops: Ops) => {
    switch(ops) {
        case Ops.GET:
            const sessionStorageObj = window && window.sessionStorage.getItem(key);
            return sessionStorageObj && JSON.parse(sessionStorageObj);
        case Ops.SET:
            window && window.sessionStorage.setItem(key, JSON.stringify(localObj));
            break;
        default:
            const sessionStorageObjrs = window && window.sessionStorage.getItem(key);
            return sessionStorageObjrs && JSON.parse(sessionStorageObjrs);
    }
}

const storage = {
    sessionStorageOps,
    makeSessionStorage,
    localStorageOps,
    makeLocalStorage,
    Ops,
}

export default storage;