/**
 * 获取对应名称的 cookie 值
 * @param {string} key 名称
 * @param {string} cookie cookie 字符串
 */
function readCookie(key, cookie) {
  const RE = new RegExp(`${key}=([^;]*);?`);
  const matched = RE.exec(cookie || document.cookie);
  return matched ? decodeURIComponent(matched[1]) : undefined;
}

export default readCookie;
