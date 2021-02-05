/**
 * 获取对应名称的 cookie 值
 * @param {string} key 名称
 */
function readCookie(key) {
  const RE = new RegExp(`${key}=([^;]*);?`);
  const matched = RE.exec(document.cookie);
  return matched ? decodeURIComponent(matched[1]) : undefined;
}

export default readCookie;
