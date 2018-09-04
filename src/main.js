// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';

import { ImagePreview } from 'vant';
Vue.prototype.$ImagePreview=ImagePreview;



import 'element-ui/lib/theme-chalk/index.css';
import {Upload} from 'element-ui';
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';

import store from './store'

Vue.use(Vant);
Vue.use(Upload);
// Vue.use(iView);
Vue.config.productionTip = false



// 网络请求
import {post,fetch,patch,put,formatDate_hs} from './http';
Vue.prototype.$post=post;
Vue.prototype.$fetch=fetch;
Vue.prototype.$patch=patch;
Vue.prototype.$put=put;
Vue.prototype.$fmt=formatDate_hs;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  beforeCreate: function () {
    console.group('beforeCreate 创建前状态===============》');
  },
  created: function () {
    console.group('created 创建完毕状态===============》');
  },
  beforeMount: function () {
    console.group('beforeMount 挂载前状态===============》');
  },
  mounted: function () {
    console.group('mounted 挂载结束状态===============》');
  },
  beforeUpdate: function () {
    console.group('beforeUpdate 更新前状态===============》');
  },
  updated: function () {
    console.group('updated 更新完成状态===============》');
  },
  beforeDestroy: function () {
    console.group('beforeDestroy 销毁前状态===============》');
  },
  destroyed: function () {
    console.group('destroyed 销毁完成状态===============》');
  },
});
