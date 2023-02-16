<template>
  <!-- NAVBAR -->
  <!-- <Header /> -->

  <!-- <button @click="toggleDark()" class="btn">Toggle {{ isDark }}</button> -->

  <!-- hero -->
  <div class="container mx-auto mt-14">
    <div class="flex flex-row items-center px-4 max-md:flex-col max-md:px-6">
      <div class="left flex flex-col gap-y-24">
        <div class="main flex flex-col gap-y-7">
          <div class="texts">
            <p
              class="text-2xl font-medium text-black dark:text-blackDarkMode max-md:text-xl">
              oii! meu nome é
            </p>
            <h1
              class="dark text-8xl font-semibold text-purple dark:text-purpleDarkMode max-md:text-7xl">
              Isaac F.
            </h1>
          </div>
          <div class="btns flex items-center gap-x-24 max-md:gap-x-10">
            <Button
              text="Currículo"
              type="btn-primary"
              :to="projectsStore.resume" />
            <Button
              to="/projects"
              :isRouter="true"
              text="ver projetos"
              type="btn-secondary" />
          </div>
        </div>
        <div class="texts-b">
          <p
            class="text-xl font-normal text-black dark:text-blackDarkMode max-md:text-left max-md:text-base">
            👩🏻‍💻 Trabalhando como desenvolvedor frontend na
            <a
              href="https://www.ejectufrn.com.br/"
              class="transition-custom bob-on-hover dark text-purple dark:text-purpleDarkMode"
              target="_blank"
              >@EJECT</a
            >
          </p>
          <p
            class="text-xl font-normal text-black dark:text-blackDarkMode max-md:mt-2 max-md:text-left max-md:text-base">
            📚 Estudando Ciências e Tecnologia na
            <a
              class="transition-custom bob-on-hover dark text-purple dark:text-purpleDarkMode"
              target="_blank"
              href="https://www.ufrn.br/"
              >@UFRN</a
            >
          </p>
        </div>
      </div>
      <div
        class="right ml-auto max-md:mt-10 max-md:ml-0 max-md:flex max-md:items-center max-md:justify-center">
        <img
          src="../assets/ilus-light.svg"
          id="ilus"
          class="bob-on-hover max-md:w-3/4"
          alt=""
          srcset="" />
      </div>
    </div>
    <!-- SOCIALS -->
    <div
      class="socials container mx-auto mt-16 flex w-full items-center gap-x-6 px-4">
      <div
        class="line flex-1 border border-black dark:border-blackDarkMode"></div>
      <div class="socials-icons flex gap-x-6">
        <a
          target="_blank"
          class="bob-on-hover dark hover:text-purple dark:text-purpleDarkMode"
          href="https://www.behance.net/isaacf">
          <img
            src="../assets/icons/behance-light.svg"
            class="max-md:w-6"
            alt=""
            srcset="" />
        </a>
        <a
          target="_blank"
          class="bob-on-hover dark hover:text-purple dark:text-purpleDarkMode"
          href="https://github.com/isacfg">
          <img
            src="../assets/icons/github-light.svg"
            class="max-md:w-6"
            alt=""
            srcset="" />
        </a>
        <a
          target="_blank"
          class="bob-on-hover dark hover:text-purple dark:text-purpleDarkMode"
          href="https://www.linkedin.com/in/isaacfig/">
          <img
            src="../assets/icons/linkedin-light.svg"
            class="max-md:w-6"
            alt=""
            srcset="" />
        </a>
      </div>
      <div
        class="line flex-1 border border-black dark:border-blackDarkMode"></div>
    </div>
  </div>

  <!-- arown-down -->
  <!-- <div class="">
    <ArrowDown />
  </div> -->

  <!-- projects -->
  <div class="container mx-auto mt-14 px-4">
    <!-- props -->
    <!-- type, isFirst, photo, projectName, projectDescription, projectTechs, projectLink -->

    <div
      v-for="(project, index) in projectsStore.projects.slice(0, 3)"
      :key="project.id">
      <ProjectCardHome
        :type="index % 2 === 0 ? 'text-right' : 'text-left'"
        :isFirst="index === 0"
        :projectName="project.name"
        :projectDescription="project.description"
        :projectTechs="project.tech"
        :projectLink="project.link"
        :projectPhoto="project.photo" />
    </div>
  </div>

  <div class="container mx-auto mt-16 mb-8 w-full text-center max-md:mt-6">
    <RouterLink
      to="/projects"
      class="bob-on-hover dark border-b-2 border-purple text-base font-semibold text-black hover:text-purple dark:text-blackDarkMode dark:hover:text-purpleDarkMode"
      >Ver mais</RouterLink
    >
  </div>

  <!-- FOOTER -->
  <!-- <Footer /> -->
</template>

<script>
import Button from '@/components/Button.vue'
import ProjectCardHome from '@/components/ProjectCardHome.vue'
import ArrowDown from '../components/ArrowDown.vue'

import { mapStores } from 'pinia'
import useProjectsStore from '@/stores/projects'
import { RouterLink } from 'vue-router'

export default {
  name: 'Home',
  components: {
    Button,
    ArrowDown,
    ProjectCardHome,
    RouterLink,
  },
  computed: {
    ...mapStores(useProjectsStore),
  },
}
</script>

<style>
a.router-link-active {
  color: rgb(84 60 217) !important;
}
.dark a.router-link-active {
  color: #7f5af0 !important;
}

html {
  scroll-behavior: smooth;
}
</style>
