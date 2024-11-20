<template>
  <div class="big">
    <div class="navigate">
    <!-- <a href="/home">首页</a>
    <a href="/new">新闻</a>
    <a href="/about">关于</a>   这样会刷新页面-->
    <RouterLink replace to="/home" active-class="active">首页</RouterLink>
    <RouterLink replace to="/new" active-class="active">新闻</RouterLink>
    <RouterLink replace to="/about" active-class="active">关于</RouterLink>
  </div>
  <div class="content">
      <RouterView></RouterView>
  </div>
  </div>
</template>

<script lang="ts" setup name="App">
import { RouterView,RouterLink } from 'vue-router';
</script>

<style lang="less" scoped>
.big{
  display: flex;
  width: 100%;
  height: 500px;
  div{
    border-radius: 20px;
  }
  .navigate{
    display: flex;
    flex-direction: column;
    background: pink;
    width: 25%;
    a{
      text-align: center;
      padding: 10px;
      color: black;
      text-decoration: none;
    }
    a:hover{
      background: aqua;
    }
    .active{
      background: orange;
    }
  }
  .content{
    background: skyblue;
    width: 75%;
  }
}

</style>