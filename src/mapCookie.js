/**
 * 获取 cookie 映射对象
 */
function mapCookie() {
  const parts = document.cookie.trim().split(/;\s?/);
  if (!parts.length) return {};
  const len = parts.length;
  const cookieMap = {};
  for (let i = 0; i < len; ++i) {
    const part = parts[i];
    const idx = part.indexOf('=');
    if (idx == -1) continue;
    const key = part.substring(0, idx);
    const val = decodeURIComponent(part.substring(idx + 1));
    cookieMap[key] = val;
  }
  return cookieMap;
}

export default mapCookie;
