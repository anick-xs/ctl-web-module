import Vue from 'vue'
//搜索表单
Vue.component('ctl-search-form', () => import('./search-form/src'));
//弹窗表单
Vue.component('ctl-dialog-form', () => import('./dialog-form/src'));
//表格
Vue.component('ctl-table-box', () => import('./table-box'));
//表格刷新icon
Vue.component('refresh-icon', () => import('./refresh-icon'));
//阿里视频点播-视频播放
Vue.component('play-video', () => import('./form-component/upload'));
