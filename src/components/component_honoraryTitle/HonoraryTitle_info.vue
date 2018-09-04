<template>
    <div>
        <mt-header title="荣誉称号详情" class="header" fixed >
            <router-link to="/HonoraryTitle" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="title">
            <span>基本信息</span>
        </div>
        <div class="info">
            <div class="info_name">
                <img src="../../assets/logo.png" alt="" class="head" >
                <div style="height: 40px">
                    <span>黄森</span>
                    <span>14610801152313</span>
                </div>
            </div>
            <ul class="info_list">
                <li>
                    <span>所在分院</span>
                    <span>信息工程学院</span>
                </li>
                <li>
                    <span>所在专业</span>
                    <span>软件工程</span>
                </li>
                <li>
                    <span>所在班级</span>
                    <span>统本软件1401</span>
                </li>
                <li>
                    <span>所在社区</span>
                    <span>第一青年社区</span>
                </li>
                <li>
                    <span>荣誉名称</span>
                    <span>个人荣誉称号</span>
                </li>
                <li>
                    <span>申请描述</span>
                    <span>hhhhhhhhhhhhhhhhhhh</span>
                </li>
            </ul>
        </div>
        <div class="title" style="margin-top:190px">
            <span>附件列表</span>
        </div>
        <div class="fujian">
            <span>奖学金的证书复印件.png</span>
        </div>
        <div class="title" style="margin: 0">
            <span>流程详情</span>
        </div>
        <div class="process">
            <div class="process_item">
                <div class="line"></div>
                <div class="process_img">
                    <img src="../../assets/logo.png" alt="" style="width: 25px;height: 25px;z-index: 99">
                </div>
                <div class="process_info">
                    <div>
                        <span>学生申请</span>
                    </div>
                    <div>
                        <span class="color">已申请</span>
                        <span class="color">2018-10-10 10:10:22</span>
                    </div>
                    <div>
                        <span>申请测试</span>
                    </div>
                </div>
            </div>

            <div class="process_item">
                <div class="line"></div>
                <div class="process_img">
                    <img src="../../assets/logo.png" alt="" style="width: 25px;height: 25px;z-index: 99">
                </div>
                <div class="process_info">
                    <div>
                        <span>初级审核--张成</span>
                    </div>
                    <div>
                        <span class="color">已申请</span>
                        <span class="color">2018-10-10 10:10:22</span>
                    </div>
                    <div>
                        <span>申请测试</span>
                    </div>
                </div>
            </div>

            <div class="process_item">
                <div class="line"></div>
                <div class="process_img">
                    <img src="../../assets/logo.png" alt="" style="width: 25px;height: 25px;z-index: 99">
                </div>
                <div class="process_info">
                    <div>
                        <span>终极审核--管理员</span>
                    </div>
                    <div>
                        <span class="color">已申请</span>
                        <span class="color">2018-10-10 10:10:22</span>
                    </div>
                    <div>
                        <span>申请测试</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'index',
        data () {
            return {
                selected:"tab1",
                list:[1],
                sheetVisible:false,
            }
        },
        methods: {
            WitchMenu:function () {
                this.sheetVisible = !this.sheetVisible
            }
        },
        watch:{
        },
    }
</script>

<style>
    body {
        margin: 0;
    }
    .title{
        width: 100%;
        margin-top: 45px;
        /*border: 1px solid red;*/
        font-size: 12px;
        height: 30px;
        line-height: 30px;
        background: #f0f0f0;
    }
    .title span{
        margin-left: 15px;
    }
    .info{
        height: 60px;
        width: 100%;
        border-bottom: 1px solid #e0e0e0;
    }
    .head{
        height: 30px;
        width: 30px;
        margin-top: 15px;
        margin-left: 10px;
    }
    .info_name{
        display: flex;
    }
    .info_name div{
        display: flex;
        flex-direction: column;
        font-size: 13px;
        margin-top: 10px;
        margin-left: 10px;
        justify-content: space-between;
    }
    .info_list{
        padding:0px;
        width: 95%;
        margin-left: 2.5%;
    }
    .info_list li{
        list-style: none;
        height: 30px;
        line-height: 30px;
        width: 100%;
        /*border-bottom: 1px solid #e0e0e0;*/
    }
    .info_list li span:nth-child(1){
        font-size: 13px;
    }
    .info_list li span:nth-child(2){
        font-size: 13px;
        color: #686868;
        margin-left: 30px;
    }
    .process_img{
        width: 20%;
        text-align: center;
        z-index: 999;
    }
    .process_info{
        width: 70%;
        height: 90px;
        font-size: 13px;
        color: #686868;
        margin-top: 28px;
    }
    .process_info div{
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }
    .color{
        color: #20a1a1;
        font-weight: bold;
    }
    .process_item{
        height: 100px;
        border: 0px solid red;
        display: flex;
        align-items: center;
    }
    .line{
        width: 1px;
        height: 100px;
        border-left: 1px solid gainsboro;
        position: absolute;
        left: 10%;
    }
    .fujian{
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #e0e0e0;
    }
    .fujian span{
        font-size: 13px;
        margin-left: 20px;
        text-decoration: underline;
        color: blue;
    }
</style>
