<template>
    <div class="Person_box">
       
    </div>
</template>
<script lang="ts" setup name="Person">
    import {type PersonInter,type Persons} from '@/types'//可以引用值，但是不能引用约束 除非通过 type 定义才可以
    let person:PersonInter={id:"asyn",name:"张三",age:80}
    let personList:Persons=[
        {id:"asyn",name:"张三",age:80},
        {id:"asyn",name:"李四",age:18},
        {id:"asyn",name:"王五",age:20},
    ]

    console.log(personList);
    
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