<template>
  <!-- <Header /> -->
  <div
    class="container mx-auto mt-24 flex flex-row px-24 max-md:mt-12 max-md:flex-col max-md:px-6">
    <div class="left w-3/5 max-md:w-full">
      <div class="text">
        <h1
          class="text-5xl font-semibold text-black dark:text-blackDarkMode max-md:text-4xl">
          <span>
            Meu nome é
            <span class="text-purple dark:brightness-150">Isaac</span></span
          >
          <span> 👋😊</span>
        </h1>
        <p
          class="font-regular mt-4 text-base leading-7 text-black dark:text-grayDarkMode max-md:mt-8 max-md:text-sm max-md:leading-7">
          Apaixonado por design e tecnologia, impulsionado pela inovação
        </p>
        <p
          class="font-regular mt-4 text-base leading-7 text-black dark:text-grayDarkMode max-md:text-sm max-md:leading-7">
          Desenvolvedor frontend especializado em Vue.js. Comecei a minha
          carreira como desenvolvedor web há mais de 3 anos e, desde então,
          tenho me dedicado ao desenvolvimento de sites e sistemas utilizando
          tecnologias como HTML, CSS, JavaScript e frameworks como o Bootstrap,
          Bulma e Tailwind.
        </p>
        <p
          class="font-regular mt-4 text-base leading-7 text-black dark:text-grayDarkMode max-md:text-sm max-md:leading-7">
          Atualmente sou estudante de Ciência e Tecnologia da Universidade
          Federal do Rio Grande do Norte e desenvolvedor front-end na EJECT
        </p>
      </div>
      <div class="btns-socials mt-8 flex items-center justify-between">
        <div class="btns">
          <Button
            text="currículo"
            :to="projectsStore.resume"
            type="btn-secondary" />
        </div>
        <div class="socials-icons flex gap-x-6 pr-8 max-md:pr-0">
          <a
            target="_blank"
            class="bob-on-hover hover:text-purple"
            href="https://www.behance.net/isaacf">
            <img
              src="../assets/icons/behance-light.svg"
              id="behance"
              class="max-md:w-6"
              alt=""
              srcset="" />
          </a>
          <a
            target="_blank"
            class="bob-on-hover hover:text-purple"
            href="https://github.com/isacfg">
            <img
              src="../assets/icons/github-light.svg"
              id="github"
              class="max-md:w-6"
              alt=""
              srcset="" />
          </a>
          <a
            target="_blank"
            class="bob-on-hover hover:text-purple"
            href="https://www.linkedin.com/in/isaacfig/">
            <img
              src="../assets/icons/linkedin-light.svg"
              id="linkedin"
              class="max-md:w-6"
              alt=""
              srcset="" />
          </a>
        </div>
      </div>
    </div>
    <div
      class="right bob-on-hover ml-auto max-md:ml-0 max-md:mt-12 max-md:flex max-md:justify-center">
      <img
        src="../assets/contact-photo.png"
        class="ml-auto max-md:ml-0 max-md:w-3/4"
        alt=""
        srcset="" />
    </div>
  </div>
  <div
    class="container mx-auto mt-24 flex flex-row px-24 max-md:flex-col max-md:px-4">
    <div class="left w-1/2 max-md:w-full">
      <h2
        class="text-2xl font-medium text-black dark:text-blackDarkMode max-md:text-xl">
        Habilidades
        <span class="text-purple dark:brightness-150">técnicas</span>
      </h2>
      <div class="mt-4 flex flex-row gap-x-10 max-md:gap-x-4">
        <div
          class="flex flex-col gap-y-3 text-black dark:text-grayDarkMode max-md:text-sm">
          <p>Figma</p>
          <p>Wordpress</p>
          <p>HTML/CSS</p>
        </div>
        <div
          class="flex flex-col gap-y-3 text-black dark:text-grayDarkMode max-md:text-sm">
          <p>SASS</p>
          <p>Bootstrap/Bulma</p>
          <p>Tailwind/DaisyUI</p>
        </div>
        <div
          class="flex flex-col gap-y-3 text-black dark:text-grayDarkMode max-md:text-sm">
          <p>Javascript</p>
          <p>Vuejs</p>
          <p class="hidden">Nuxt/Typescript</p>
        </div>
      </div>
    </div>
    <div class="right">
      <h2
        class="text-2xl font-medium text-black dark:text-blackDarkMode max-md:mt-8 max-md:text-xl">
        Formação <span class="text-purple dark:brightness-150">relevante</span>
      </h2>
      <div class="mt-4">
        <div class="unit">
          <p
            class="font-medium text-black dark:text-grayDarkMode max-md:text-sm">
            Bacharelado em Ciência e Tecnologia, UFRN
          </p>
          <p class="text-sm text-black dark:text-grayDarkMode">
            Jun 2021 / Cursando
          </p>
        </div>
        <div class="unit mt-4">
          <p
            class="font-medium text-black dark:text-grayDarkMode max-md:text-sm">
            Build Web Apps with Vuejs & Firebase, Shaun Peiling - Udemy
          </p>
          <p class="text-sm text-black dark:text-grayDarkMode">
            2022 / Completo
          </p>
        </div>
        <div class="unit mt-4">
          <p
            class="font-medium text-black dark:text-grayDarkMode max-md:text-sm">
            The Web Developer Bootcamp, Colt Steele - Udemy
          </p>
          <p class="text-sm text-black dark:text-grayDarkMode">
            2021 / Completo
          </p>
        </div>
        <div class="unit mt-4">
          <p
            class="font-medium text-black dark:text-grayDarkMode max-md:text-sm">
            Diploma de Ensino Médio, Contemporâneo
          </p>
          <p class="text-sm text-black dark:text-grayDarkMode">
            2017 - 2020 / Completo
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- <Footer /> -->
</template>

<style></style>

<script>
import Button from '../components/Button.vue'

import { mapStores } from 'pinia'
import useProjectsStore from '@/stores/projects'

export default {
  components: {
    Button,
  },
  props: {
    isDarkHome: {
      type: Boolean,
    },
  },
  updated() {
    if (this.isDarkHome) {
      document.getElementById('behance').src =
        '/src/assets/icons/behance-dark.svg'
      document.getElementById('github').src =
        '/src/assets/icons/github-dark.svg'
      document.getElementById('linkedin').src =
        '/src/assets/icons/linkedin-dark.svg'
    } else {
      document.getElementById('behance').src =
        '/src/assets/icons/behance-light.svg'
      document.getElementById('github').src =
        '/src/assets/icons/github-light.svg'
      document.getElementById('linkedin').src =
        '/src/assets/icons/linkedin-light.svg'
    }
  },
  mounted() {
    if (this.isDarkHome) {
      document.getElementById('behance').src =
        '/src/assets/icons/behance-dark.svg'
      document.getElementById('github').src =
        '/src/assets/icons/github-dark.svg'
      document.getElementById('linkedin').src =
        '/src/assets/icons/linkedin-dark.svg'
    } else {
      document.getElementById('behance').src =
        '/src/assets/icons/behance-light.svg'
      document.getElementById('github').src =
        '/src/assets/icons/github-light.svg'
      document.getElementById('linkedin').src =
        '/src/assets/icons/linkedin-light.svg'
    }
  },
  computed: {
    ...mapStores(useProjectsStore),
  },
}
</script>
