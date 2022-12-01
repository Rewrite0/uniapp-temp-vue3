import { MD5, SHA1, enc } from 'crypto-js';

function getNowTime() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  let second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
  let milliSeconds = date.getMilliseconds();
  if (month < 10) {
    month = '0' + month;
  }
  return `${year}${month}${day}${hour}${minute}${second}${milliSeconds}`;
}

/**
 * 签名加密
 * @param {object} e 加密的参数
 * @param {object} n 不加密的参数
 */
function sign(e, n) {
  const a = '301F2C324A74FFFC';
  const b = '38C1978BAD5E42B14A41AA24037323A2';
  let es = '';
  if (e) {
    for (let k in e) {
      es += e[k];
    }
  }
  const t = getNowTime();
  const f = MD5(t).toString().toUpperCase();
  const s = SHA1(b + es)
    .toString()
    .toUpperCase();
  const th = SHA1(a + f + s)
    .toString()
    .toUpperCase();
  const si = enc.Base64.stringify(enc.Utf8.parse(th));
  const ob = {
    timestamp: t,
    sign: si,
  };
  const ob1 = Object.assign(ob, e);
  const ob2 = Object.assign(ob1, n);
  return ob2;
}

export { sign };
