<template>
    <div>
        <mt-header title="荣誉称号申请" class="header" fixed >
            <router-link to="/HonoraryTitle" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="title" style="margin-top: 45px;">
            <span>申请信息</span>
        </div>
        <div>
            <mt-cell title="批次">
                <span @click="WitchMenu()" style="color: #686868;font-size: 13px;">选择批次></span>
            </mt-cell>
            <mt-actionsheet
                    :actions="actions"
                    v-model="sheetVisible"
                    cancelText="取消"
            ></mt-actionsheet>
            <mt-cell title="荣誉称号名称">
                <span @click="WitchMenu()" style="color: #686868;font-size: 13px;">选择荣誉称号名称></span>
            </mt-cell>
            <mt-cell title="荣誉称号类型">
                <span @click="WitchMenu()" style="color: #686868;font-size: 13px;">选择荣誉称号类型></span>
            </mt-cell>
        </div>
        <div class="title" style="margin: 0">
            <span>申请填写资料</span>
        </div>
        <div>
            <div class="title" style="background: white;margin-top: 0">
                <span>请填写资料</span>
            </div>
            <mt-field placeholder="输入申请原因" type="textarea" rows="4" v-modal="introduction"
                      class="textArea"></mt-field>
            <div class="title" style="background: white;margin-top: 0">
                <span>添加资料</span>
            </div>
            <img src="../../assets/img/upload.png" alt="" class="upload_icon">
            <mt-field type="file" v-modal="introduction" class="file"></mt-field>
            <mt-button type="primary" class="submit">提交</mt-button>
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
