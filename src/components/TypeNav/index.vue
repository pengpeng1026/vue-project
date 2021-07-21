<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="itemOut" @mouseenter="isShow = true">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="isShow">
          <!--  -->
          <div class="all-sort-list2" @click="toSearch">
            <!-- 点击三级分类列表要跳往search页面，这里如果使用路由链接则每个链接都会在内存中生成一个组件，性能很差
          所有使用编程式路由导航，但是编程式路由导航每次也要重新生成一个函数，性能也只优化了一点，所以考虑到事件委派 -->
            <div
              class="item"
              v-for="(c1, index) in catogoryList"
              :key="c1.categoryId"
              :class="{ item_on: currentIndex === index }"
              @mouseenter="itemIn(index)"
            >
              <h3>
                <a
                  href="javascript:;"
                  :data-category1Id="c1.categoryId"
                  :data-categoryName="c1.categoryName"
                  >{{ c1.categoryName }}</a
                >
                <!-- <a href="">{{c1.categoryName}}</a> -->
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl
                    class="fore"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dt>
                      <a
                        href="javascript:;"
                        :data-category2Id="c2.categoryId"
                        :data-categoryName="c2.categoryName"
                        >{{ c2.categoryName }}</a
                      >
                      <!-- <a href="">{{c2.categoryName}}</a> -->
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a
                          href="javascript:;"
                          :data-category3Id="c3.categoryId"
                          :data-categoryName="c3.categoryName"
                          >{{ c3.categoryName }}</a
                        >
                        <!-- <a href="">{{c3.categoryName}}</a> -->
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          </div>
        </transition>
        
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import throttle from 'lodash/throttle'//Ladash的按需引入
// import _ from 'lodash' lodash的全部引入
export default {
  name: "TypeNav",
  data(){
    return {
      currentIndex:-1,
      isShow:true
    }
  },
  mounted(){
    // 在typeNav组件中发送请求的话，后续组件切换，就会来回的请求，这样效率太低，鉴于这种i情况可以考虑将请求的方法放到App组件中
    // this.getCatogoryList()
    if(this.$route.path == '/search'){
      this.isShow = false
    }
  },
  computed:{
    ...mapState({
      catogoryList:(state) => {
        return state.home.catogoryList
      },
    })
  },
  methods:{
    /* getCatogoryList(){
      this.$store.dispatch('getCatogoryList')
    } , */
    /* itemIn(index){
      this.currentIndex = index
      // console.log(index); 快速的移入，每次计算都会耗费性能，需要节流
    } */
    // itemIn:function(index){
    //   this.currentIndex = index
    // },
    itemIn:throttle(function(index){
      this.currentIndex = index
      // console.log(index);
    },20,{leading:true}),
    itemOut(){
      this.currentIndex = -1
      if(this.$route.path == '/search'){
        this.isShow = false
      }
    },
    // 当点击一级或者二级菜单进入商品页后，然后输入关键字搜索商品，此时应将query参数和params参数合并，同理在搜索页点击三级菜单也应该合并参数
    toSearch(event){
      // console.log(event);
      const category = event.target.dataset
      // console.log(category);
      const {category1id,category2id,category3id,categoryname} = category
      // 有categoryname就是a标签
      if(categoryname){
        const location = {
          name:'search'
        }
        const query = {
          categoryName:categoryname
        }
        if(category1id){
          query.category1Id = category1id
        }else if(category2id){
          query.category2Id = category2id
        }else{
          query.category3Id = category3id
        }
        location.query = query
        if(this.$route.params){
          location.params = this.$route.params
        }
        this.$router.push(location)
      }
    }
  }
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #ccc;
      z-index: 999;
      &.sort-enter{
        opacity: 0;
        height: 0;
      }
      &.sort-enter-to{
        opacity: 1;
        height: 461px;
      }
      &.sort-enter-active{
        transition: all,100ms;
      }

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            background: teal;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
