
/**
 * @function getTimeStamp
 * @description get current timestamp
 * @returns {string}
 */
const getCurrentTimeStamp = (): string => {
    const currentDate: Date = new Date();
    const currentYear: string = `${currentDate.getUTCFullYear()}`;
    const month: string = `${currentDate.getUTCMonth() + 1}`;
    const day: string = `${currentDate.getUTCDay()}`;
    const hours: string = `${currentDate.getUTCHours()}`;
    const minutes: string = `${currentDate.getUTCMinutes()}`;
    const seconds: string = `${currentDate.getUTCSeconds()}`;
    const date: string = `${currentYear}-${month}-${day}`;
    const timeStamp: string = `${hours}:${minutes}:${seconds}`;
    return `${date}-${timeStamp}`;
}

const timeFuns = {
    getCurrentTimeStamp,
}