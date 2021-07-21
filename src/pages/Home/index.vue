<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor v-for="floor in floorList" :key="floor.id" :floor="floor"/>
    <Brand/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
export default {
  name: 'Home',
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  mounted(){
    this.getFloorList()
  },
  methods:{
    getFloorList(){
      // 这里获取到一个数组，数组里面两个对象，分别对应的是两个楼层的数据，考虑到需要传递给floor组件中，因此在home组件中遍历该数据传递给floor组件
      this.$store.dispatch('getFloorList')
    }
  },
  computed:{
    ...mapState({
      floorList:state => state.home.floorList
    })
  }
}
</script>

<style scoped>

</style>
