<template>
     <div class="big">
         <h1>我是新闻</h1>
         <div class="bottom">
            <div class="navigate">
               <button @click="go(v)"  v-for="v in list" :key="v.id" 
                :class="v.id==current?'active':''"
               >btn</button>
                <!-- 第一种  query-->
                <!-- <RouterLink to="/new/detail?title=11111" active-class="active" v-for="v in list" :key="v.id">{{ v.title }}</RouterLink> -->
                <!-- 第二种 query-->
                <!-- <RouterLink :to="`/new/detail?title=${v.title}`" active-class="active" v-for="v in list" :key="v.id">{{ v.title }}</RouterLink> -->
                <!-- 第三种 query-->
                <RouterLink :to='{
                  path:"/new/detail",//query可以用 path 也可以用 name  但是如果是params传参  只能用name
                  // name:"xiang",
                  query:{
                    id:v.id,
                    title:v.title,
                    content:v.content
                  }
                }' 
                v-for="v in list" :key="v.id">
                {{ v.title }}
              </RouterLink>

              <!-- 第一种 params传值 -->
              <!-- <RouterLink to='/new/detail/哈哈/嘿嘿/暗暗' active-class="active" v-for="v in list" :key="v.id">{{ v.title }}</RouterLink> -->
              <!-- 第二种 params传值 -->
              <!-- <RouterLink :to="`/new/detail/${v.id}/${v.title}/${v.content}`" active-class="active" v-for="v in list" :key="v.id">{{ v.title }}</RouterLink> -->
              <!-- 第三种 params传值 -->
              <!-- <RouterLink :to='{
                  name:"xiang",
                  params:{
                    id:v.id,
                    title:v.title,
                    content:v.content
                  }
                }' 
                active-class="active" 
                v-for="v in list" :key="v.id">
                {{ v.title }}
              </RouterLink> -->
            </div>
            <div class="content">
                <RouterView></RouterView>
            </div>
         </div>
    </div>
    

</template>

<script setup name='new'>
    import {reactive,ref} from 'vue'
    import { useRouter } from 'vue-router';
    const route=useRouter()
    let current=ref('01')
    console.log(route);
    let list=reactive([
        {id:'01',title:"度奥斯卡的骄看得见01",content:"大数据大胜靠德01"},
        {id:'02',title:"大叔大婶的的的撒02",content:"水电费大幅度发02"},
        {id:'03',title:"发的说法是发的03",content:"电饭锅第三方第三方03"},
        {id:'04',title:"撒大声大声的04",content:"规范化的非官方个04"},
    ])
    // interface NewsInter {
    //   id:string,
    //   title:string,
    //   content:string,
    // } 

    // 编程式跳转
    function go(v){
      current.value=v.id
      route.push({
        path:"/new/detail",//query可以用 path 也可以用 name  但是如果是params传参  只能用name
        // name:"xiang",
        query:{
          id:v.id,
          title:v.title,
          content:v.content
        }
      })
    }
</script>

<style scoped>
.big{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  div{
    border-radius: 20px;
    padding: 10px;
  }
  >h1{
    background: aqua;
  }
  .bottom{
    display: flex;
    .navigate{
      display: flex;
      flex-direction: column;
      width: 25%;
      background: rgb(19, 218, 52);
        a{
          text-decoration: none;
          color: white;
          padding: 10px;
        }
        a:hover{
          background: aqua;
        }
        .active{
          background: orange;
        }
    }
    .content{
      background: rgb(255, 121, 221);
      width: 75%;
    }
  }
}
.active{
  background: orange;
}
</style>