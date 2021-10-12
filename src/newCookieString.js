/**
 * 新建 cookie 字符串
 * @param {string} key cookie key, required
 * @param {any} val cookie value, required
 * @param {number} days expires days, default is 30 days
 * @param {string} domain website domain
 * @param {string} path in path, default is '/'
 */
function newCookieString(key, val, days, domain, path) {
  if (!key || !val) return null;

  const now = new Date();
  now.setTime(now.getTime() + (days || 30) * 24 * 60 * 60 * 1e3);

  let cookieStr = `${key}=${encodeURIComponent(
    val
  )}; expires=${now.toUTCString()}; path=${path || '/'}`;

  if (domain) {
    cookieStr += `; domain=${domain}`;
  }

  return cookieStr;
}

export default newCookieString;
