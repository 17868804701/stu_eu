<template>
  <div>
    <van-nav-bar
      title="生源地贷款资格认定申请"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="color: white;background: #20a1a1"
    />
    <van-cell-group style="border-bottom: 8px solid #e8eaec;border-top: 10px solid #e8eaec">
      <van-cell :title="this.realname+'的生源地贷款申请'" value=""/>
    </van-cell-group>
    <van-cell-group style="border-bottom: 8px solid #e8eaec">
      <van-field
        v-model="data.params.sqmoney"
        required
        clearable
        label="申请金额"
        placeholder="申请金额1000-8000之间"
      />
      <van-field
        v-model="data.params.schooling"
        required
        clearable
        label="学费+住宿费"
        placeholder="请输入学费和住宿费的总额"
      />
      <van-field
        v-model="data.params.operTel"
        required
        clearable
        label="联系电话"
        placeholder="联系电话"
      />
    </van-cell-group>
    <van-cell-group>
      <div style="display: flex;justify-content: space-around">
        <van-cell title="*是否续贷"/>
        <van-switch v-model="isxudai" style="margin-right: 20px;top:5px"/>
      </div>
    </van-cell-group>
    <p class="title_tip">完善共同借款人信息</p>
    <van-cell-group style="border-bottom: 8px solid #e8eaec">
      <van-field
        v-model="data.params.gtjkrxm"
        required
        clearable
        label="姓名"
        placeholder="请输入共同借款人姓名"
      />
      <van-field
        v-model="data.params.gtjkrTel"
        required
        clearable
        label="联系电话"
        placeholder="请输入共同借款人联系电话"
      />
    </van-cell-group>
    <van-cell-group>
      <van-cell title="申请原因" value="" label="根据真实情况选择，可多选"/>
    </van-cell-group>
    <van-checkbox-group v-model="sqyy" style="border-bottom: 8px solid #e8eaec;padding: 10px 0 10px 0">
      <van-checkbox
        v-for="(item, index) in list"
        :key="item"
        :name="item"
        style="zoom:85%;margin-left: 20px;"
      >
        <span style="font-size: 14px;margin-bottom: 5px;display: inline-block">{{ item }}</span>
      </van-checkbox>
    </van-checkbox-group>

    <van-cell-group>
      <van-field
        v-model="data.params.description"
        label="申请理由"
        type="textarea"
        placeholder="申请描述，200字以内"
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
                @click="apply_btn">立即提交
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
        sqyy: [],
        isxudai: false,
        list: ['因病致残', '因灾致困', '劳动力少，无稳定收入', '其他'],
        result: [],
        result1: [],
        message: '',
        data: {
          params: {
            userName: '',
            sessionId: '',
            orderId: '',
            description: '',
            clUrl: '',
            operTel: '',
            gtjkrxm: '',
            gtjkrTel: '',
            sqmoney: '',
            schooling: '',
            isxudai: '',
            sqyy: [],
          }
        }
      }
    },
    methods: {
      onClickLeft() {
        this.$router.push({path: '/NativePlaceLoan'});
      },
      onRead(file) {
        console.log(file)
      },
      apply_btn(){
        let _this = this;
        if (this.isxudai === true) {
          this.data.params.isxudai = '是'
        } else {
          this.data.params.isxudai = '否'
        }
        this.data.params.sqyy = this.sqyy.toString()
        console.log(this.data.params);
        this.$post(process.env.BASE_URL + 'ws/business/syddk/startProcess', this.data).then(res => {
          console.log(res);
          if (res.object.resultCode === '0000') {
            this.$toast('申请成功');
            setTimeout(function () {
              _this.$router.push({path: '/Scholarship'});
            }, 1000)
          } else if (res.object.resultCode === '-9999') {
            this.$toast('申请失败')
          } else if (res.object.resultCode === '0001') {
            this.$toast('同一学年不可重复申请生源地贷款')
          }
        })
      }
    },
    watch: {},
    mounted(){
      let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      this.data.params.userName = userInfo.userName;
      this.realname = userInfo.realname;
      this.data.params.sessionId = userInfo.sessionId;
    }
  }
</script>

<style>
  .van-nav-bar__text {
    color: white !important;
  }

  .van-nav-bar__arrow {
    color: white !important;
  }

  .title_tip {
    font-size: 12px;
    padding-left: 15px;
    color: #686868;
    height: 30px;
    line-height: 30px;
    background: #e0e0e0;
  }
</style>
