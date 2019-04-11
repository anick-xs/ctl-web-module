import Vue from 'vue'
import App from './App.vue'
import router from './router';
import ElementUI from 'element-ui'
import '@/assets/styles/element-variables.scss'
import '@/assets/styles/index.scss' // global css
Vue.use(ElementUI);
Vue.config.productionTip = false;
import '@/components'
// utils
import '@/utils'
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
