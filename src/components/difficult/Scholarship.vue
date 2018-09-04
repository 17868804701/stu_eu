<template>
    <div>
        <mt-header title="奖助学金审批" class="header" fixed>
            <router-link to="/ToExamine" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <mt-navbar v-model="selected" style="margin-top: 45px;border-bottom: 1px solid #e0e0e0">
            <mt-tab-item id="1">待审批</mt-tab-item>
            <mt-tab-item id="2">已结束</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <ul class="list">
                    <router-link to="/Scholarship_info" slot="left">
                        <li class="list_item" style="height: 80px;display: flex;flex-direction: row">
                            <div style="width: 10%">
                                <img src="../../assets/logo.png" alt="" style="width: 30px;height: 30px;margin-top: 25px;">
                            </div>
                            <div class="item_info" style="width: 85%;margin-top: 10px;display: flex;flex-direction: column;height: 60px">
                                <div>
                                    <span style="color: #333">国家励志奖学金</span>
                                    <span>2017-10-10</span>
                                </div>
                                <div>
                                    <span>创建时间：2017-10-10 23:09:22</span>
                                </div>
                                <div>
                                    <span style="color: #20a1a1;font-weight: bold">待审核</span>
                                </div>
                            </div>
                        </li>
                    </router-link>
                    <li class="list_item" style="height: 80px;display: flex;flex-direction: row">
                        <div style="width: 10%">
                            <img src="../../assets/logo.png" alt="" style="width: 30px;height: 30px;margin-top:25px;">
                        </div>
                        <div class="item_info" style="width: 85%;margin-top: 10px;display: flex;flex-direction: column;height: 60px">
                            <div>
                                <span style="color: #333">国家励志奖学金</span>
                                <span>2017-10-10</span>
                            </div>
                            <div>
                                <span>创建时间：2017-10-10 23:09:22</span>
                            </div>
                            <div>
                                <span style="color: #20a1a1;font-weight: bold">待审核</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <ul class="list">
                    <li class="list_item" style="height: 80px;display: flex;flex-direction: row">
                        <div style="width: 10%">
                            <img src="../../assets/logo.png" alt="" style="width: 30px;height: 30px;margin-top: 25px;">
                        </div>
                        <div class="item_info" style="width: 85%;margin-top: 10px;display: flex;flex-direction: column;height: 60px">
                            <div>
                                <span style="color: #333">国家励志奖学金</span>
                                <span>2017-10-10</span>
                            </div>
                            <div>
                                <span>创建时间：2017-10-10 23:09:22</span>
                            </div>
                            <div>
                                <span style="color: #20a1a1;font-weight: bold">审核通过</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
    export default {
        name: 'ScholarshipManner',
        data () {
            return {
                selected: "1",
                list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            }
        },
        methods: {},
        watch: {},
    }
</script>

<style>
    body {
        margin: 0;
    }

    .list {
        margin: 0;
    }
</style>
