import Vue from 'vue'
import VueRouter from 'vue-router'

import test from '../Index.vue'
import Login from '../components/Login.vue'
import Scholarship from '../components/component_scholarship/Scholarship.vue'  //奖学金
import DifficultStudents from '../components/component_difficultStudents/DifficultStudents.vue'  //困难生
import DifficultStudents_process from '../components/component_difficultStudents/DifficultStudents_process.vue'  //困难生流程查看
import DifficultStudents_apply from '../components/component_difficultStudents/DifficultStudents_apply.vue'  //困难生申请
import HonoraryTitle from '../components/component_honoraryTitle/HonoraryTitle.vue'  //荣誉称号
import HonoraryTitle_info from '../components/component_honoraryTitle/HonoraryTitle_info.vue'  //荣誉称号申请流程查看
import HonoraryTitle_apply from '../components/component_honoraryTitle/HonoraryTitle_apply.vue'  //荣誉称号申请页面
import NativePlaceLoan from '../components/component_nativePlaceLoan/NativePlaceLoan.vue' //生源地贷款
import NativePlaceLoan_process from '../components/component_nativePlaceLoan/NativePlaceLoan_process.vue' //生源地贷款
import NativePlaceLoan_apply from '../components/component_nativePlaceLoan/NativePlaceLoan_apply.vue' //生源地贷款
import ApplyCholarshipInfo from '../components/component_scholarship/Apply_cholarship_info.vue' //奖助学金申请
import ScholarshipManner from '../components/component_scholarship/ScholarshipManner.vue' //奖助学金申请查看
import Apply_info from '../components/component_scholarship/Apply_info.vue' //奖助学金申请查看
import Index from '../components/component_index/Index.vue'  //主页
import ToExamine from '../components/component_ToExamine/ToExamine.vue'  //教师审批模块
import Scholarships from '../components/difficult/Scholarship.vue'  //奖学金审批模块
import Scholarship_info from '../components/difficult/Scholarship_info.vue'  //奖学金审批详情
import Apply_infoDiffcult from '../components/component_difficultStudents/Apply_infoDiffcult.vue'  //困难生申请详情
import Apply_infoSyddk from '../components/component_nativePlaceLoan/Apply_infoSyddk.vue'  //生源地贷款申请详情
import Apply_Rych from '../components/component_honoraryTitle/Apply_Rych.vue'  //荣誉称号申请
import RychList from '../components/component_honoraryTitle/RychList.vue'  //荣誉称号申请历史列表
import Apply_Rychinfo from '../components/component_honoraryTitle/Apply_Rychinfo.vue'  //荣誉称号详情
import ShenHeList from '../components/component_ToExamine/ShenHeList.vue'  //审核list
import ShenPi from '../components/component_ToExamine/ShenPi.vue'  //审核list

Vue.use(VueRouter);

const route = [
  {
    path: '/test',
    name: 'test',
    component: test
  },  {
    path: '/Apply_infoDiffcult',
    name: 'Apply_infoDiffcult',
    component: Apply_infoDiffcult
  },   {
    path: '/ShenHeList',
    name: 'ShenHeList',
    component: ShenHeList
  },   {
    path: '/ShenPi',
    name: 'ShenPi',
    component: ShenPi
  },   {
    path: '/RychList',
    name: 'RychList',
    component: RychList
  },    {
    path: '/Apply_Rychinfo',
    name: 'Apply_Rychinfo',
    component: Apply_Rychinfo
  },   {
    path: '/Apply_Rych',
    name: 'Apply_Rych',
    component: Apply_Rych
  },  {
    path: '/Apply_infoSyddk',
    name: 'Apply_infoSyddk',
    component: Apply_infoSyddk
  }, {
    path: '/Index',
    name: 'Index',
    component: Index
  }, {
    path: '/',
    name: 'Login',
    component: Login
  }
  ,
  {
    path: '/Scholarship',
    name: 'Scholarship',
    component: Scholarship
  },
  {
    path: '/DifficultStudents',                   // 奖学金
    name: 'DifficultStudents',
    component: DifficultStudents
  },
  {
    path: '/HonoraryTitle',                   // 奖学金
    name: 'HonoraryTitle',
    component: HonoraryTitle
  },
  {
    path: '/NativePlaceLoan',                   // 奖学金
    name: 'NativePlaceLoan',
    component: NativePlaceLoan
  },
  {
    path: '/ApplyCholarshipInfo',                   // 奖学金
    name: 'ApplyCholarshipInfo',
    component: ApplyCholarshipInfo
  },
  {
    path: '/ScholarshipManner',                   // 奖学金
    name: 'ScholarshipManner',
    component: ScholarshipManner
  },
  {
    path: '/Apply_info',                   // 奖学金
    name: 'Apply_info',
    component: Apply_info
  },
  {
    path: '/HonoraryTitle_info',                   // 奖学金
    name: 'HonoraryTitle_info',
    component: HonoraryTitle_info
  },
  {
    path: '/HonoraryTitle_apply',                   // 奖学金
    name: 'HonoraryTitle_apply',
    component: HonoraryTitle_apply
  },
  {
    path: '/DifficultStudents_process',                   // 奖学金
    name: 'DifficultStudents_process',
    component: DifficultStudents_process
  },
  {
    path: '/NativePlaceLoan_process',                   // 奖学金
    name: 'NativePlaceLoan_process',
    component: NativePlaceLoan_process
  },
  {
    path: '/DifficultStudents_apply',                   // 奖学金
    name: 'DifficultStudents_apply',
    component: DifficultStudents_apply
  },
  {
    path: '/NativePlaceLoan_apply',                   // 奖学金
    name: 'NativePlaceLoan_apply',
    component: NativePlaceLoan_apply
  },
  {
    path: '/ToExamine',                   // 奖学金
    name: 'ToExamine',
    component: ToExamine
  },
  {
    path: '/Scholarships',                   // 奖学金
    name: 'Scholarships',
    component: Scholarships
  },
  {
    path: '/Scholarship_info',                   // 奖学金
    name: 'Scholarship_info',
    component: Scholarship_info
  }
];

const router = new VueRouter({routes: route});
router.beforeEach((to, from, next) => {
  next()
});

export default router;
