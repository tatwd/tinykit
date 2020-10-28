/**
 * 加载效果的简单实现
 * @param {function} callback 回调函数
 * @param {object} option 配置项
 */
function loading(callback, option) {
  const {
    el = document.body,
    html = '<i>Loading ...</i>',
    delay = 500,
  } = option;
  const state = {
    target: el,
    render(html) {
      el.innerHTML = html;
    },
  };
  el.innerHTML = html;
  setTimeout(() => callback && callback(state), delay);
}

export default loading;
