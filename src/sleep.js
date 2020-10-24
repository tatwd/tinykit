/**
 * 简单(粗糙)的 sleep 实现, 无法中断, 无法实现精确的 ms 级别间隔
 * @param {number} sec 毫秒数
 */
function sleep(sec) {
  // 高 CPU 占有
  // const start = Date.now();
  // while (Date.now() - start < sec * 1000) {}

  // Atomics.wait 在浏览器中是被禁止执行的
  // Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, sec * 1000);

  return new Promise((resolve) => setTimeout(resolve, sec * 1000));
}

export default sleep;
