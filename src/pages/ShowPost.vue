<template>
    <div class="post-card">
        <div class="post-card-header">
            <router-link :to="{ name: 'showpost', params: { id: post.id } }">{{ post.title }}</router-link>
        </div>
        <div class="post-card-content">
            <p>{{ post.body }}</p>
        </div>
        <div class="post-card-footer">
            <router-link class="edit-btn" :to="{name:'editpost',params:{id: post.id}}">
            Edit
            <FontAwesomeIcon :icon="['fa','pencil']" />
            </router-link>
            <button class="delete-btn" @click="deletePost">
            Delete
            <FontAwesomeIcon :icon="['fa','trash']" />
            </button>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
    components:{
        FontAwesomeIcon
    },
    setup() {
        const post = ref({});
        const route = useRoute();

        function getPost() {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
                .then(function (resposne) {
                    post.value = resposne.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

        getPost();

        function deletePost() {
            axios.delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
                .then(function () {
                    Swal.fire({
                        title: "Thanks!",
                        text: `The post (${route.params.id}) has been successfully deleted`,
                        icon: "warning"
                    });
                })
                .catch(function(error){
                    console.log(error);
                })
        }

        return { post, route, deletePost }
    }
}
</script>

<style>
.post-card-footer {
    padding: 7px;
    box-sizing: border-box;
    background-color: gainsboro;
    display: flex;
    gap: 0 0.30rem;
}

.edit-btn {
    background-color: green;
    color: gainsboro;
    border-radius: 4px;
    border: none;
    padding: 5px 9px;
    cursor: pointer;
    text-decoration: none;
}

.delete-btn {
    background-color: darkred;
    color: gainsboro;
    border-radius: 4px;
    border: none;
    padding: 5px 9px;
    cursor: pointer;
}
</style>