/**
 * 判断 DOM 元素是否进入可视窗口
 * @param {HTMLElement} el HTML DOM 元素
 * @param {number} preload 预加载配置 默认 1.3
 */
function isVisible(el, preload) {
  // const offsetTopVal = el.offsetTop;
  // return window.scrollY + window.innerHeight > offsetTopVal;

  preload = preload || 1.3;
  var rect = el.getBoundingClientRect();
  return (
    rect.top < window.innerHeight * preload &&
    rect.bottom > 0 &&
    rect.left < window.innerWidth * preload &&
    rect.right > 0
  );
}

export default isVisible;
