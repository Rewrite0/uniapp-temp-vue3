<script setup>
import { onLaunch } from '@dcloudio/uni-app';
import { token } from '@/utils/request.js';

onLaunch(async () => {
  const { statusBarHeight } = uni.getSystemInfoSync();
  uni.setStorageSync('statusBarHeight', statusBarHeight);

  if (!token()) {
    uni.reLaunch({
      url: '/pages/login/login',
    });
  }
});
</script>

<style lang="scss">
/*每个页面公共css */
@import 'styles/style';
</style>
