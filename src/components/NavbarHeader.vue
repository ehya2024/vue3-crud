<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/users">Users</router-link>
      </li>
      <li>
        <router-link to="/posts">Posts</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

nav {
  width: 100%;
  height: 50px;
  border-bottom: 3px solid gainsboro;
  background-color: rgb(233, 233, 233);
  margin-bottom: 10px;
}

nav ul {
  display: flex;
  list-style-type: none;
  align-items: center;
  height: 100%;
  gap: 0 1rem;
  padding: 0 10px;
}

nav ul li a {
  text-decoration: none;
  background-color: gainsboro;
  padding: 5px 7px;
  color: rgb(179, 116, 0);
  box-sizing: border-box;
  border-radius: 4px;
  /* border: 1px solid rgb(179, 116, 0); */
}
</style>