import config from '@/config.js';

/**
 * api请求
 * @param {object} options
 * @param {string} options.url api url
 * @param {object} options.data api data
 * @param {string} options.method api method
 */
const request = async ({ url, data, method }) => {
  const apiUrl = config.baseurl + url;
  try {
    if (method === 'post') {
      const res = await uni.request({
        url: apiUrl,
        data,
        header: {
          'content-type': 'application/x-www-form-urlencoded',
        },
        method: 'POST',
      });

      return res.data;
    } else {
      const res = await uni.request({
        url: apiUrl,
        data,
        method: 'GET',
      });

      return res.data;
    }
  } catch (error) {
    console.log('====================================');
    console.log(apiUrl, 'error:', error);
    console.log('====================================');
    uni.showModal({
      title: '网络请求错误',
      showCancel: false,
    });
    return error;
  }
};

const token = () => {
  return uni.getStorageSync('token') || null;
};

export { request, token };
