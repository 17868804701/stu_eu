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
      title="荣誉称号"
      left-text="返回"
      right-text="查看历史"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      style="color: white;background: #20a1a1"
    />

    <van-cell-group v-for="item in JZlist">
      <van-cell :title="item.clyName+'('+item.clyLevel+')'" :value="item.clyType" :label="'开始事件:'+item.startTime"/>
      <van-cell :value="'描述：'+item.clyDesc"/>
      <van-button  @click="apply(item)" type="primary" plain size="small" style="float: right;top:60px;right:10px;position: absolute">
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
      onClickRight(){
        this.$router.push({path: '/RychList'});
      },
      apply(item){
        console.log(item);
        this.$router.push({path: '/Apply_Rych',query: {
          clyName: item.clyName,
          clyId: item.clyId,
          clyLevel: item.clyLevel,
          clyDesc: item.clyDesc,
        }
        });
      },
      getList(){
        this.$post(process.env.BASE_URL + 'ws/business/honorary/classifyQry', this.data).then(res => {
          console.log(res);
          if (res.resultCode === '0000') {
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
