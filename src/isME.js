/**
 * 检查当前设备是否移动端设备(mobile equipment, ME)
 * @param {string} userAgent 用户代理字符串
 */
function isME(userAgent) {
  const ua = userAgent || window.navigator.userAgent;
  const checkDevices = [
    'Android',
    'iPhone',
    'SymbianOS',
    'Windows Phone',
    'iPod',
  ];

  // Ignore VR device
  if (!/\sVR\s/g.test(ua)) {
    for (var i = 0, n = checkDevices.length; i < n; i++)
      if (ua.indexOf(checkDevices[i]) > 0) {
        return true;
      }
  }
  return false;
}

export default isME;
