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
      :title="this.type+'审核列表'"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="color: white;background: #20a1a1"
    />
    <div v-show="this.data.params.type=='grant'">
        <van-cell-group v-for="item in SHlist" @click.native="SP(item,'grant')">
          <van-cell :title="item.grantName" :value="'申请人：'+item.realname" :label="'申请时间:'+item.operate_time"/>
          <van-cell :value="'描述：'+item.description"/>
        </van-cell-group>
    </div>
    <div v-show="this.data.params.type=='syddk'">
      <van-cell-group v-for="item in SHlist" @click.native="SP(item,'syddk')">
        <van-cell :title="item.realname+'的生源地贷款申请'" :value="item.njName+'级'" :label="'申请时间:'+item.operate_time"/>
        <van-cell :value="'描述：'+item.description"/>
      </van-cell-group>
    </div>
    <div v-show="this.data.params.type=='honorary'">
      <van-cell-group v-for="item in SHlist" @click.native="SP(item,'honorary')">
        <van-cell :title="item.clyName" :value="'级别：'+item.clyLevel" :label="'申请时间:'+item.createTime"/>
        <van-cell :value="'描述：'+item.honDesc"/>
      </van-cell-group>
    </div>

    <div v-show="this.data.params.type=='difficult'">
      <van-cell-group v-for="item in SHlist">
        <van-cell :title="item.realname+'的困难生申请'" value="" :label="'申请时间:'+item.createTime"/>
        <van-cell :value="'描述：'+item.description"/>
      </van-cell-group>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        type: '',
        data: {
          params: {
            userName: '',
            sessionId: '',
            type: ''
          }
        },
        SHlist: [],
      };
    },

    methods: {
      onClickLeft() {
        this.$router.push({path: '/ToExamine'});
      },
      apply(item){
        console.log(item.grantName);
        this.$router.push({path: '/ApplyCholarshipInfo', query: {}});
      },
      getList(){
        this.$post(process.env.BASE_URL + 'ws/business/common/homeTaskList', this.data).then(res => {
          console.log(res);
          if (res.resultCode === '0000') {
            this.SHlist = res.object.list
          } else if (res.object.resultCode === '-9999') {

          }
        })
      },
      SP(item,type){
        this.$router.push({path: '/ShenPi',query:{type:type,item:item}});
      }
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
      this.data.params.type = this.$route.query.type;
      let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      this.data.params.userName = userInfo.userName;
      this.data.params.sessionId = userInfo.sessionId;
      this.getList()
    }
  }
</script>
