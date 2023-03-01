<template>
  <div class="container mx-auto mt-24 flex px-4 max-md:mt-12 max-md:px-6">
    <aside
      class="fixed flex w-2/12 flex-col gap-y-2 max-md:hidden max-md:w-auto">
      <a
        class="text-black hover:text-purple dark:text-blackDarkMode"
        href="#introducao"
        >Introdução</a
      >
      <a
        class="text-black hover:text-purple dark:text-blackDarkMode"
        href="#desafios"
        >Desafios</a
      >
      <a
        class="text-black hover:text-purple dark:text-blackDarkMode"
        href="#processo"
        >Processo</a
      >
      <a
        class="text-black hover:text-purple dark:text-blackDarkMode"
        href="#resultado"
        >Resultado</a
      >
    </aside>

    <div
      v-if="projectsStore.projects[$route.params.id - 1]"
      class="mx-auto w-10/12 pl-12 max-md:w-full max-md:pl-0">
      <article>
        <div class="head mx-auto flex flex-col items-center">
          <h2
            class="text-5xl font-semibold text-black dark:text-blackDarkMode max-md:text-4xl">
            {{ projectsStore.projects[$route.params.id - 1].name }}
          </h2>
          <p
            class="mt-4 w-2/3 text-center dark:text-grayDarkMode max-md:text-sm">
            {{ projectsStore.projects[$route.params.id - 1].tech }}
          </p>
          <!-- SOCIALS -->
          <div class="socials-icons mt-6 flex gap-x-6">
            <a
              target="_blank"
              class="bob-on-hover dark hover:text-purple dark:text-purpleDarkMode"
              :href="projectsStore.projects[$route.params.id - 1].linkBehance">
              <img
                :src="behancePath"
                id="behance"
                class="max-md:w-6"
                alt=""
                srcset="" />
            </a>
            <a
              target="_blank"
              class="bob-on-hover dark hover:text-purple dark:text-purpleDarkMode"
              :href="projectsStore.projects[$route.params.id - 1].linkGithub">
              <img
                :src="githubPath"
                id="github"
                class="max-md:w-6"
                alt=""
                srcset="" />
            </a>
          </div>
          <!-- FIM SOCIALS -->
          <img
            class="bob-on-hover mt-16 max-md:mt-8"
            src="/placeholder-project-ind.png"
            alt="" />
        </div>
        <div class="body mx-auto">
          <!-- available props -->
          <!-- title, text, hasImage, legenda, textImage, text2, isLast, takeawayText ,gallery1, gallery2, gallery3 -->

          <ProjectTextBlock
            id="introducao"
            title="Introdução"
            :text="projectsStore.projects[$route.params.id - 1].introd" />
          <ProjectTextBlock
            id="desafios"
            title="Desafios"
            :text="projectsStore.projects[$route.params.id - 1].challenge" />
          <ProjectTextBlock
            id="processo"
            title="Processo"
            :hasImage="true"
            :text="projectsStore.projects[$route.params.id - 1].process1"
            :text2="projectsStore.projects[$route.params.id - 1].process2"
            :legenda="
              projectsStore.projects[$route.params.id - 1].processLegenda
            " />
          <ProjectTextBlock
            id="resultado"
            title="Resultado"
            :text="projectsStore.projects[$route.params.id - 1].result"
            :takeawayText="
              projectsStore.projects[$route.params.id - 1].takeaway
            "
            :isLast="true" />
        </div>
      </article>
    </div>
    <!-- Se projeto não for encontrado -->
    <div v-else class="body mx-auto w-10/12 pl-12 max-md:w-full max-md:pl-0">
      <NotFound />
    </div>
  </div>

  <!-- Availabe data -->
  <!--  projectsStore.projects[$route.params.id - 1] -->
  <!--  projectsStore.projects[$route.params.id - 1].id -->
  <!--  projectsStore.projects[$route.params.id - 1].name -->
  <!--  projectsStore.projects[$route.params.id - 1].description -->
  <!--  projectsStore.projects[$route.params.id - 1].tech -->
  <!--  projectsStore.projects[$route.params.id - 1].image -->
  <!--  projectsStore.projects[$route.params.id - 1].linkDemo -->
  <!--  projectsStore.projects[$route.params.id - 1].linkGithub -->
  <!--  projectsStore.projects[$route.params.id - 1].linkBehance -->
  <!--  projectsStore.projects[$route.params.id - 1].introd -->
  <!--  projectsStore.projects[$route.params.id - 1].challenge -->
  <!--  projectsStore.projects[$route.params.id - 1].process1 -->
  <!--  projectsStore.projects[$route.params.id - 1].processImage -->
  <!--  projectsStore.projects[$route.params.id - 1].process2 -->
  <!--  projectsStore.projects[$route.params.id - 1].processLegenda -->
  <!--  projectsStore.projects[$route.params.id - 1].result -->
  <!--  projectsStore.projects[$route.params.id - 1].takeaway -->
  <!--  projectsStore.projects[$route.params.id - 1].gallery1 -->
  <!--  projectsStore.projects[$route.params.id - 1].gallery2 -->
  <!--  projectsStore.projects[$route.params.id - 1].gallery3 -->
</template>

<script>
import ProjectTextBlock from '../components/ProjectTextBlock.vue'
import NotFound from '../components/NotFound.vue'

import { mapStores } from 'pinia'
import useProjectsStore from '@/stores/projects'
import projects from '../stores/projects'

export default {
  name: 'Project',
  components: {
    ProjectTextBlock,
    NotFound,
  },
  data() {
    return {
      behancePath: '',
      githubPath: '',
      linkedinPath: '',
    }
  },
  computed: {
    ...mapStores(useProjectsStore),
  },
  props: {
    isDarkHome: {
      type: Boolean,
    },
  },
  mounted() {
    // scroll to top
    window.scrollTo(0, 0)
    if (this.isDarkHome) {
      this.behancePath = '/icons/behance-dark.svg'
      this.githubPath = '/icons/github-dark.svg'
    } else {
      this.behancePath = '/icons/behance-light.svg'
      this.githubPath = '/icons/github-light.svg'
    }
  },
  updated() {
    if (this.isDarkHome) {
      this.behancePath = '/icons/behance-dark.svg'
      this.githubPath = '/icons/github-dark.svg'
    } else {
      this.behancePath = '/icons/behance-light.svg'
      this.githubPath = '/icons/github-light.svg'
    }
  },
}
</script>

<style scoped>
.body {
  min-height: 60vh;
}
</style>
