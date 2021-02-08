/**
 * 获取 IE 浏览器的版本 如果不是则返回 undefined
 */
function getIEVersion() {
  let version = undefined;
  if ('Microsoft Internet Explorer' == window.navigator.appName) {
    const ua = window.navigator.userAgent;
    null != new RegExp('MSIE ([0-9]{1,}[.0-9]{0,})').exec(ua) &&
      (version = parseFloat(RegExp.$1));
  }
  return version;
}

export default getIEVersion;
