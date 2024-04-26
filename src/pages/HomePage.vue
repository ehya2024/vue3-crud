<template>
  <div class="box">
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis similique laborum adipisci praesentium necessitatibus cum eum dolorum corrupti quia dolor non ad, nemo doloremque obcaecati accusantium, iure voluptas. Magni, voluptatibus expedita. Architecto accusamus debitis doloribus atque mollitia harum non aliquam, maiores sint magnam molestias enim, eum, quia error laudantium ullam reprehenderit. Natus eum debitis dignissimos odit eos aliquid voluptate nulla voluptates obcaecati. Ratione nobis mollitia totam optio architecto, magnam quae magni quos. Delectus exercitationem saepe illo omnis fugiat fugit adipisci.
    </p>
    <div class="btn-box">
      <router-link to="/users" class="btn dark-btn">Users</router-link>
      <router-link to="/posts" class="btn light-btn">Posts</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.box {
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 0.75rem 0;
  margin: 15px 0 0 15px;
}

p {
  text-align: justify;
}

.btn-box {
  display: flex;
  gap: 0 0.5rem;
}

.btn {
  padding: 5px 8px;
  border-radius: 4px;
  text-decoration: none;
  color: rgb(179, 116, 0);
  border: 1px solid rgb(179, 116, 0);
}

.dark-btn {
  background-color: rgb(49, 49, 49);
}

.light-btn {
  background-color: gainsboro;
}
</style>