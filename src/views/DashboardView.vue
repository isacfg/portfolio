<template>
  <div v-if="isLoggedIn">dashboard</div>

  <!-- Se o usuário não estiver logado -->
  <div v-else class="flex h-screen flex-col items-center justify-center">
    <h1
      class="mb-8 w-2/3 text-center text-3xl font-bold text-black dark:text-blackDarkMode max-md:text-2xl">
      Você precisa estar logado e ser um administrador para acessar essa página
    </h1>
    <Button
      class=""
      to="/signin"
      :isRouter="true"
      text="Entrar"
      type="btn-primary" />
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { useRouter } from 'vue-router'
import { RouterLink } from 'vue-router'
import Button from '../components/Button.vue'

export default {
  name: 'DashboardView',
  components: {
    RouterLink,
    Button,
  },
  mounted() {
    window.scrollTo(0, 0)
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('user is logged in')
        this.isLoggedIn = true
      } else {
        alert('Você precisa estar logado para acessar essa página')
        this.isLoggedIn = false
        this.$router.push('/signin')
      }
    })
  },
  data() {
    return {
      isLoggedIn: false,
    }
  },
}
</script>

<style scoped></style>
