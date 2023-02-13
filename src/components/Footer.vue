<template>
  <div
    class="container mx-auto mb-6 mt-24 flex flex-col items-center justify-between md:flex-row">
    <div class="left">
      <p>made with ❤️ by Isaac F.</p>
    </div>
    <div class="right flex gap-x-4 max-md:mt-3">
      <a
        :href="projectsStore.resume"
        target="_blank"
        class="bob-on-hover hover:text-purple">
        📩 Currículo
      </a>
      <a
        href="https://github.com/isacfg"
        target="_blank"
        class="bob-on-hover hover:text-purple">
        📚 Github
      </a>
      <a
        href="https://www.behance.net/isaacf"
        target="_blank"
        class="bob-on-hover hover:text-purple">
        🎨 Behance
      </a>
      <a
        href="https://www.linkedin.com/in/isaacfig/"
        target="_blank"
        class="bob-on-hover hover:text-purple">
        📖 Linkedin
      </a>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import { mapStores } from 'pinia'
import useProjectsStore from '@/stores/projects'

export default {
  name: 'Footer',

  computed: {
    ...mapStores(useProjectsStore),
  },
}
</script>
