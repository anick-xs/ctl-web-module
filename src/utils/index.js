import Vue from 'vue'

// 校验方法
import rules from './rules/validation'
// 引入公共方法
import publicFun from './public'

import './directives.js'

// 注册方法
Vue.use(rules)
Vue.use(publicFun)
