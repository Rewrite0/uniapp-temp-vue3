import config from '../config.js';

export default {
  data() {
    return {
      config,
      imgurl: config.imgurl,
      paging: {
        page: 1,
        get: true,
      },
    };
  },
  methods: {
    pageBack() {
      // 页面返回
      uni.navigateBack({ delta: 1 });
    },
    hideTabbar() {
      const pages = getCurrentPages();
      const route = pages[pages.length - 1].route;
      const tabPages = ['pages/index/index', 'pages/member/index'];
      // 判断当前是否为tab页面, 是则隐藏原生tabbar
      const has = tabPages.includes(route);
      if (has) uni.hideTabBar();
    },
  },
  mounted() {
    // 隐藏tabbar
    // this.hideTabbar();
  },
  onPageScroll() {},
};
