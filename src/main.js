import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
// 全局注册TypeNav组件
import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav',TypeNav)
// 测试请求函数
import {reqCategoryList} from '@/api'
var date = reqCategoryList()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
