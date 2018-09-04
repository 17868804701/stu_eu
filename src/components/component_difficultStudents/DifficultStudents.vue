<template>
  <div>
    <van-nav-bar
      title="困难生申请记录"
      left-text="返回"
      right-text="申请"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      style="color: white;background: #20a1a1"
    />
    <van-list
      :finished="false"
      v-for="item in PKlist"
      @click.native="apply_info(item)"
    >
      <van-cell-group>
        <van-cell :title="item.realname+'的困难生申请'" :value="item.operate_time" :label="'已获金额:'+item.yhzMoney"/>
        <van-cell :value="item.state"/>
      </van-cell-group>
    </van-list>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        selected: "tab1",
        list: [1],
        PKlist: [],
        data: {
          params: {
            userName: '',
            sessionId: '',
            type: 'difficult'
          }
        },
      }
    },
    methods: {
      onClickLeft() {
        this.$router.push({path: '/Index'});
      },
      onClickRight(){
        this.$router.push({path: '/DifficultStudents_apply'});
      },
      apply_info(item){
        console.log(item.orderId);
        this.$router.push({path: '/Apply_infoDiffcult',query: {orderId:item.orderId}});
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
            this.PKlist = res.object.list
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
    },
    watch: {},
  }
</script>

<style>
  .van-nav-bar__text {
    color: white !important;
  }

  .van-nav-bar__arrow {
    color: white !important;
  }
</style>
