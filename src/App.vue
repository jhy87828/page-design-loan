<script setup>
import Header2Dep1 from "./components/Header2Dep1.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header2Dep1 />
  <nav>
    <router-link to="/">Main</router-link>
    <router-link to="/foo">Foo</router-link>
  </nav>
  <router-view></router-view>
  <Footer />
</template>

<style scoped lang="sass"></style>
