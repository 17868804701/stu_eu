<template>
  <div>
    <van-nav-bar
      title="荣誉称号申请流程查看"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="color: white;background: #20a1a1"
    />
    <van-cell-group style="border-bottom: 8px solid #e8eaec">
      <van-cell :title="this.operatorName" value="" :label="this.operator" />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="所在分院" :value="this.fyName" />
      <van-cell title="所在专业" :value="this.zyName " />
      <van-cell title="所在班级" :value="this.className " />
      <van-cell title="所在社区" :value="this.shequName " />
      <van-cell title="申请描述" :value="this.honDesc" />
    </van-cell-group>
    <p class="title_tip">流程详情</p>
    <van-steps direction="vertical" :active="active" active-color="#20a1a1">
      <van-step v-for="item in liuChengList">
        <h3>{{item.displayName}}<span style="font-size: 12px;margin-left: 10px;">说明：{{item.honDesc}}</span></h3>
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
        operatorName:'',
        shequName:'',
        fyName:'',
        zyName:'',
        className:'',
        honDesc:'',
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
        this.$router.push({path: '/RychList'});
      },
      getInfo(){
        this.$post(process.env.BASE_URL + 'ws/business/honorary/ApplyViewQry', this.data).then(res => {
          console.log(res);
          if (res.resultCode === '0000') {
//            this.$toast('成功');
            this.operatorName = res.object.StartHisTask.operatorName;
            this.honDesc =res.object.StartHisTask.honDesc;
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

      this.shequName = userInfo.shequName;
      this.zyName = userInfo.zyName;
      this.fyName = userInfo.fyName;
      this.className = userInfo.className;
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
