<template>
  <div>
    <van-nav-bar
      title="奖助学金申请"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="color: white;background: #20a1a1"
    />
    <van-cell-group>
      <van-cell title="奖种名称" :value="this.data1.grantName"/>
      <van-cell title="奖种金额" :value="this.data1.money+'元'"/>
      <van-cell title="是否困难生" :value="(this.data1.isDiff=='1')?'是':'否'"/>
      <van-cell title="奖种描述" :label="this.data1.grantDesc==''?'暂无':this.data1.grantDesc"/>
    </van-cell-group>
    <p class="title_tip" v-show="this.data1.isFamilyXX==1">完善家庭信息</p>
    <van-cell-group v-show="this.data1.isFamilyXX==1">
      <van-field
        v-model="data.params.familyNumber"
        required
        clearable
        label="家庭人数"
        placeholder="请输入家庭人数"
      />

      <van-field
        v-model="data.params.homeAddress"
        clearable
        label="家庭住址"
        placeholder="请输入家庭住址"
        required
      />
      <van-field
        v-model="data.params.postalCode"
        clearable
        label="邮政编码"
        placeholder="请输入邮政编码"
        required
      />
      <van-field
        v-model="data.params.avgMonth"
        clearable
        label="人均收入"
        placeholder="请输入人均收入"
        required
      />
      <van-field
        v-model="data.params.mainRevenue"
        clearable
        label="经济来源"
        placeholder="家庭主要经济来源"
        required
      />
      <van-field
        v-model="data.params.familyAccount"
        clearable
        label="户口类型"
        placeholder="户口类型"
        required
      />
    </van-cell-group>
      <p class="title_tip" v-show='this.data1.isStudyXX==1'>完善成绩信息</p>
    <van-cell-group v-show='this.data1.isStudyXX==1'>
      <van-field
        v-model="data.params.countClass"
        required
        clearable
        label="必修课数"
        placeholder="请输入必修课数"
      />
      <van-field
        v-model="data.params.best"
        required
        clearable
        label="优秀课数"
        placeholder="请输入优秀课数"
      />
      <van-field
        v-model="data.params.better"
        required
        clearable
        label="良好课数"
        placeholder="请输入良好课数"
      />
      <van-field
        v-model="data.params.medium"
        required
        clearable
        label="中等课数"
        placeholder="请输入中等课数"
      />
      <van-field
        v-model="data.params.flunk"
        required
        clearable
        label="不及格课数"
        placeholder="请输入不及格课数"
      />
      <van-field
        v-model="data.params.countStudent"
        required
        clearable
        label="专业人数"
        placeholder="专业人数"
      />
      <van-field
        v-model="data.params.ranking"
        required
        clearable
        label="专业排名"
        placeholder="专业排名"
      />
    </van-cell-group>
    <p class="title_tip">完善申请资料</p>
    <van-cell-group>
      <div style="display: flex;justify-content: space-around">
        <van-cell title="*是否参加公益活动"/>
        <van-switch v-model="benefitStatus" style="margin-right: 20px;margin-top: 7px;"/>
      </div>
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="data.params.prizeCase"
        label="该年获奖情况"
        type="textarea"
        placeholder="请输入本学年获奖情况，200字以内"
        rows="1"
        required
        autosize
      />
    </van-cell-group>
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
        <div style="display: flex;align-items: center;flex-wrap: wrap">
          <img v-for="item in photoList" :src="'http://47.93.99.203:8088/'+item" @click="showPhoto" alt="" style="width: 80px;height: 80px;margin-left: 20px;margin-bottom: 10px;margin-top: 10px;">
          <el-upload
            class="upload-demo"
            action="http://47.93.99.203:8088/file/upload"
            multiple
            :limit="5"
            :on-error="error"
            :show-file-list="false"
            :on-progress="progess"
            :on-exceed="exceed"
            :on-success="success">
            <van-icon name="photograph"
                      style="font-size: 40px;margin-left: 20px;border: 1px dashed #dcdee2;padding: 20px;margin-top: 10px;margin-bottom: 10px;"/>
            <!--<div slot="tip" class="el-upload__tip" style="margin-left: 20px;">只能上传jpg/png文件，且不超过500kb</div>-->
          </el-upload>
        </div>
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
        photoList:[],
        username: '',
        benefitStatus:false,
        password: '',
        data1: {
          money: '',
          grantName: '',
          isDiff: '',
          grantDesc: '',
          isFamilyXX:'',
          isStudyXX:''
        },
        data: {
          params: {
            userName: '',
            sessionId: '',
            orderId: '',
            grantId: '',
            benefitStatus: '',
            prizeCase: '',
            familyAccount: '',
            familyNumber: '',
            avgMonth: '',
            mainRevenue: '',
            homeAddress: '',
            postalCode: '',
            countClass: '',
            best: '',
            better: '',
            medium: '',
            flunk: '',
            countStudent: '',
            ranking: '',
            description: '',
            clUrl: '',
            bankCard: '',
          }
        },
      }
    },
    methods: {
//      上传文件的一些方法
      success(res){
        this.photoList.push(res.path[0]);
        this.data.params.clUrl = this.photoList.toString();
        this.$toast('上传成功')
      },
      showPhoto(){
          let arr = [];
          this.photoList.forEach(item=>{
              item = 'http://47.93.99.203:8088/'+item;
            arr.push(item)
          });
          this.$ImagePreview(arr);
      },
      exceed(res){
        console.log(res);
        this.$toast('仅限上传5张图片')
      },
      progess(){
        this.$toast('正在上传...')
      },
      error(error){
          if(error){
              this.$toast('文件上传失败')
          }
      },

      onClickLeft(){
        this.$router.push({path: '/Scholarship'});
      },
      btn_submit(){
        console.log(this.data.params);
        let _this = this;
        if(this.benefitStatus===true){
          this.data.params.benefitStatus = '是';
        }else {
          this.data.params.benefitStatus = '否';
        }
        console.log(this.data.params);
        this.$post(process.env.BASE_URL + 'ws/business/grants/startProcess', this.data).then(res => {
            console.log(res);
          if (res.object.resultCode === '0000') {
                this.$toast('申请成功');
                setTimeout(function () {
                  _this.$router.push({path: '/Scholarship'});
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
      this.data.params.grantId = this.$route.query.grantId;
      this.data1.money = this.$route.query.money;
      this.data1.grantName = this.$route.query.grantName;
      this.data1.isDiff = this.$route.query.isDiff;
      this.data1.grantDesc = this.$route.query.grantDesc;
      this.data1.isFamilyXX = this.$route.query.isFamilyXX;
      this.data1.isStudyXX = this.$route.query.isStudyXX;
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
