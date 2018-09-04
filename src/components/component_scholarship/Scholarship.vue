<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .van-nav-bar__text {
    color: white !important;
  }

  .van-cell__label {
    width: 100%;
  }

  .van-nav-bar__arrow {
    color: white !important;
  }

  .van-cell__value--alone {
    overflow: hidden;
    display: flex;
  }
</style>
<template>
  <div class="container">
    <van-nav-bar
      title="奖学金申请"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="color: white;background: #20a1a1"
    />

    <van-cell-group v-for="item in JZlist">
      <van-cell :title="item.grantName" :value="item.money+'元'" :label="'开放时间:'+item.startTime"/>
      <van-cell :value="'不可兼得：'+item.noJdGrantName"/>
        <van-button :disabled="item.isShow" @click="apply(item)" type="primary" plain size="small" style="float: right;top:65px;right:10px;position: absolute">
          立即申请
        </van-button>
    </van-cell-group>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        data: {
          params: {
            userName: '',
            sessionId: ''
          }
        },
        loading: false,
        result: [],
        JZlist: [],
        finished: false
      };
    },

    methods: {
      onClickLeft() {
        this.$router.push({path: '/Index'});
      },
      apply(item){
        console.log(item.grantName);
        this.$router.push({path: '/ApplyCholarshipInfo',query: {grantId: item.grantId,
          isDiff:item.isDiff,
          money:item.money,
          grantName:item.grantName,
          grantDesc:item.grantDesc,
          isFamilyXX:item.isFamilyXX,
          isStudyXX:item.isStudyXX,
          }
        });
      },
      getList(){
        this.$post(process.env.BASE_URL + 'ws/business/grants/grantClassifyList', this.data).then(res => {
          console.log(res);
          if (res.resultCode === '0000') {
            res.object.list.forEach(item => {
              if (item.startTime < new Date() && item.endTime > new Date()) {
                item.isShow = false
              } else {
                item.isShow = true
              }
              if (item.startTime === undefined) {
                item.startTime = ''
              } else {
                item.startTime = this.$fmt(item.startTime).substring(0, 10)
                item.endtTime = this.$fmt(item.endTime).substring(0, 10)
              }
            });
            this.JZlist = res.object.list
          } else if (res.object.resultCode === '-9999') {

          }
        })
      }
    },
    mounted(){
      let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      this.data.params.userName = userInfo.userName
      this.data.params.sessionId = userInfo.sessionId
      this.getList()
    }
  }
</script>
