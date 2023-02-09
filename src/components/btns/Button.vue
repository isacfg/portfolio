<template>
  <a
    class="btn rounded-3xl border-purple bg-purple px-4 text-base font-semibold capitalize text-white outline-none"
    :class="{
      'px-6': type === 'btn-primary',
      'border-2 bg-white text-purple': type === 'btn-secondary',
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

<style></style>
