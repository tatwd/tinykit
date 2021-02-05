/**
 * 创建一个延迟执行的处理函数
 * @param {function} callback 回调函数
 * @param {number} delay 延迟毫秒数, 可选, 默认值 `800`
 */
function makeDelayHandler(callback, delay) {
  delay = delay || 800;
  let lastTimestamp;
  let id;
  return function () {
    const nowTimestamp = Date.now();
    if (lastTimestamp && nowTimestamp - lastTimestamp <= delay) {
      // 在 delay 时间内的立即清除
      clearTimeout(id);
    }
    id = setTimeout(() => callback && callback.apply(null, arguments), delay);
    lastTimestamp = nowTimestamp;
  };
}

export default makeDelayHandler;
