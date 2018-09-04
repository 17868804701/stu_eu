<template>
  <div>
    <van-nav-bar
      title="荣誉称号申请历史"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="color: white;background: #20a1a1"
    />
    <van-list
      @click.native="apply_info(item)"
      :finished="false"
      v-for="item in Rychlist"
    >
      <van-cell-group>
        <van-cell :title="item.clyName+'('+item.clyLevel+')'" :value="item.state" :label="'申请时间：'+item.operate_time"/>
        <van-cell :value="'描述:'+item.honDesc"/>
      </van-cell-group>
    </van-list>
  </div>
</template>
<script>
  export default {
    name: 'ScholarshipManner',
    data () {
      return {
        active:'待审批',
        selected: "1",
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        Rychlist:[],
        data: {
          params: {
            userName: '',
            sessionId: '',
            type: 'honorary'
          }
        },
      }
    },
    methods: {
      onClickLeft(){
        this.$router.push({path: '/HonoraryTitle'});
      },
      apply_info(item){
        console.log(item.orderId);
        this.$router.push({path: '/Apply_Rychinfo',query: {orderId:item.orderId}});
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
            this.Rychlist = res.object.list
          } else if (res.object.resultCode === '-9999') {

          }
        })
      }
    },
    mounted(){
      let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      this.data.params.userName = userInfo.userName
      this.data.params.sessionId = userInfo.sessionId
      console.log(11111)
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
