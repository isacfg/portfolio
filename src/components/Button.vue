<template>
  <a
    v-if="!isRouter"
    target="_blank"
    :href="to"
    class="bob-on-hover btn rounded-3xl border-purple bg-purple px-4 text-base font-semibold capitalize text-purple outline-none max-md:text-sm"
    :class="{
      'px-6 text-white hover:border-purple hover:bg-white hover:text-purple':
        type === 'btn-primary',
      'border-2 bg-white text-purple hover:border-purple hover:bg-purple hover:text-white':
        type === 'btn-secondary',
    }">
    {{ text }}
  </a>
  <RouterLink
    :to="to"
    v-if="isRouter"
    class="bob-on-hover btn rounded-3xl border-purple bg-purple px-4 text-base font-semibold capitalize text-purple outline-none max-md:text-sm"
    :class="{
      'px-6 text-white hover:border-purple hover:bg-white hover:text-purple':
        type === 'btn-primary',
      'border-2 bg-white text-purple hover:border-purple hover:bg-purple hover:text-white':
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
