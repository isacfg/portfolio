<template>
  <Header />

  <!-- hero -->
  <div class="container mx-auto flex h-screen items-center px-4">
    <div class="left">
      <div class="texts">
        <p>oii! meu nome é</p>
        <h1>Isaac F.</h1>
      </div>
      <div class="btns">
        <Button text="Currículo" type="btn-primary" />
        <Button text="ver projetos" type="btn-secondary" />
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Button from '../components/btns/Button.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Button,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
