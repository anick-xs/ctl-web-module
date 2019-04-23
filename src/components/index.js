import Vue from 'vue'
//搜索表单
Vue.component('search-form', () => import('./search-form/src'));
//弹窗表单
Vue.component('dialog-form', () => import('./dialog-form/src'));
//地区选择器
Vue.component('v-distpicker', () => import('./v-distpicker'))
