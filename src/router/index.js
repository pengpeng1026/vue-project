import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

// vue-router 3.1.0之后引入了promise语法，导致如果在路由转跳的时候传递的参数不便多次点击会报错
// Uncaught (in promise) NavigationDuplicated:，解决方案有三种，降级vue-router（不推荐），在每一个的push或者replace方法后面传递一个catch方法，也不推荐
// 重新定义push和replace方法，一劳永逸
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location,resolve,reject){
  if(resolve === undefined && reject === undefined){
    // 如果没有传递成功或者失败的回调的话，则指定一个捕获失败的回调
    return originPush.call(this,location).catch(() => {})
  }else{
    return originPush.call(this,location)
  }
}
VueRouter.prototype.replace = function(location,resolve,reject){
  if(resolve === undefined && reject === undefined){
    return originReplace.call(this,location,resolve,reject)
  }else{
    return originReplace.call(this,location)
  }
}

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/home',
      component:Home
    },
    {
      name:'search',
      path:'/search/:keyworld?', 
      component:Search
    },
    {
      path:'/login',
      component:Login,
      meta:{
        isHidden:true
      }
    },
    {
      path:'/register',
      component:Register,
      meta:{
        isHidden:true
      }
    },
    {
      path:'/',
      redirect:'/home'
    }
  ]
})