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
      statusBarHeight: 0,
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

    exemptClass(exempt) {
      if (exempt == '有效' || exempt == '已延期') {
        return 'tag-primary';
      } else if (exempt == '即将到期') {
        return 'tag-warning';
      } else if (exempt == '已过期') {
        return 'tag-error';
      }
    },
  },
  mounted() {
    this.statusBarHeight = uni.getStorageSync('statusBarHeight');
    // 隐藏tabbar
    // this.hideTabbar();
  },
  onPageScroll() {},
};
