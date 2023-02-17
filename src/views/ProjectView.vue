<template>
  <div class="container mx-auto mt-24 flex px-4 max-md:mt-12 max-md:px-6">
    <aside
      class="fixed flex w-2/12 flex-col gap-y-2 max-md:hidden max-md:w-auto">
      <a class="text-black hover:text-purple" href="#introducao">Introdução</a>
      <a class="text-black hover:text-purple" href="#desafios">Desafios</a>
      <a class="text-black hover:text-purple" href="#processo">Processo</a>
      <a class="text-black hover:text-purple" href="#resultado">Resultado</a>
    </aside>

    <div class="mx-auto w-10/12 pl-12 max-md:w-full max-md:pl-0">
      <article>
        <div class="head mx-auto flex flex-col items-center">
          <h2
            class="text-5xl font-semibold text-black dark:text-blackDarkMode max-md:text-4xl">
            Project Name
          </h2>
          <p class="mt-4 max-md:text-sm">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <img
            class="bob-on-hover mt-16 max-md:mt-8"
            src="/placeholder-project-ind.png"
            alt="" />
        </div>
        <div class="body mx-auto">
          <!-- available props -->
          <!-- title, text, hasImage, legenda, textImage, text2, isLast, takeawayText ,gallery1, gallery2, gallery3 -->

          <ProjectTextBlock id="introducao" title="Introdução" />
          <ProjectTextBlock id="desafios" title="Desafios" />
          <ProjectTextBlock id="processo" title="Processo" :hasImage="true" />
          <ProjectTextBlock id="resultado" title="Resultado" :isLast="true" />
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
    window.scrollTo(0, 0)
  },
}
</script>

<style scoped></style>
