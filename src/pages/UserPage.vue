<template>
  <CardView v-for="(user,index) in users" :key="index" :user="user"/>
</template>

<script>
import CardView from '@/components/CardView.vue';
import axios from 'axios';
import {ref} from 'vue';

export default {
  components:{
    CardView
  },
  setup(){
    const users = ref([]);

    function getData(){
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function (response){
        users.value = response.data;
        console.log(response.data);
      })
      .catch(function (error){
        console.log(error);
      })
    }

    getData();

    return{users}
  }
}
</script>

<style>

</style>