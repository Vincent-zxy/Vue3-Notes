<template>
    <!-- <input type="text" 
    :value="modelValue"
    @input="emit('update:modelValue',$event.target.value)"
    /> -->

    <!-- 自定义qwe  -->
    <!-- <input type="text" 
    :value="qwe"
    @input="emit('update:qwe',$event.target.value)"
    /> -->

    <input type="text" 
    :value="ming"
    @input="emit('update:ming',$event.target.value)"
    />
    <br/>
    <input type="text" 
    :value="mima"
    @input="emit('update:mima',$event.target.value)"
    />
</template>

<script setup name='MyInput'>

    // 1 初始绑定：父组件通过 v-model 将 username 的值传递给子组件的 modelValue。
    // 2 初始渲染：子组件使用接收到的 modelValue 渲染输入框的 value。
    // 3 用户输入：当用户在输入框中输入时，触发 input 事件。
    // 4 事件处理：子组件通过 emit 发出 update:modelValue 事件，携带新的输入值。
    // 5 更新父组件状态：Vue 捕获这个事件，并更新 username 的值为新的输入值。
    // 6 重新渲染：父组件重新渲染，反映新的 username 值。
    
    // defineProps(['modelValue'])
    // const emit=defineEmits(['update:modelValue'])  // defineEmits :定义可以发出的事件 上面的emit则直接将值发送成功

    // 自定义qwe
    // defineProps(['qwe'])
    // const emit=defineEmits(['update:qwe'])

    defineProps(['ming','mima'])
    const emit=defineEmits(['update:ming','update:mima'])
</script>

<style scoped>
div{
    background: pink;
    padding: 20px;
}
</style>  