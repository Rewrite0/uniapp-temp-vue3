/**
 * 节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
function throttle(func, wait, type) {
  let previous;
  if (type === 1) {
    previous = 0;
  } else if (type === 2) {
    let timeout;
  }
  return function () {
    let context = this;
    let args = arguments;
    if (type === 1) {
      let now = Date.now();
      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    } else if (type === 2) {
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          func.apply(context, args);
        }, wait);
      }
    }
  };
}

/**
 * 临时图片路径转base64
 * @param {string} url 临时图片路径
 * @returns promise
 */
function tempImageToBase64(url) {
  return new Promise((resolve, reject) => {
    uni.getFileSystemManager().readFile({
      filePath: url, //选择图片返回的相对路径
      encoding: 'base64', //编码格式
      success: (res) => {
        const base64 = `data:image/png;base64,${res.data}base64`;
        resolve(base64);
      },
      fail: (res) => reject(res.errMsg),
    });
  });
}

export { throttle, tempImageToBase64 };
