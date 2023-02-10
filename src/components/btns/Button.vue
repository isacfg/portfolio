<template>
  <a
    class="transition-custom btn rounded-3xl border-purple bg-purple px-4 text-base font-semibold capitalize text-white outline-none hover:scale-110"
    :class="{
      'px-6 hover:border-purple hover:bg-white hover:text-purple':
        type === 'btn-primary',
      'border-2 bg-white text-purple hover:border-purple hover:bg-purple hover:text-white':
        type === 'btn-secondary',
    }">
    {{ text }}
  </a>
</template>

<script>
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
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style>
.transition-custom {
  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
