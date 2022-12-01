<script setup>
import { onLaunch } from '@dcloudio/uni-app';
import { token } from '@/utils/request.js';
import { getProvince, getYears } from '@/api';

onLaunch(async () => {
  const { statusBarHeight } = uni.getSystemInfoSync();
  uni.setStorageSync('statusBarHeight', statusBarHeight);

  if (!token()) {
    uni.reLaunch({
      url: '/pages/login/login',
    });
  } else {
    const provinceData = await getProvince();
    const yearsData = await getYears();

    console.log('onLaunch', provinceData);

    if (provinceData.code == 400) {
      uni.clearStorageSync('province');
      uni.clearStorageSync('years');
      uni.clearStorageSync('token');
      uni.reLaunch({
        url: '/pages/login/login',
      });
    } else {
      uni.setStorageSync('province', provinceData.data);
      uni.setStorageSync('years', yearsData.data);
    }
  }
});
</script>

<style lang="scss">
/*每个页面公共css */
@import 'styles/style';
</style>
