/**
 * 创建一个限流函数 可用于防止高频触发事件(如 onscroll 事件)
 * @param {function} action 事件处理函数
 * @param {number} delay 延迟毫秒数
 */
function makeThrottle(action, delay) {
  var timeout = null;
  var lastRun = 0;
  return function () {
    if (timeout) {
      return;
    }
    var elapsed = Date.now() - lastRun;
    var context = this;
    var args = arguments;
    var runCallback = function runCallback() {
      lastRun = Date.now();
      timeout = false;
      action.apply(context, args);
    };
    if (elapsed >= delay) {
      runCallback();
    } else {
      timeout = setTimeout(runCallback, delay);
    }
  };
}

export default makeThrottle;
