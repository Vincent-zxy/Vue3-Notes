import { computed, reactive, ref } from 'vue';
import axios from 'axios'

export default function () {
    let sum = ref(0)
    function add() {
        sum.value += 1
    }
    let bigSum = computed(() => {
        return sum.value * 10
    })
    return { sum, add, bigSum }
}