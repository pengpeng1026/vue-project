<template>
  <div>
    <!-- 路径中传递了参数之后，所有的组件都可以通过this.$route.访问到当前路径对应的路由对象 -->
    <!-- parmas参数:{{$route.params.keyworld}}
    query参数:{{$route.query.keyworld2}} -->
    <TypeNav/>
  </div>
</template>

<script>
export default {
  name: 'Search',
}
</script>

<style scoped>

</style>
