import Vue from 'vue'
import Router from 'vue-router';
Vue.use(Router);

const routes = [
    { path: '/',  component: () => import('@/demo.vue') },
]

export default new Router({
    routes
});
