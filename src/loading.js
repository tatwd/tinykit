/**
 * 加载效果的简单实现
 * @param {function} callback 回调函数
 * @param {object} option 配置项
 */
function loading(callback, option) {
  const el = option.el || document.body;
  const html = option.html || 'Loading...';
  const delay = option.delay || 500;
  const state = {
    target: el,
  };
  el.innerHTML = html;
  setTimeout(() => callback && callback(state), delay);
}

export default loading;
