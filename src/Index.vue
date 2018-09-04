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
      title="奖学金申请"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      style="color: white;background: #20a1a1"
    />
    <van-list
      :finished="false"
      @load="onLoad"
      style="border: 1px solid #e0e0e0;width: 98%;margin-left: 1%;margin-top: 10px;border-radius: 10px;"
    >
      <van-cell-group>
        <van-cell title="国家励志俭学金" value="暂未开放" label="开放时间：2018-10-10"/>
        <van-cell value="说明：本次奖学金只限困难生申请"/>
        <van-button type="primary" plain size="small" style="float: right;top:-40px;right:10px">立即申请</van-button>
      </van-cell-group>
    </van-list>

    <!--<van-checkbox-group v-model="result">-->
      <!--<van-cell-group-->
        <!--v-for="(item,index) in list"-->
        <!--style="border-bottom: 1px solid #e0e0e0"-->
      <!--&gt;-->
        <!--<van-checkbox :name="item" ref="checkboxes" style="display: inline-block;margin-top: 55px;position: absolute"/>-->
        <!--<div style="margin-left: 20px;">-->
          <!--<van-cell title="国家励志俭学金" value="暂未开放" label="开放时间：2018-10-10"/>-->
          <!--<van-cell value="说明：本次奖学金只限困难生申请"/>-->
          <!--<van-button type="primary" plain size="small" style="float: right;top:-40px;right:10px">立即申请</van-button>-->
        <!--</div>-->
      <!--</van-cell-group>-->
    <!--</van-checkbox-group>-->


  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: ['a', 'b', 'c'],
        loading: false,
        result: [],
        finished: false
      };
    },

    methods: {
      onLoad() {

      },
      toggle(index) {
        this.$refs.checkboxes[index].toggle();
      },
      onClickLeft() {
      },
      onClickRight() {
      }
    }
  }
</script>
