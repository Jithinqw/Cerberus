/**
 * @function removeNonWord
 * Remove non-word chars.
 * @param {string} str
 * @returns {string}
 */
const removeNonWord = (str: string):string => {
    return str.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, "");
}

/**
 * @function replaceAccents
 * Replaces all accented chars with regular ones
 * 
 */
const replaceAccents = (str: string) => {
    // verifies if the String has accents and replace them
    if (str.search(/[\xC0-\xFF]/g) > -1) {
      str = str
        .replace(/[\xC0-\xC5]/g, "A")
        .replace(/[\xC6]/g, "AE")
        .replace(/[\xC7]/g, "C")
        .replace(/[\xC8-\xCB]/g, "E")
        .replace(/[\xCC-\xCF]/g, "I")
        .replace(/[\xD0]/g, "D")
        .replace(/[\xD1]/g, "N")
        .replace(/[\xD2-\xD6\xD8]/g, "O")
        .replace(/[\xD9-\xDC]/g, "U")
        .replace(/[\xDD]/g, "Y")
        .replace(/[\xDE]/g, "P")
        .replace(/[\xE0-\xE5]/g, "a")
        .replace(/[\xE6]/g, "ae")
        .replace(/[\xE7]/g, "c")
        .replace(/[\xE8-\xEB]/g, "e")
        .replace(/[\xEC-\xEF]/g, "i")
        .replace(/[\xF1]/g, "n")
        .replace(/[\xF2-\xF6\xF8]/g, "o")
        .replace(/[\xF9-\xFC]/g, "u")
        .replace(/[\xFE]/g, "p")
        .replace(/[\xFD\xFF]/g, "y");
    }
    return str;
}

/**
 * "Safer" String.toLowerCase()
 */
const lowerCase = (str: string) => {
    return str.toLowerCase();
}
  
/**
 * "Safer" String.toUpperCase()
 */
const upperCase = (str: string) => {
    return str.toUpperCase();
}
  
  /**
   * Convert string to camelCase text.
   */
const camelCase = (str: string) => {
    str = replaceAccents(str);
    str = removeNonWord(str)
      .replace(/\-/g, " ") //convert all hyphens to spaces
      .replace(/\s[a-z]/g, upperCase) //convert first char of each word to UPPERCASE
      .replace(/\s+/g, "") //remove spaces
      .replace(/^[A-Z]/g, lowerCase); //convert first char to lowercase
    return str;
}
  
/**
 * UPPERCASE first char of each word.
 */
const properCase = (str: string) => {
    return lowerCase(str).replace(/^\w|\s\w/g, upperCase);
}
  
/**
 * camelCase + UPPERCASE first char
 */
const pascalCase = (str: string) => {
    return camelCase(str).replace(/^[a-z]/, upperCase);
}
  
/**
 * UPPERCASE first char of each sentence and lowercase other chars.
 */
const sentenceCase = (str: string) => {
    // Replace first char of each sentence (new line or after '.\s+') to
    // UPPERCASE
    return lowerCase(str).replace(/(^\w)|\.\s+(\w)/gm, upperCase);
}

/**
 * Searches for a given substring
 */
const contains = (str: string, substring:string, fromIndex:number) => {
    return str.indexOf(substring, fromIndex) !== -1;
}
  
/**
 * Escape RegExp string chars.
 */
const escapeRegExp= (str:string) => {
    var ESCAPE_CHARS = /[\\.+*?\^$\[\](){}\/'#]/g;
    return str.replace(ESCAPE_CHARS, "\\$&");
}

const stripHtmlTags = (str: string) => {
    return str.replace(/<[^>]*>/g, "");
}

const removeNonASCII = (str: string) => {
    // Matches non-printable ASCII chars -
    // http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
    return str.replace(/[^\x20-\x7E]/g, "");
}

/**
 * Repeat string n times
 */
const repeat = (str: string, n: number) => {
    return new Array(n + 1).join(str);
}
