<template>
  <div class="card">
    <div class="card-header">
        <router-link :to="{name:'showuser',params:{id:user.id}}">{{user.name}}</router-link>
    </div>
    <div class="card-content">
        <ul>
            <li>Username : {{user.username}}</li>
            <li>Email : {{user.email}}</li>
            <li>Phone : {{user.phone}}</li>
            <li>Website : {{user.website}}</li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    props:['user']
}
</script>

<style>
.card {
    width: 300px;
    background-color: rgb(233, 233, 233);
    border-radius: 5px;
    overflow: hidden;
    margin: 5px;
    display: inline-block;
    border: 1px solid rgb(179, 116, 0);
}

.card-header {
    padding: 7px;
    box-sizing: border-box;
    background-color: gainsboro;
}

.card-header a {
    color: rgb(179, 116, 0);
    text-decoration: none;
    font-weight: bold;
}

.card-content {
    padding: 10px;
    box-sizing: border-box;
}

.card-content ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem 0;
}
</style>