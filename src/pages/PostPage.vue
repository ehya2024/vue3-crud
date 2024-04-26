<template>
    <router-link :to="{ name: 'createpost' }" class="create-btn">Create Post</router-link>
    <div class="post-card" v-for="(post, index) in posts" :key="index">
        <div class="post-card-header">
            <router-link :to="{ name: 'showpost', params: { id: post.id } }">{{ post.title }}</router-link>
        </div>
        <div class="post-card-content">
            <p>{{ post.body }}</p>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
    setup() {

        const posts = ref([]);

        function getPost() {
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(function (resposne) {
                    posts.value = resposne.data;
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

        getPost();

        return { posts }
    }
}
</script>

<style>
.post-card {
    width: 300px;
    background-color: rgb(233, 233, 233);
    border-radius: 5px;
    overflow: hidden;
    margin: 5px;
    display: inline-block;
    border: 1px solid rgb(179, 116, 0);
}

.post-card-header {
    padding: 7px;
    box-sizing: border-box;
    background-color: gainsboro;
}

.post-card-header a {
    color: rgb(179, 116, 0);
    text-decoration: none;
    font-weight: bold;
}

.post-card-content {
    padding: 10px;
    box-sizing: border-box;
}

.create-btn {
    display: block;
    width: fit-content;
    margin:0 0 5px 5px;
    padding: 5px 8px;
    border-radius: 4px;
    text-decoration: none;
    color: rgb(179, 116, 0);
    border: 1px solid rgb(179, 116, 0);
    background-color: gainsboro;
}
</style>