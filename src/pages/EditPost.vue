<template>
  <h3>Edite Post :</h3>
  <PostForm buttonText="Edit" @formData="updatePost" />
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import Swal from 'sweetalert2';

export default {
  components: {
    PostForm
  },
  setup() {

    const route = useRoute();

    function updatePost(formData) {
      axios.put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
        id: route.params.id,
        title: formData.title,
        body: formData.body,
        userId: 1
      })
        .then(function (response) {
          console.log(response.data);
          Swal.fire({
            title: "Thanks!",
            text: `Post (${route.params.id}) edited successfully`,
            icon: "success"
          });
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    return { updatePost }
  }
}
</script>

<style></style>