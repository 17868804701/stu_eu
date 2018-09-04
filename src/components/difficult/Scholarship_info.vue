<template>
    <div>
        <mt-header title="奖助学金审批" class="header" fixed>
            <router-link to="/Scholarships" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="title">
            <span>奖种信息</span>
        </div>
        <ul class="list" style="margin: 0">
            <li v-for="item in list">
                <div>
                    <span class="name">国家励志奖学金</span>
                    <span>可兼得</span>
                </div>
                <div>
                    <span>金额：5000</span>
                    <span>限困难生</span>
                </div>
                <div>
                    <span>描述:</span>
                </div>
            </li>
        </ul>
        <div class="title" style="margin: 0">
            <span>家庭信息</span>
        </div>
        <div>
            <mt-cell title="家庭人数">
                <span @click="WitchMenu()" style="color: #686868;font-size: 13px;">5人</span>
            </mt-cell>
            <mt-actionsheet
                    :actions="actions"
                    v-model="sheetVisible"
                    cancelText="取消"
            ></mt-actionsheet>
            <mt-field label="家庭住址" placeholder="陕西汉中" v-model="username" value="陕西汉中"></mt-field>
            <mt-field label="邮政编码" placeholder="723000" v-model="username" value="723000"></mt-field>
            <mt-cell title="人均收入">
                <span @click="WitchMenu()" style="color: #686868;font-size: 13px;">1000元</span>
            </mt-cell>
            <mt-cell title="家庭主要收入来源">
                <span @click="WitchMenu()" style="color: #686868;font-size: 13px;">务农</span>
            </mt-cell>
            <mt-cell title="户口类型">
                <span @click="WitchMenu()" style="color: #686868;font-size: 13px;">农村</span>
            </mt-cell>
        </div>
        <div class="title" style="margin: 0">
            <span>申请填写资料</span>
        </div>
        <div>
            <mt-cell title="是否参加公益活动">
                <span @click="WitchMenu()" style="color: #686868;font-size: 13px;">是</span>
            </mt-cell>
            <div class="title" style="background: white;margin-top: 0">
                <span>本学年获奖情况</span>
            </div>
            <div class="title" style="background: white;margin-top: 0">
                <span>java比赛一等奖，国赛特等奖</span> <br>
                <span>java比赛一等奖，国赛特等奖</span> <br>
                <span>java比赛一等奖，国赛特等奖</span>
            </div>
            <div class="title" style="background: white;margin-top: 60px;">
                <span>审批意见</span>
            </div>
            <mt-field placeholder="请输入审批意见" type="textarea" rows="4" v-modal="introduction"
                      class="textArea"></mt-field>
            <mt-button type="primary" class="submit" style="margin-top: 20px">同意</mt-button>
            <mt-button type="primary" class="submit" style="background: red">驳回</mt-button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'index',
        data () {
            return {
                selected: "tab1",
                list: [1],
                sheetVisible: false,
                actions: [
                    {
                        name: '1人',
                        method: ''
                    }, {
                        name: '2人',
                        method: ''
                    }
                ]
            }
        },
        methods: {
            WitchMenu: function () {
                this.sheetVisible = !this.sheetVisible
            }
        },
        watch: {},
    }
</script>

<style>
    body {
        margin: 0;
    }

    .list li {
        list-style: none;
        width: 100%;
        height: 85px;
        /*border-bottom: 1px solid #e0e0e0;*/
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .list li div {
        width: 95%;
        margin-left: 2.5%;
        display: flex;
        justify-content: space-between;
    }

    .list li div span {
        font-size: 13px;
        color: #f9f9f9;
    }

    .title {
        width: 100%;
        margin-top: 45px;
        /*border: 1px solid red;*/
        font-size: 12px;
        height: 30px;
        line-height: 30px;
        background: #f0f0f0;
    }

    .title span {
        margin-left: 15px;
    }

    .list li {
        list-style: none;
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .list li div {
        width: 95%;
        margin-left: 2.5%;
        display: flex;
        justify-content: space-between;
    }

    .mint-cell {
        min-height: 40px !important;
    }

    .list li div span {
        font-size: 13px;
        color: #686868;
    }

    .textArea {
        border: 1px solid #20a1a1;
        width: 95%;
        margin-left: 2.5%;
        border-radius: 5px;
    }

    .mint-actionsheet-listitem, .mint-actionsheet-button, .mint-cell-text, .mint-field-core {
        font-size: 13px;
    }

    .upload_icon {
        position: absolute;
        width: 60px;
        border: 1px dashed #e0e0e0;
        padding: 13px;
        margin-left: 10px;
    }

    .file {
        opacity: 0;
        border: 1px solid red;
        width: 100px;
        height: 100px;
    }

    .submit {
        width: 95%;
        margin-left: 2.5%;
        font-size: 14px;
        margin-bottom: 10px;
        background: #20a1a1;
    }
</style>
