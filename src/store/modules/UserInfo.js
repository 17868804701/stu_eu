/**
 * Created by Dell on 2018/8/29.
 */
const userInfo = {
  state: {
    userInfo: {},
  },
  mutations:{
    updateUserInfo(state, info) {
      state.userInfo = info;
    }
  }
};
export default userInfo;
