/**
 * @function escapeHtml
 * @description Escapes a string for insertion into HTML.
 * @param {string} str
 * @returns {string}
 */
 const escapeHtml = (str:string): string => {
    str = str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/'/g, "&#39;")
      .replace(/"/g, "&quot;");
    return str;
}
  
/**
 * @function unescapeHtml
 * @description Unescapes HTML special chars
 * @param {string} str
 * @returns {string}
 */
const unescapeHtml = (str: string):string => {
    str = str
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"');
    return str;
}