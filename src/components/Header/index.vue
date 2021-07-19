<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <!-- <a href="###">登录</a> -->
            <router-link class="register" to="/register">免费注册</router-link>
            <!-- <a href="###" class="register">免费注册</a> -->
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" title="尚品汇" to="/home">
          <img src="./images/logo.png" alt="" />
        </router-link>
        <!-- <a class="logo" title="尚品汇" href="###" target="_blank">
          <img src="./images/logo.png" alt="" />
        </a> -->
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyworld"
          />
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="toSearch">
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data(){
    return{
      keyworld:''
    }
  },
  methods:{
    toSearch(){
      // this.$router.push('/search')
      // 路径中传递参数第一种方式，字符串拼接
      // this.$router.push('/search/:'+ this.keyworld + '?keyworld2=' + this.keyworld)
      // 路径中传递参数的第二种方式，模板字符串
      // this.$router.push(`/search/:${this.keyworld}?keyworld2=${this.keyworld}`)
      // 路径中传递参数的第三种方式，对象,此时需要在注册组件的时候注册命名组件
      /* this.$router.push({
        name:'search',
        params:{keyworld:this.keyworld},
        query:{keyworld2:this.keyworld}}) */
      /* 指定params参数时可不可以用path和params配置的组合?（对象写法） */
      this.$router.push({
        name:'search',
        // path:'/search',
        // 如果指定了params参数，但是传递的时候却没有传，可以在path路径后面写一个问号？
        // params:{keyworld:this.keyworld},
        // 如果指定了params参数，并且是和name一起使用，且指定了参数可以不传，此时如果参数是一个空串，路径也会出问题
        params:{keyworld:'' || undefined},
        query:{keyworld2:this.keyworld}
        })

    }
  }
};
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
