<template>
  <Header />

  <!-- hero -->
  <div
    class="container mx-auto flex h-screen flex-row items-center px-4 max-md:flex-col">
    <div class="left flex flex-col gap-y-24">
      <div class="main flex flex-col gap-y-7">
        <div class="texts">
          <p class="text-2xl font-medium text-black max-md:text-xl">
            oii! meu nome é
          </p>
          <h1 class="text-8xl font-semibold text-purple max-md:text-7xl">
            Isaac F.
          </h1>
        </div>
        <div class="btns flex items-center gap-x-24 max-md:gap-x-10">
          <Button text="Currículo" type="btn-primary" />
          <Button text="ver projetos" type="btn-secondary" />
        </div>
      </div>
      <div class="texts-b">
        <p class="text-xl font-normal max-md:text-center max-md:text-base">
          👩🏻‍💻 Trabalhando como frontend developer na
          <a
            href="https://www.ejectufrn.com.br/"
            class="transition-custom text-purple hover:scale-110"
            target="_blank"
            >@EJECT</a
          >
        </p>
        <p class="text-xl font-normal max-md:text-center max-md:text-base">
          📚 Estudando Ciências e Tecnologia na
          <a
            class="transition-custom text-purple hover:scale-110"
            target="_blank"
            href="https://www.ufrn.br/"
            >@UFRN</a
          >
        </p>
      </div>
    </div>
    <div class="right ml-auto max-md:mx-auto max-md:my-auto">
      <img src="../assets/ilus.svg" class="max-md:w-3/4" alt="" srcset="" />
    </div>
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
