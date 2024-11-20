<template>
    <div class="Person_box">
        姓：<input type="text" v-model="firstName"><br/>
        名：<input type="text" v-model="lastName"><br/>
        全名：<span>{{ fullName }}</span><br/>
        <hr>
        <button @click="changeFullName">修改fullName</button>
    </div>
</template>
<script lang="ts" setup name="Person">
    // computed：计算属性
    import { ref,computed } from 'vue'// 跟vue2的ref没有任何关系
    let firstName=ref('zhang')
    let lastName=ref('san')

    // 只可 读 不能 修改
    // let fullName= computed (()=>{
    //     console.log(1);//如果页面使用6次  只会在控制台打印一次
    //     return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1)+ '-'+lastName.value
    // })
    // function fullName2(){
    //     console.log(2);//如果页面使用6次  会在控制台打印 6 次
    //     return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1)+ '-'+lastName.value
    // }
    // 可以通过修改结构 变成可修改的
    let fullName= computed ({
        get(){
            return firstName.value.slice(0,1).toUpperCase() + firstName.value.slice(1)+ '-'+lastName.value
        },
        set(val){
            console.log('set',val);
            const [str1,str2]=val.split('-')
            firstName.value=str1
            lastName.value=str2
        }
    })
   
    function changeFullName(){
        fullName.value='li-si'// Write operation failed: computed value is readonly  只能读不能改
        // 但是当我设置了get 和 set 后虽然不会报警告了 但是页面也并没有更新
        // 因为我感觉它依然是只读的， 只不过是调用了 set方法 所以在工作台进行打印了
    }

    
</script>

<style > 
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