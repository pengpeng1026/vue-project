<template>
  <div>
    <Header/>
      <router-view/>
    <Footer v-show="!$route.meta.isHidden"/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  /* 此处的name作用，1，方便vue调试工具里面区分和搜索组件，2，使用路由组件保持活跃的标签keep-alive时指定组件名 3，全局注册组件的时候使用需要组件名 */
  name: 'App',
  components:{
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>