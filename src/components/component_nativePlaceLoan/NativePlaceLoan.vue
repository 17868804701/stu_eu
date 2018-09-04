<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .van-nav-bar__text {
    color: white !important;
  }

  .van-nav-bar__arrow {
    color: white !important;
  }
</style>
<template>
  <div class="container">
    <van-nav-bar
      title="生源地贷款申请"
      left-text="返回"
      right-text="申请"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      style="color: white;background: #20a1a1"
    />
    <van-list
      :finished="false"
      v-for="item in SYDlist"
      @click.native="apply_info(item)"
    >
      <van-cell-group>
        <van-cell :title="item.realname+'的生源地贷款的申请'" :value="item.state" :label="'申请时间:'+item.operate_time"/>
        <van-cell :value="'申请描述：'+item.description"/>
      </van-cell-group>
    </van-list>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loading: false,
        result: [],
        finished: false,
        SYDlist:[],
        data: {
          params: {
            userName: '',
            sessionId: '',
            type: 'syddk'
          }
        },
      };
    },

    methods: {
      onClickLeft() {
        this.$router.push({path: '/Index'});
      },
      onClickRight(){
        this.$router.push({path: '/NativePlaceLoan_apply'});
      },
      apply_info(item){
        console.log(item.orderId);
        this.$router.push({path: '/Apply_infoSyddk',query: {orderId:item.orderId}});
      },
      getList(){
        this.$post(process.env.BASE_URL + 'ws/business/common/studentSQList', this.data).then(res => {
          console.log(res);
          if (res.resultCode === '0000') {
            res.object.list.forEach(item=>{
              if(item.state==='start'){
                item.state = '待审核'
              }else if(item.state==='1'){
                item.state = '审核中...'
              }else if(item.state==='2'){
                item.state = '不同意'
              }else if(item.state==='end'){
                item.state = '审核通过'
              }else if(item.state==='-1'){
                item.state = '审核被驳回'
              }
            });
            this.SYDlist = res.object.list
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
