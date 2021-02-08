/**
 * 创建一个简单的原生 AJAX 对象
 */
function makeAjax() {
  let xhr;

  if (typeof XMLHttpRequest !== 'undefined') {
    xhr = new XMLHttpRequest();
  } else {
    const versions = [
      'MSXML2.XmlHttp.6.0',
      'MSXML2.XmlHttp.5.0',
      'MSXML2.XmlHttp.4.0',
      'MSXML2.XmlHttp.3.0',
      'MSXML2.XmlHttp.2.0',
      'Microsoft.XmlHttp',
    ];

    for (let i = 0; i < versions.length; i++) {
      try {
        xhr = new ActiveXObject(versions[i]);
        break;
      } catch (e) {}
    }
  }

  return {
    /**
     * 当前 XHR 实例
     */
    xhr,

    /**
     * 发送异步请求
     * @param {string} url 请求地址
     * @param {Function} handle 回调函数
     * @param {string} method 请求方法, 默认 `GET`
     * @param {object} headers 请求头设置对象
     * @param {string} data 发送的数据
     * @param {boolean} async 是否启用异步请求, 默认 `true`
     */
    send(url, handle, method, headers, data, async) {
      if (!xhr) return console.warn('`xhr` is invalid!');

      xhr.open(method || 'GET', url, async || true);

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          handle && handle(xhr.responseText, xhr);
        }
      };

      xhr.onabort = function () {
        console.warn('Request has been canceled!');
      };

      for (var key in headers) {
        if (headers.hasOwnProperty(key)) {
          xhr.setRequestHeader(key, headers[key]);
        }
      }

      xhr.send(data);
    },

    cancel() {
      if (xhr.readyState > 0 && xhr.readyState < 4) {
        xhr.abort();
      }
    },
  };
}

export default makeAjax;
