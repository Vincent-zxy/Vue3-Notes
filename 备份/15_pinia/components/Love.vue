<template>
    <div class="Love">
        <button @click="get">获取一句</button>
        <ul>
            <li v-for="(v,i) in list" :key="i">{{ v.title }}</li>
        </ul>
    </div>
</template>

<script setup name='Love'>
    import {reactive} from 'vue'
    import { nanoid } from 'nanoid'
import axios from 'axios'
    import { useLoveStore } from '@/store/love';
    import { storeToRefs } from 'pinia';
    const loveStore=useLoveStore()
    const {list}=storeToRefs(loveStore)

    // 监视pinia 订阅   很像watch
    loveStore.$subscribe((a,b)=>{
        console.log(a,b);//a本次修改的信息  b真正的数据
        console.log(JSON.stringify(b));
    })
    
    async function get(){
        // 连续解构赋值 + 重命名
        let {data:{content:title}}=await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        loveStore.list.push({  // 这样写是不行的  因为list如果是基本数据是可以直接更改的，但是方法是不行的
            id:nanoid(),
            title
        })
    }
</script>

<style scoped>
.Love{
    background: orange;
    padding: 10px;
    border-radius: 20px;
}
</style>