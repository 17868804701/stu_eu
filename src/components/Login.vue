<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
<template>
  <div>
    <van-nav-bar
      title="用户登录"
      style="color: white;background: #20a1a1"
    />
    <div class="login">
      <img src="../assets/login_icon.png" alt="">
    </div>
    <van-cell-group class="login_content">
      <van-field
        v-model="data.params.userName"
        required
        clearable
        label="用户名"
        icon="question"
        placeholder="请输入用户名"
        @click-icon="$toast('用户名为学号（工号）')"
      />

      <van-field
        v-model="data.params.password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <van-button size="normal" id="login_btn" @click="login">登录</van-button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        fileList:[],
        data: {
          params: {
            userName: '',
            password: ''
          }
        }
      }
    },
    methods: {
      login(){
        if (this.data.params.userName === '' || this.data.params.password === '') {
          this.$toast('用户名或密码不能为空');
        } else {
          let _this = this;
          this.$post(process.env.BASE_URL+'ws/business/login', this.data).then(res => {
            sessionStorage.setItem("userInfo", JSON.stringify(res.object));
            if (res.object.resultCode === '0000') {
              this.$toast('登录成功');
              setTimeout(function () {
                _this.$router.push({path: '/Index'});
              }, 1000)
            } else if (res.object.resultCode === '-9999') {
              this.$toast('用户名或密码错误');
            }
          })
        }
      }
    }
  }
</script>
<style>
  .login {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login_content {
    /*border: 1px solid #dcdee2;*/
    width: 90%;
    margin-left: 5%;
    border-radius: 10px;
  }

  #login_btn {
    width: 85%;
    margin-left: 7.5%;
    height: 45px;
    background: #20a1a1;
    margin-top: 30px;
    line-height: 45px;
    color: white;
  }
</style>
