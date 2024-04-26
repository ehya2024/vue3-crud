<template>
    <h3>Create Post :</h3>
    <PostForm @formData="createPost" buttonText="Create" />
</template>

<script>
import PostForm from "../components/PostForm.vue";
import axios from "axios";
import Swal from "sweetalert2";

export default {
    components: {
        PostForm
    },
    setup() {

        function createPost(formData) {
            axios.post('https://jsonplaceholder.typicode.com/posts', {
                userId: 1,
                title: formData.title,
                body: formData.body
            })
                .then(function (response) {
                    console.log(response.data);
                    Swal.fire({
                        title: "Thanks!",
                        text: "Post successfully created!",
                        icon: "success"
                    });
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

        return { createPost }
    }
}
</script>

<style>
h3 {
    margin-left: 8px;
    margin-bottom: 15px;
}
</style>