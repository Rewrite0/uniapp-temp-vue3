/**
 * 防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);

      if (callNow) func.apply(context, args);
    } else {
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    }
  };
}

/**
 * 节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，2 表定时器版
 */
function throttle(func, wait, type) {
  let previous, timeout;
  if (type === 1) {
    previous = 0;
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
      encoding: "base64", //编码格式
      success: (res) => {
        const base64 = `data:image/png;base64,${res.data}base64`;
        resolve(base64);
      },
      fail: (res) => reject(res.errMsg),
    });
  });
}

/**
 * 深层对比两个对象是否相等
 * @param {object} object1 obj1
 * @param {object} object2 obj2
 */
function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  const isObject = (object) => {
    return object != null && typeof object === "object";
  };

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let index = 0; index < keys1.length; index++) {
    const val1 = object1[keys1[index]];
    const val2 = object2[keys2[index]];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }

  return true;
}

/**
 * 数组差异更新, 仅数组元素为对象时使用
 * @description 通过diffkey获取两数组对应的元素, 当两者不相等时更新旧数组元素
 * @param {array} oldArr oldArr
 * @param {array} newArr newArr
 * @param {string} diffKey diffkey
 * @returns {array} 更新后的array
 */
function arrayDiffUpdate(oldArr, newArr, diffKey = "") {
  newArr.map((e) => {
    const id = e[diffKey];
    const thisObj = oldArr.filter((e) => e[diffKey] === id);

    if (thisObj.length !== 0) {
      if (!deepEqual(thisObj[0], e)) {
        const index = oldArr.findIndex((e) => e[diffKey] === id);
        oldArr = oldArr.filter((e) => e[diffKey] !== id);
        oldArr.splice(index, 0, e);
      }
    } else {
      oldArr.push(e);
    }
  });

  return oldArr;
}

/**
 * 判断object是否为空
 * @param {object} obj obj
 */
function objIsNull(obj) {
  return Object.keys(obj).length !== 0;
}

export {
  debounce,
  throttle,
  tempImageToBase64,
  deepEqual,
  arrayDiffUpdate,
  objIsNull,
};
