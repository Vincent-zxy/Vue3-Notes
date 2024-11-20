<template>
    <div class="Person_box">
       <!-- <h1>{{ a }}</h1> -->
       <ul>
        <li v-for="v in list" :key="v.id">{{ v.name }}--{{ v.age }}</li>
       </ul>
    </div>
</template>
<script lang="ts" setup name="Person">
    import { type Persons } from '@/types';
    import { defineProps,withDefaults } from 'vue';

    //只接受list
    // let x=defineProps(['a','list'])
    
    //接受list  +  限制类型 
    // defineProps<{list:Persons}>()
    // defineProps<{a: string ; list:Persons}>() //多个时用 ;号 隔开

    //接受list(defineProps)+ 限制类型(Persons)+限制必要性(list)+指定默认值（withDefaults）
    withDefaults(defineProps<{list:Persons}>(),{
        list:()=>[{id:'111',name:"大大声",age:999}]//默认值
    })

    //接受父组件传过来的参数并打印
    // let x=defineProps(['a','list'])
    // console.log(x.a,x.list);

    // defineExpose一般不需要引入 是宏函数
</script>

<style scoped> 
    /* scoped 局部样式  当前文件私有 */
    *{
        font-size: 20px;
    }
    .Person_box{
        background: skyblue;
    }
    input{
        padding: 10px;
    }
    button{
        padding: 20px;
        margin: 5px;
    }
</style>