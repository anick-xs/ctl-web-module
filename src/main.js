import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import '@/assets/styles/element-variables.scss'
import '@/assets/styles/index.scss'
import '@/components'
import config from '@/module/form/config'
// utils
import '@/utils' // global css
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
Vue.prototype.$config = config
