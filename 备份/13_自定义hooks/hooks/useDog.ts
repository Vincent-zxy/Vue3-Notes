import { reactive, ref } from 'vue';
import axios from 'axios'

export default function () {
    let dogList = reactive([
        'https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg'
    ])
    // https://dog.ceo/api/breed/pembroke/images/random

    async function getDog() {
        //  sum.value+=1
        try {
            let data = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
            // console.log(data.data.message);
            dogList.push(data.data.message)
        } catch (error) {
            alert(error)
        }
    }
    return { dogList, getDog }
}