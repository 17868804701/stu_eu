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
      :title="this.type+'审批'"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="color: white;background: #20a1a1"
    />
    <van-cell-group>
      <van-cell title="选择审批状态" value="" label="根据真实情况选择"/>
    </van-cell-group>
    <van-radio-group v-model="data.params.result">
      <van-radio name="agree" style="zoom:85%;margin-left: 20px;margin-bottom: 10px;">同意</van-radio>
      <van-radio name="disagree" style="zoom:85%;margin-left: 20px;margin-bottom: 10px;">不同意</van-radio>
      <van-radio name="toApply" style="zoom:85%;margin-left: 20px;margin-bottom: 10px;">驳回</van-radio>
    </van-radio-group>
    <van-cell-group>
      <van-field
        v-model="data.params.suggest"
        label="审批意见"
        type="textarea"
        placeholder="请输入审批意见，200字以内"
        rows="1"
        autosize
      />
    </van-cell-group>
    <van-button size="small"
                @click="shenpi"
                style="width: 90%;height: 35px;background: #20a1a1;color: white;margin-left: 5%;margin-top: 10px;margin-bottom: 10px;">
      立即提交
    </van-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        type: '',
        isAgree:true,
        data1:{
          type:''
        },
        data: {
          params: {
            userName: '',
            sessionId: '',
            orderId: '',
            result:'',
            suggest:''
          }
        },
        SHlist: [],
      };
    },

    methods: {
      onClickLeft() {
        this.$router.push({path: '/ShenHeList',query:{type:this.data1.type}});
      },
      shenpi(){
          console.log(this.data.params);
          let _this = this
        this.$post(process.env.BASE_URL + 'ws/business/common/approve', this.data).then(res => {
          console.log(res);
          if (res.object.resultCode === '0000') {
            this.$toast('审批成功');
            setTimeout(function () {
              _this.$router.push({path: '/ShenHeList',query:{type:_this.data1.type}});
            }, 1000)
          } else if (res.object.resultCode === '-9999') {
            this.$toast('审批失败')
          }
        })
      },
    },
    mounted(){
      console.log(this.$route.query.type);
      if(this.$route.query.type==='honorary'){
        this.type='荣誉称号'
      }else if(this.$route.query.type==='syddk'){
        this.type='生源地贷款'
      }else if(this.$route.query.type==='difficult'){
        this.type='困难生'
      }else if(this.$route.query.type==='grant'){
        this.type='奖学金'
      }
      this.data1.type = this.$route.query.type;
      let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      this.data.params.userName = userInfo.userName;
      this.data.params.sessionId = userInfo.sessionId;
      this.data.params.orderId = this.$route.query.item.orderId;
    }
  }
</script>
