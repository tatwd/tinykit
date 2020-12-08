/**
 * 判断 DOM 元素是否进入可视窗口
 * @param {HTMLElement} el HTML DOM 元素
 */
function isVisible(el) {
  const offsetTopVal = el.offsetTop;
  return window.scrollY + window.innerHeight > offsetTopVal;
}

export default isVisible;
