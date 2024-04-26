<template>
  <Navbar />
  <router-view></router-view>
</template>

<script>
import Navbar from './components/NavbarHeader.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style>
</style>