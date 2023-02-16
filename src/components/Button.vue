<template>
  <a
    v-if="!isRouter"
    target="_blank"
    :href="to"
    class="bob-on-hover btn rounded-3xl border-purple px-4 text-base font-semibold capitalize text-purple outline-none max-md:text-sm"
    :class="{
      'border-2 bg-purple px-6 text-white hover:border-purple hover:bg-white hover:text-purple dark:text-blackDarkMode dark:hover:bg-transparent  ':
        type === 'btn-primary',
      'border-2 bg-white text-purple hover:border-purple hover:bg-purple hover:text-white dark:bg-transparent dark:text-blackDarkMode ':
        type === 'btn-secondary',
    }">
    {{ text }}
  </a>
  <RouterLink
    :to="to"
    v-if="isRouter"
    class="bob-on-hover btn rounded-3xl border-purple px-4 text-base font-semibold capitalize text-purple outline-none max-md:text-sm"
    :class="{
      'border-2 bg-purple px-6 text-white hover:border-purple hover:bg-white hover:text-purple dark:text-blackDarkMode dark:hover:bg-transparent  ':
        type === 'btn-primary',
      'border-2 bg-white text-purple hover:border-purple hover:bg-purple hover:text-white dark:bg-transparent dark:text-blackDarkMode ':
        type === 'btn-secondary',
    }"
    >{{ text }}</RouterLink
  >
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'Button',
  props: {
    text: {
      type: String,
      default: 'Button',
    },
    type: {
      type: String,
      default: 'btn-primary',
    },
    isRouter: {
      type: Boolean,
      default: false,
    },
    to: {
      type: String,
      default: '/',
    },
  },
}
</script>

<style></style>
