<template>
  <!-- Desktop -->
  <header class="container mx-auto max-md:hidden">
    <div class="navbar bg-base-100 dark:bg-whiteDarkMode">
      <div class="flex-1">
        <RouterLink
          to="/"
          class="transition-custom logo btn-ghost btn text-xl font-semibold normal-case text-black hover:scale-110 hover:bg-transparent hover:text-purple dark:text-blackDarkMode"
          >Isaac F.</RouterLink
        >
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1 font-medium">
          <li class="hover:text-purple">
            <RouterLink
              class="transition-custom text-black hover:scale-110 hover:bg-transparent hover:text-purple dark:text-blackDarkMode"
              to="/"
              >Home</RouterLink
            >
          </li>
          <li class="hover:text-purple">
            <!-- <RouterLink to="/">curriculo</RouterLink> -->
            <a
              class="transition-custom text-black hover:scale-110 hover:bg-transparent hover:text-purple dark:text-blackDarkMode"
              :href="projectsStore.resume"
              target="_blank"
              >Currículo</a
            >
          </li>
          <li class="hover:text-purple">
            <RouterLink
              class="transition-custom text-black hover:scale-110 hover:bg-transparent hover:text-purple dark:text-blackDarkMode"
              to="/projects"
              >Projetos</RouterLink
            >
          </li>
          <li class="hover:text-purple">
            <RouterLink
              class="transition-custom text-black hover:scale-110 hover:bg-transparent hover:text-purple dark:text-blackDarkMode"
              to="/contact"
              >Contato</RouterLink
            >
          </li>
          <li v-if="isLoggedIn" class="hover:text-purple">
            <button
              @click="signOut"
              class="transition-custom text-black hover:scale-110 hover:bg-transparent hover:text-purple dark:text-blackDarkMode">
              Logout
            </button>
          </li>

          <li>
            <label
              class="swap-rotate swap hover:scale-110 hover:bg-transparent hover:text-purple">
              <!-- this hidden checkbox controls the state -->
              <input
                type="checkbox"
                id="checkboxDark"
                checked
                @click="toggleDark()" />

              <!-- moon icon -->
              <svg
                class="swap-off w-6 fill-current text-black dark:text-blackDarkMode"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>

              <!-- sun icon -->
              <svg
                class="swap-on w-6 fill-current text-black dark:text-blackDarkMode"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </header>

  <!-- Mobile Nav -->
  <header class="container mx-auto md:hidden">
    <div class="navbar bg-base-100 dark:bg-transparent">
      <div class="navbar-start">
        <div class="dropdown">
          <label
            tabindex="0"
            class="btn-ghost btn-circle btn dark:text-blackDarkMode">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow brightness-150 dark:bg-whiteDarkMode">
            <li class="hover:text-purple">
              <RouterLink
                class="text-black hover:bg-transparent dark:text-blackDarkMode"
                to="/"
                >Home</RouterLink
              >
            </li>
            <li class="hover:text-purple">
              <a
                class="text-black hover:bg-transparent dark:text-blackDarkMode"
                :href="projectsStore.resume"
                target="_blank"
                >Currículo</a
              >
            </li>
            <li class="hover:text-purple">
              <RouterLink
                class="text-black hover:bg-transparent dark:text-blackDarkMode"
                to="/projects"
                >Projetos</RouterLink
              >
            </li>
            <li class="hover:text-purple">
              <RouterLink
                class="text-black hover:bg-transparent dark:text-blackDarkMode"
                to="/contact"
                >Contato</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <RouterLink
          to="/"
          class="btn-ghost btn text-xl normal-case dark:text-blackDarkMode"
          >Isaac F.</RouterLink
        >
      </div>
      <div class="navbar-end">
        <label
          class="swap-rotate swap hover:scale-110 hover:bg-transparent hover:text-purple dark:text-blackDarkMode">
          <!-- this hidden checkbox controls the state -->
          <input
            type="checkbox"
            id="checkboxDark"
            checked
            @click="toggleDark()" />

          <!-- moon icon -->
          <svg
            class="swap-off w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>

          <!-- sun icon -->
          <svg
            class="swap-on w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
        </label>
      </div>
    </div>
  </header>
</template>

<style scoped></style>

<script>
import { RouterLink } from 'vue-router'

import { mapStores } from 'pinia'
import useProjectsStore from '@/stores/projects'

import { useDark } from '@vueuse/core'

import { getAuth, onAuthStateChanged } from '@firebase/auth'

export default {
  name: 'Header',
  components: {
    RouterLink,
  },
  computed: {
    ...mapStores(useProjectsStore),
  },
  data() {
    return {
      isLoggedIn: false,
    }
  },
  mounted() {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true
      } else {
        this.isLoggedIn = false
      }
    })
  },
  methods: {
    toggleDark() {
      useDark().value = !useDark().value
    },
    signOut() {
      const auth = getAuth()
      auth.signOut().then(() => {
        this.$router.push('/')
      })
    },
  },
}
</script>
