import Vue from 'vue'
import Router from 'vue-router';
import layout from '@/layout/layout.vue';
Vue.use(Router);
export const constantRouterMap = [
    {
        path: '/',
        component: layout,
    },
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
        }]
    },
];

export default new Router({
    base: "/ui/manager/",
    routes:constantRouterMap.concat(asyncRouterMap)
});
