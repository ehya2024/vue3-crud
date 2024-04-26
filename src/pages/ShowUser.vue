<template>
    <CardView :user="user"/>
</template>

<script>
import CardView from '@/components/CardView.vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

export default {
    components: {
        CardView
    },
    setup() {

        const user = ref({});
        const route = useRoute();

        function getData() {
            axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
            .then(function (response){
                user.value = response.data;
            })
            .catch(function (error){
                console.log(error);
            })
        }

        getData();

        return { user,route }
    }
}
</script>

<style></style>