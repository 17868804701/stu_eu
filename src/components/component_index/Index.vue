<template>
  <div>
    <van-nav-bar
      title="学生服务大厅"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      style="color: white;background: #20a1a1"
    />
    <div style="height: 180px;margin-bottom: 5px;">
      <img src="../../assets/2.jpg" alt="" style="width: 100%;height: 180px;position: absolute">
      <div style="position: absolute;color: white;font-size: 12px;margin-top: 140px;margin-left: 10px;">
          <span>{{realname}}</span>  <br><span style="color: #909090">西安欧亚学院</span>
      </div>
    </div>
    <van-notice-bar
      text="欢迎来到腾讯微校服务大厅"
      left-icon=""
    />
    <div class="content">
      <div class="menu">
        <router-link to="/Scholarship">
          <img src="../../assets/img/jxjsq.png" alt="">
        </router-link>
        <router-link to="/Scholarship">
          <span>奖助学金申请</span>
        </router-link>
      </div>


      <div class="menu">
        <router-link to="/ScholarshipManner">
          <img src="../../assets/img/manger.png" alt="">
        </router-link>
        <router-link to="/ScholarshipManner">
          <span>奖助学金管理</span>
        </router-link>
      </div>


      <div class="menu">
        <router-link to="/DifficultStudents">
          <img src="../../assets/img/kns.png" alt="">
        </router-link>
        <span>困难生</span>
      </div>

      <div class="menu">
        <router-link to="/NativePlaceLoan">
          <img src="../../assets/img/syddk.png" alt="">
        </router-link>
        <router-link to="/NativePlaceLoan">
          <span>生源地贷款</span>
        </router-link>
      </div>


      <div class="menu">
        <router-link to="/HonoraryTitle">
          <img src="../../assets/img/rych.png" alt="">
        </router-link>
        <router-link to="/HonoraryTitle">
          <span>荣誉称号</span>
        </router-link>
      </div>

      <div class="menu">
        <router-link to="/ToExamine">
          <img src="../../assets/img/sh.png" alt="">
        </router-link>
        <router-link to="/ToExamine">
          <span>审核</span>
        </router-link>
      </div>
      <div class="none menu"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'index',
    data () {
      return {
        selected: "tab1",
        realname:'',
        screenWidth: document.body.clientWidth
      }
    },
    methods: {
      onClickLeft() {
      },
      onClickRight() {
      }
    },
    mounted(){
      let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      console.log(userInfo.realname)
      this.realname = userInfo.realname
    }
  }
</script>

<style>
  .content {
    width: 100%;
    height: 360px;
    border: 0px solid red;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 5px;
  }

  .none {
    border: 1px solid white !important;
  }

  .content .menu {
    width: 31%;
    height: 31%;
    border: 1px dashed #e0e0e0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /*box-shadow: 0px 0px 1px #e0e0e0;*/
  }

  .content div img {
    width: 40px;
    height: 40px;
  }

  .content div span {
    font-size: 13px;
    display: inline-block;
    text-decoration: none !important;
    color: #333;
    margin-top: 10px;
  }
  .van-nav-bar__text {
    color: white !important;
  }

  .van-nav-bar__arrow {
    color: white !important;
  }
</style>
