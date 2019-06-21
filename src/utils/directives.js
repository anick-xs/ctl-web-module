import Vue from 'vue'
/**
 * 按钮权限指令
 * */
Vue.directive('resource', {
    inserted: function (el, data) {
        let resource = localStorage.getItem('resource')
        let buttons = JSON.parse(resource) || []
        if (!buttons.includes(el.id)) {
            el.remove()
        }
    }
})
