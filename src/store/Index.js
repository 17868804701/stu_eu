/**
 * Created by Dell on 2018/8/29.
 */
import Vue from 'vue';
import vuex from 'vuex';
Vue.use(vuex);


import User from './modules/UserInfo'
export default new vuex.Store({
  modules: {
      UserInfo:User
  }
})
