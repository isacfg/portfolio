<template>
  <div class="body flex flex-col items-center justify-center">
    <h1
      class="mb-4 w-2/3 text-center text-3xl font-bold text-black dark:text-blackDarkMode max-md:text-2xl">
      404 - Página não encontrada
    </h1>

    <p class="text-base text-gray dark:text-grayDarkMode">
      Se o problema persistir, entre em contato com o administrador do site.
    </p>
    <p class="mb-4 text-base text-gray dark:text-grayDarkMode">Obrigado.</p>
    <Button class="" to="/" :isRouter="true" text="Home" type="btn-primary" />
  </div>
</template>

<script>
import Button from '../components/Button.vue'
import { RouterLink } from 'vue-router'

export default {
  name: 'NotFound',
  components: {
    RouterLink,
    Button,
  },
}
</script>

<style lang="sass" scoped></style>
