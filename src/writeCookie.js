import newCookieString from './newCookieString';

/**
 * 设置浏览器 cookie
 * @param {{ [x: string]: any; }} map cookie map
 * @param {number} days expires days, default is 30 days
 * @param {string} domain website domain
 * @param {string} path in path
 */
function writeCookie(map, days, domain, path) {
  for (const key in map) {
    document.cookie = newCookieString(key, map[key], days, domain, path);
  }
}

export default writeCookie;
