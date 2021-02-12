/**
 * 设置浏览器 cookie
 * @param {{ [x: string]: any; }} map cookie map
 * @param {number} days expires days
 * @param {string} domain website domain
 * @param {string} path in path
 */
function writeCookie(map, days, domain, path) {
  const now = new Date();
  now.setTime(now.getTime() + (days || 30) * 24 * 60 * 60 * 1e3);
  for (const key in map) {
    document.cookie = `${key}=${
      map[key]
    }; expires=${now.toUTCString()}; domain=${
      domain || window.location.hostname
    }; path=${path || '/'}`;
  }
}

export default writeCookie;
