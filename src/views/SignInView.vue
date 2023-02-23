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
          placeholder="Password"
          v-model="password" />
        <p v-if="errMsg">{{ errMsg }}</p>
        <button
          class="btn mt-4 w-full text-white dark:bg-white dark:text-black"
          @click="signIn">
          Entrar
        </button>
      </div>
    </div>
  </div>
  <div v-else class="flex h-screen flex-col items-center justify-center">
    <h1
      class="mb-8 w-2/3 text-center text-3xl font-bold text-black dark:text-blackDarkMode max-md:text-2xl">
      Você já está logado
    </h1>
  </div>
</template>

<script>
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from '@firebase/auth'
import { useRouter } from 'vue-router'
export default {
  name: 'SignInView',
  components: {},
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
          console.log('Successfully logged in!')
          this.$router.push('/dashboard')
        })
        .catch((error) => {
          console.log(error.code)
          alert(error.message)
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
  height: 60vh;
}
</style>
