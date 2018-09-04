<template>
    <div>
      <van-nav-bar
        title="审核"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        style="color: white;background: #20a1a1"
      />
      <van-cell-group>
        <van-cell title="奖助学金审核" is-link @click="click_list('grant')"/>
        <van-cell title="困难生审核" is-link @click="click_list('difficult')"/>
        <van-cell title="生源地贷款审核" is-link @click="click_list('syddk')"/>
        <van-cell title="荣誉称号审核" is-link @click="click_list('honorary')"/>
      </van-cell-group>
    </div>
</template>
<script>
    export default {
        name: 'index',
        data () {
            return {
            }
        },
        methods: {
          onClickLeft(){
            this.$router.push({path: '/Index'});
          },
          click_list(params){
              console.log(params);
            this.$router.push({path: '/ShenHeList',query:{type:params}});
          }
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
