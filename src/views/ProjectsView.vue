<template>
  <!-- <Header /> -->

  <div
    class="container mx-auto mt-24 px-4 text-center max-md:mt-12 max-md:px-6">
    <h2
      class="text-5xl font-semibold text-black dark:text-blackDarkMode max-md:text-4xl">
      Principais <span class="text-purple dark:brightness-150">Projetos</span>
    </h2>
  </div>

  <div class="container mx-auto mt-24 px-4 max-md:mt-12">
    <div v-for="(project, index) in projectsStore.projects" :key="project.id">
      <ProjectCardHome
        :type="index % 2 === 0 ? 'text-right' : 'text-left'"
        :isFirst="index === 0"
        :projectName="project.name"
        :projectDescription="project.description"
        :projectTechs="project.tech"
        :projectPhoto="project.photo"
        :projectId="project.id" />
    </div>
  </div>

  <!-- <Footer /> -->
</template>

<style></style>

<script>
import Button from '@/components/Button.vue'
import ProjectCardHome from '@/components/ProjectCardHome.vue'

import { mapStores } from 'pinia'
import useProjectsStore from '@/stores/projects'

export default {
  name: 'Projects',
  components: {
    Button,
    ProjectCardHome,
  },
  data() {
    return {}
  },
  mounted() {
    // scroll to top
    window.scrollTo(0, 0)
  },
  computed: {
    ...mapStores(useProjectsStore),
  },
  methods: {},
}
</script>
