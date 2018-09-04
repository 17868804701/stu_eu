<template>
  <div>
    <van-nav-bar
      title="困难生申请"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="color: white;background: #20a1a1"
    />
    <van-cell-group style="border-bottom: 8px solid #e8eaec;border-top: 10px solid #e8eaec">
      <van-cell :title="this.realname+'的困难生申请'" value=""/>
    </van-cell-group>
    <van-cell-group style="border-bottom: 8px solid #e8eaec">
      <van-field
        v-model="data.params.rjMoney"
        required
        clearable
        label="人均收入"
        placeholder="年人均收入"
      />
      <van-field
        v-model="data.params.tel"
        required
        clearable
        label="联系电话"
        placeholder="联系电话"
      />
    </van-cell-group>

    <van-cell-group>
      <van-cell title="一般困难条件" value="" label="根据真实情况选择，可多选"/>
    </van-cell-group>
    <van-checkbox-group v-model="result1" style="border-bottom: 8px solid #e8eaec;padding: 10px 0 10px 0">
      <van-checkbox
        v-for="(item, index) in list"
        :key="item.conditionName"
        :name="item.conditionName+'id='+item.id"
        style="zoom:85%;margin-left: 20px;"
      >
        <span style="font-size: 14px;margin-bottom: 5px;display: inline-block">{{ item.conditionName }}</span>
      </van-checkbox>
    </van-checkbox-group>

    <van-cell-group>
      <van-cell title="特殊困难条件" value="" label="根据真实情况选择，可多选"/>
    </van-cell-group>
    <van-checkbox-group v-model="result2" style="border-bottom: 8px solid #e8eaec;padding: 10px 0 10px 0">
      <van-checkbox
        v-for="(item, index) in list1"
        :key="item.conditionName"
        :name="item.conditionName+'id='+item.id"
        style="zoom:85%;margin-left: 20px;"
      >
        <span style="font-size: 14px;margin-bottom: 5px;display: inline-block">{{ item.conditionName }}</span>
      </van-checkbox>
    </van-checkbox-group>

    <van-cell-group>
      <van-field
        v-model="data.params.description"
        label="申请理由"
        type="textarea"
        placeholder="请输入本学年获奖情况，200字以内"
        rows="1"
        required
        autosize
      />
    </van-cell-group>

    <van-cell-group>
      <div>
        <van-cell title="上传资料（资料等拍照上传）"/>
        <van-uploader :after-read="onRead" style="padding: 10px 0 10px 0">
          <van-icon name="photograph"
                    style="font-size: 40px;margin-left: 20px;border: 1px dashed #dcdee2;padding: 20px;"/>
        </van-uploader>
      </div>
    </van-cell-group>

    <van-button size="small"
                style="width: 90%;height: 35px;background: #20a1a1;color: white;margin-left: 5%;margin-top: 10px;margin-bottom: 10px;"
                @click="tijiao">立即提交
    </van-button>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        checked: true,
        username: '',
        realname: '',
        list: [],
        list1: [],
        result1: [],
        result2: [],
        data: {
          params: {
            userName: '',
            sessionId: '',
          }
        },
        data1: {
          params: {
            userName: '',
            sessionId: '',
            orderId: '',
            knType: '',
            rjMoney: '',
            tel: '',
            description: '',
            clUrl: '',
            conditionId: '',
            conditionNum: '',
            conditionNum1: '',
            conditionNum2: '',
            conditionName: '',
          }
        },
        message: ''
      }
    },
    methods: {
      onClickLeft() {
        this.$router.push({path: '/DifficultStudents'});
      },
      onRead(file) {
        console.log(file)
      },
      getTJList(){
        this.$post(process.env.BASE_URL + 'ws/business/difficult/diffSelectQry', this.data).then(res => {
          console.log(res.object.condition1List);
          console.log(res.object.condition2List);
          if (res.resultCode === '0000') {
            this.list = res.object.condition1List;
            this.list1 = res.object.condition2List
          } else if (res.object.resultCode === '-9999') {

          }
        })
      },
      tijiao(){
        let ybId = [];
        let ybName = [];
        this.result1.forEach(item => {
          ybId.push(item.split('id=')[1]);
          ybName.push(item.split('id=')[0])
        });
        this.data.params.conditionNum1 = this.result1.length;
        let tsId = [];
        let tsNmae = [];
        this.result2.forEach(item => {
          tsId.push(item.split('id=')[1]);
          tsNmae.push(item.split('id=')[0])
        });
        this.data.params.conditionNum2 = this.result2.length;
        this.data.params.conditionNum = this.data.params.conditionNum1 + this.data.params.conditionNum2
        this.data.params.conditionId = ybId.concat(tsId).toString();
        this.data.params.conditionName = ybName.concat(tsNmae).toString();
        this.$post(process.env.BASE_URL + 'ws/business/difficult/startProcess', this.data).then(res => {
          console.log(res);
          if (res.resultCode === '0000') {
            if (res.object.resultCode === '-9999') {

            } else if (res.object.resultCode === '0001') {
              this.$toast("同一学年不可重复申请困难生")
            }
          }
        })
      }
    },
    mounted(){
      let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      this.data.params.userName = userInfo.userName;
      this.realname = userInfo.realname;
      this.data1.params.userName = userInfo.userName;
      this.data.params.sessionId = userInfo.sessionId;
      this.data1.params.sessionId = userInfo.sessionId;
      this.getTJList();
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
