<template>
  <Header />

  <div class="about">
    <h1>This is an projects page</h1>
  </div>

  <Footer />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>
