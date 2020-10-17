/**
 * 创建一个计时器
 * @param {function} handle 注册回调事件
 * @param {number} ms 间隔毫秒数
 */
function makeTimer(handle, ms = 1000) {
  let id = 0,
    // 计时器状态
    state = 'ready',
    // 计时器运行毫秒数
    elapsed = 0;

  const reset = () => {
    elapsed = 0;
    clearInterval(id);
  };

  const run = () => {
    id = setInterval(() => {
      elapsed += ms;
      handle && handle();
    }, ms);

    state = 'running';
  };

  /**
   * 启动计时器
   * @param {boolean} force 是否强制启动计时
   */
  const start = (force = false) => {
    if (force == true || state === 'ready' || state === 'stopped') {
      // reset elapsed value
      // means start a new timer
      reset();
      run();
    }
  };

  /**
   * 停止(暂停)计时器
   */
  const stop = () => {
    if (state === 'running') {
      clearInterval(id);
      state = 'stopped';
    }
  };

  /**
   * 重新启动计时器
   */
  const resume = () => {
    if (state === 'stopped') run();
  };

  return { state, elapsed, start, stop, resume };
}

export default makeTimer;
