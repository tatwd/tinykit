/**
 * 创建一个计时器
 * @param {function} handle 注册回调事件
 * @param {number} ms 间隔毫秒数
 */
function makeTimer(handle, ms = 1000) {
  const reset = () => {
    timer.elapsed = 0;
    clearInterval(id);
  };

  const run = () => {
    setInterval(() => {
      timer.elapsed += ms;
      handle && handle();
    }, ms);

    timer.state = 'running';
  };

  return {
    /**
     * 计时器状态
     */
    state: 'ready',

    /**
     * 计时器运行毫秒数
     */
    elapsed: 0,

    /**
     * 启动计时器
     * @param {boolean} force 是否强制启动计时器
     */
    start(force = false) {
      if (
        force == true ||
        timer.state === 'ready' ||
        timer.state === 'stopped'
      ) {
        // reset elapsed value
        // means start a new timer
        reset();
        run();
      }
    },

    /**
     * 停止(暂停)计时器
     */
    stop() {
      if (timer.state === 'running') {
        clearInterval(id);
        timer.state = 'stopped';
      }
    },

    /**
     * 重新启动计时器
     */
    resume() {
      if (timer.state === 'stopped') run();
    },
  };
}

export default makeTimer;
