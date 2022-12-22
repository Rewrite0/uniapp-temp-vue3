<script setup>
import { onLaunch } from '@dcloudio/uni-app';

onLaunch(async () => {
  const { statusBarHeight } = uni.getSystemInfoSync();
  uni.setStorageSync('statusBarHeight', statusBarHeight);
});
</script>

<style lang="scss">
/*每个页面公共css */
@import 'styles/style';
</style>
