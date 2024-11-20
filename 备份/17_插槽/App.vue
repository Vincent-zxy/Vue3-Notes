<template>
  <h3>父组件</h3>
  <!-- v-slot 只能用在 组件或 template标签上 -->
  <Category title="热门XXXX" >
    <template v-slot:s3>
      <div v-for="v in oldGames" :key="v.id">{{ v.name }}</div>
    </template>
    <template v-slot:s2>
      <h4>二级标题</h4>
    </template>
  </Category>
  <Category title="今日XXXX" v-slot:s1>
    <video :src="videoUrl"  controls></video>
  </Category>
  <Category title="美食XXXX">
    <img :src="imgUrl" alt="" />
  </Category>

  <hr/>

  <Game>
    <template v-slot="params">
      <h5 v-for="v in params.youxi" :key="v.id">{{ v.name }}</h5>
    </template>
  </Game>
  <!-- 这里也可以解构 -->
  <Game>
    <template v-slot="{youxi}">
      <ol>
        <li v-for="v in youxi" :key="v.id">{{ v.name }}</li>
      </ol>
    </template>
  </Game>
  <Game>
    <template v-slot="params">
      <ul>
        <li v-for="v in params.youxi" :key="v.id">{{ v.name }}</li>
      </ul>
    </template>
  </Game>

  <!-- 并且还支持这两种写法  具名作用域插槽  选用默认插槽 -->
  <!-- <Game>
    <template v-slot:s1="params">
    </template>
  </Game>
  <Game>
    <template #default="params">
    </template>
  </Game> -->

</template>

<script lang="ts" setup name="App">
import { reactive, ref } from 'vue';
import Category from './components/Category.vue';
import Game from './components/Game.vue';
let oldGames=reactive([
  {id:1,name:"英雄联盟"},
  {id:2,name:"王者荣耀"},
  {id:3,name:"火影忍者"},
  {id:4,name:"猫和老鼠"},
])
let imgUrl='https://z1.ax1x.com/2023/11/19/piNxLo4.jpg'
let videoUrl='https://v6.huanqiucdn.cn/4394989evodtranscq1500012236/80b263531253642695765383829/v.f100830.mp4'

</script>

<style lang="less" scoped>
    img{
        width: 100%;
    }
    video{
      width: 100%;
    }
</style>