<template>
  <div>
    <van-nav-bar
      title="荣誉称号申请"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="color: white;background: #20a1a1"
    />
    <van-cell-group>
      <van-cell title="名称" :value="this.data1.clyName"/>
      <van-cell title="级别" :value="this.data1.clyLevel"/>
      <van-cell title="描述" :label="this.data1.clyDesc==''?'暂无':this.data1.clyDesc"/>
    </van-cell-group>
    <p class="title_tip">完善家庭信息</p>
    <van-cell-group>
      <van-field
        v-model="data.params.job"
        required
        clearable
        :blur="show"
        label="职务"
        placeholder="职务"
      />
    </van-cell-group>
    <van-field
      v-model="data.params.dept"
      clearable
      label="所属支部"
      placeholder="所属支部"
      required
    />
    <van-cell-group>
      <van-field
        v-model="data.params.grantRecord"
        label="获奖记录"
        type="textarea"
        placeholder="获奖记录，200字以内"
        rows="1"
        required
        autosize
      />
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="data.params.mainStory"
        label="主要事迹"
        type="textarea"
        placeholder="请输入个人事迹"
        rows="1"
        required
        autosize
      />
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="data.params.honDesc"
        label="申请描述"
        type="textarea"
        placeholder="请输入申请描述，200字以内"
        rows="1"
        required
        autosize
      />
    </van-cell-group>

    <van-cell-group>
      <div>
        <van-cell title="上传资料（资料等拍照上传）"/>
        <van-uploader :before-read="onRead" accept="image/gif, image/jpeg" multiple
                      action:="http://47.93.99.203:8088/file/upload">
          <van-icon name="photograph"
                    style="font-size: 40px;margin-left: 20px;border: 1px dashed #dcdee2;padding: 20px;"/>
        </van-uploader>
      </div>
    </van-cell-group>

    <van-button size="small"
                @click="btn_submit"
                style="width: 90%;height: 35px;background: #20a1a1;color: white;margin-left: 5%;margin-top: 10px;margin-bottom: 10px;">
      立即提交
    </van-button>
  </div>
</template>
<script>
  export default {
    name: 'index',
    data () {
      return {
        checked: true,
        username: '',
        benefitStatus: false,
        password: '',
        data1: {
          clyDesc: '',
          clyLevel: '',
          clyName: ''
        },
        data: {
          params: {
            userName: '',
            sessionId: '',
            job: '',
            dept: '',
            grantRecord: '',
            mainStory: '',
            honDesc: '',
            clUrl: "",
            clyId: ""
          }
        },
      }
    },
    methods: {
      onRead(file) {
        console.log(file)
      },
      onClickLeft(){
        this.$router.push({path: '/HonoraryTitle'});
      },
      show(){
        alert(11111111)
      },
      btn_submit(){
        let _this = this
        console.log(this.data.params);
        this.$post(process.env.BASE_URL + 'ws/business/honorary/startProcess', this.data).then(res => {
          console.log(res);
          if (res.object.resultCode === '0000') {
            this.$toast('申请成功');
            setTimeout(function () {
              _this.$router.push({path: '/HonoraryTitle'});
            }, 1000)
          } else if (res.object.resultCode === '-9999') {
            this.$toast('申请失败')
          }
        })
      }
    }
    ,
    mounted(){
      console.log(this.$route.query);
      let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      this.data.params.userName = userInfo.userName;
      this.data.params.sessionId = userInfo.sessionId;
      this.data.params.clyId = this.$route.query.clyId;
      this.data1.clyName = this.$route.query.clyName;
      this.data1.clyLevel = this.$route.query.clyLevel;
      this.data1.clyDesc = this.$route.query.clyDesc;
      console.log(this.data);
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
