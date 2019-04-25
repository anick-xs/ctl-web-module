import Vue from 'vue'
import Router from 'vue-router';
import layout from '@/layout/layout.vue';
Vue.use(Router);
export const constantRouterMap = [
    {
        path: '/',
        component: layout,
    },
    // {
    //     path: '/docs',
    //     component: () => import("../docs/.vuepress/dist/")
    // },
];

export const asyncRouterMap = [
    {
        path: '/demo',
        name: 'demo',
        meta: { title: '测试样例'},
        component: layout,
        children: [{
            path:'form',
            name:'form',
            meta: { title: '表单'},
            component: () => import('@/module/form/index.vue')
        },{
            path:'table',
            name:'table',
            meta: { title: '表格'},
            component: () => import('@/module/table/index.vue')
        }]
    },
];

export default new Router({
    base: "/ui/module/",
    mode: 'history',
    routes:constantRouterMap.concat(asyncRouterMap)
});
