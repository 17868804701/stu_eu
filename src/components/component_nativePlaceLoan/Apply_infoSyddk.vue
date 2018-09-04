<template>
  <div>
    <van-nav-bar
      title="生源地贷款申请流程查看"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="color: white;background: #20a1a1"
    />
    <van-cell-group style="border-bottom: 8px solid #e8eaec">
      <van-cell :title="this.realname" value="" :label="this.operator" />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="所在分院" :value="this.fyName" />
      <van-cell title="所在专业" :value="this.zyName " />
      <van-cell title="所在班级" :value="this.className " />
      <van-cell title="所在社区" :value="this.shequName " />
      <van-cell title="是否困难生" :value="this.isDiff=='1'?'是':'否' " />
      <van-cell title="申请描述" :value="this.description" />
    </van-cell-group>
    <p class="title_tip">流程详情</p>
    <van-steps direction="vertical" :active="active" active-color="#20a1a1">
      <van-step v-for="item in liuChengList">
        <h3>{{item.displayName}}<span style="font-size: 12px;margin-left: 10px;">说明：{{item.description}}</span></h3>
        <p>{{item.finishTime}}</p>
      </van-step>
    </van-steps>
  </div>
</template>
<script>
  export default {
    name: 'ScholarshipManner',
    data () {
      return {
        active:0,
        realname:'',
        shequName:'',
        fyName:'',
        zyName:'',
        className:'',
        description:'',
        operator:'',
        liuChengList:'',
        liuChengListLength:0,
        isDiff:'',
        data:{
            params:{
              userName:'',
              sessionId:'',
              orderId:''
            }
        }
      }
    },
    methods: {
      onClickLeft(){
        this.$router.push({path: '/NativePlaceLoan'});
      },
      getInfo(){
        this.$post(process.env.BASE_URL + 'ws/business/syddk/applyViewQry', this.data).then(res => {
          console.log(res);
          if (res.resultCode === '0000') {
//            this.$toast('成功');
            this.realname = res.object.StartHisTask.realname;
            this.shequName = res.object.StartHisTask.shequName;
            this.zyName = res.object.StartHisTask.zyName;
            this.fyName = res.object.StartHisTask.fyName;
            this.className = res.object.StartHisTask.className;
            this.description =res.object.StartHisTask.description;
            this.isDiff =res.object.StartHisTask.isDiff;
            this.operator =res.object.StartHisTask.operator;

            this.liuChengList = res.object.hisTasks;
            this.active = res.object.hisTasks.length-1;
          } else {
            this.$toast('查询失败')
          }
        })
      }
    },
    mounted(){
      let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      this.data.params.userName = userInfo.userName;
      this.data.params.sessionId = userInfo.sessionId;
      this.data.params.orderId = this.$route.query.orderId;
      this.getInfo()
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
  .title_tip{
    font-size: 12px;
    padding-left: 15px;
    color: #686868;
    height: 30px;
    line-height: 30px;
    background: #e0e0e0;
  }
</style>
