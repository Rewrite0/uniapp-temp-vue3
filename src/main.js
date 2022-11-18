import { createSSRApp } from 'vue';
import App from './App.vue';
import pageShare from './mixins/share.js';
import globalConfig from './mixins/global.js';
import * as Pinia from 'pinia';

export function createApp() {
  const app = createSSRApp(App);

  app.use(Pinia.createPinia());

  app.mixin(pageShare);
  app.mixin(globalConfig);

  return {
    app,
    Pinia,
  };
}
