<template>
  <div class="container mx-auto mt-24 flex px-4 max-md:mt-12 max-md:px-6">
    <aside class="fixed flex w-2/12 flex-col">
      <a>Introdução</a>
      <a>Desafios</a>
      <a>Processo</a>
      <a>Resultado</a>
    </aside>

    <div class="mx-auto w-10/12 pl-12">
      <article>
        <div class="head mx-auto flex flex-col items-center">
          <h2
            class="text-5xl font-semibold text-black dark:text-blackDarkMode max-md:text-4xl">
            Project Name
          </h2>
          <p class="mt-4">Lorem ipsum dolor sit amet consectetur</p>
          <img
            class="bob-on-hover mt-16"
            src="/placeholder-project-ind.png"
            alt="" />
        </div>
        <div class="body mx-auto">
          <ProjectTextBlock title="Introdução" />
          <ProjectTextBlock title="Desafios" />
          <ProjectTextBlock title="Processo" :hasImage="true" />
          <ProjectTextBlock title="Resultado" :isLast="true" />
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import ProjectTextBlock from '../components/ProjectTextBlock.vue'

import { mapStores } from 'pinia'
import useProjectsStore from '@/stores/projects'
// projectsStore.projects[projectId - 1]
// id,name,description,tech,image,link

export default {
  name: 'Project',
  components: {
    ProjectTextBlock,
  },
  computed: {
    ...mapStores(useProjectsStore),
  },
  mounted() {
    // scroll to top
    // window.scrollTo(0, 0)
  },
}
</script>

<style scoped></style>
