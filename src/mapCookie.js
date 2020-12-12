/**
 * 获取 cookie 映射对象
 */
function mapCookie() {
  const cookies = document.cookie.trim().split(/=|;\s|;/);
  if (!cookies.length) return {};
  const len = cookies.length - (cookies.length & 1);
  const cookieMap = {};
  for (let i = 0; i < len; i += 2) {
    const key = cookies[i];
    const val = decodeURIComponent(cookies[i + 1]);
    cookieMap[key] = val;
  }
  return cookieMap;
}

export default mapCookie;
