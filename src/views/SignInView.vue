<template>
  <div v-if="!isLoggedIn" class="body container mx-auto mt-14">
    <div class="flex flex-col items-center justify-center">
      <div class="flex flex-col items-center justify-center">
        <h1 class="mb-2 text-3xl font-bold text-black dark:text-blackDarkMode">
          Login
        </h1>
        <p class="mb-4 text-base text-gray dark:text-grayDarkMode">
          Entre com seu email e senha
        </p>
      </div>
      <div class="mt-12 flex flex-col items-center justify-center">
        <input
          class="input-bordered input"
          type="text"
          placeholder="Email"
          v-model="email" />
        <input
          class="input-bordered input mt-4"
          type="password"
          placeholder="Senha"
          v-model="password" />

        <button
          class="btn mt-4 w-full text-white dark:bg-white dark:text-black"
          @click="signIn">
          Entrar
        </button>
      </div>
      <div v-if="errMsg" class="w-1/3">
        <div class="alert alert-error mt-4 shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 flex-shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Erro! {{ errMsg }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex h-screen flex-col items-center justify-center">
    <h1
      class="mb-8 w-2/3 text-center text-3xl font-bold text-black dark:text-blackDarkMode max-md:text-2xl">
      Você já está logado
    </h1>
    <Button
      class=""
      to="/dashboard"
      :isRouter="true"
      text="Dashboard"
      type="btn-primary" />
  </div>
</template>

<script>
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from '@firebase/auth'
import { useRouter } from 'vue-router'
import Button from '../components/Button.vue'

export default {
  name: 'SignInView',
  components: {
    Button,
  },
  data() {
    return {
      email: '',
      password: '',
      errMsg: '',
      isLoggedIn: false,
    }
  },
  methods: {
    signIn() {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          console.log('Usuário logado com sucesso!	')
          this.$router.push('/dashboard')
        })
        .catch((error) => {
          console.log(error.code)
          this.errMsg = error.message
          // alert(error.message)
        })
    },
  },
  mounted() {
    this.$router = useRouter()
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }
    })
  },
}
</script>

<style scoped>
.body {
  min-height: 60vh;
}
</style>
