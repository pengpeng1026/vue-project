import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import '@/mock/mockServer'//让mockjs执行
import 'swiper/css/swiper.min.css'
// 全局注册TypeNav组件
import TypeNav from '@/components/TypeNav'
import MySwiper from '@/components/MySwiper'
Vue.component('TypeNav',TypeNav)
Vue.component('MySwiper',MySwiper)
// 测试请求函数
// import {reqCategoryList} from '@/api'
// var date = reqCategoryList()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
