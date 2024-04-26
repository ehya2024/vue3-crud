<template>
  <form @submit.prevent="validate">
    <label>Title</label>
    <div class="warning" ref="warning1">
      <FontAwesomeIcon :icon="['fa','warning']" />
      <span>{{form.titleError}}</span>
    </div>
    <input type="text" v-model.lazy.trim="form.title">
    <label>Body</label>
    <div class="warning" ref="warning2">
      <FontAwesomeIcon :icon="['fa','warning']" />
      <span>{{ form.bodyError }}</span>
    </div>
    <textarea cols="40" rows="10" v-model.lazy.trim="form.body"></textarea>
    <button type="submit">{{buttonText}}</button>
  </form>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { reactive,ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

export default {
components:{
  FontAwesomeIcon
},
props:['buttonText'],
setup(props, {emit}){

  const form = reactive({
    title: '',
    body: '',
    titleError: '',
    bodyError: ''
  });

  const route = useRoute();
  const warning1 = ref(null);
  const warning2 = ref(null);

  function getPost(){
    axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    .then(function(response){
      form.title = response.data.title,
      form.body = response.data.body
    })
    .catch(function(error){
      console.log(error);
    })
  }

  getPost();
  
  function validate(){
    if(form.title === ''){
      form.titleError = 'The title can not be empty';
      warning1.value.style.display = 'block';
    } else {
      form.titleError = '';
      warning1.value.style.display = 'none';
    }
    
    if(form.body === ''){
      form.bodyError = 'The body can not be empty';
      warning2.value.style.display = 'block';
    } else {
      form.bodyError = '';
      warning2.value.style.display = 'none';
    }

    if(form.title !== '' && form.body !== ''){
      emit('formData',form);
    }
  }

  return{validate,form,warning1,warning2,route}

}
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 0.30rem;
  margin-left: 10px;
}

form input,textarea {
  outline: none;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid rgb(179, 116, 0);
  border-radius: 3px;
}

form button {
  padding: 5px 8px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  color: rgb(179, 116, 0);
  border: 1px solid rgb(179, 116, 0);
  width: fit-content;
}

.warning {
  color:rgb(236, 0, 0);
  font-size: 14px;
  display: none;
}

.warning span {
  margin-left: 0.25rem;
}
</style>