<template>
  <div
    class="mt-36 flex flex-row max-md:mt-24 max-md:flex-col"
    :class="{
      'flex-row-reverse': type === 'text-left',
      'mt-48': isFirst === 'true',
    }">
    <div class="left bob-on-hover mx-auto w-1/2 max-md:w-full">
      <img
        src="../assets/placeholder.png"
        alt="Project Photo"
        :class="{
          'mr-auto': type === 'text-right',
          'ml-auto': type === 'text-left',
        }" />
    </div>
    <div
      class="right flex max-h-full w-1/2 flex-col justify-between pb-4 pt-2 max-md:mt-8 max-md:w-full max-md:px-2 max-md:pt-4"
      :class="{
        'mr-auto': type === 'text-left',
        'ml-auto': type === 'text-right',
      }">
      <div class="project-name">
        <h2
          class="text-2xl font-medium text-black dark:text-blackDarkMode max-md:text-xl">
          {{ projectName }}
        </h2>
        <p
          class="mt-4 text-base font-normal leading-7 text-gray dark:text-grayDarkMode max-md:text-sm max-md:leading-7">
          {{ projectDescription }}
        </p>
      </div>
      <div class="project-tech">
        <p
          class="mt-6 text-lg font-medium text-purple dark:brightness-150 max-md:text-base">
          Tecnologias
        </p>
        <p
          class="mt-2 text-base font-normal leading-7 text-gray dark:text-grayDarkMode max-md:text-sm max-md:leading-7">
          {{ projectTechs }}
        </p>
      </div>
      <div class="mt-8 flex items-center justify-between">
        <RouterLink
          :to="`/projects/${projectId}`"
          class="bob-on-hover flex items-center gap-x-2 text-base font-semibold leading-6 text-purple dark:brightness-150 max-md:text-sm"
          >Ver Projeto
          <span
            ><img
              src="/icons/arrow-circle-right.svg"
              class="max-md:w-4/5"
              alt=""
          /></span>
        </RouterLink>
        <div class="socials-icons flex gap-x-6">
          <a
            target="_blank"
            class="bob-on-hover dark hover:text-purple dark:text-purpleDarkMode"
            :href="behanceLink">
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
            :href="githubLink">
            <img
              :src="githubPath"
              id="github"
              class="max-md:w-6"
              alt=""
              srcset="" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapStores } from 'pinia'
// import useProjectsStore from '@/stores/projects'

import { RouterLink } from 'vue-router'

export default {
  name: 'ProjectCardHome',
  components: {
    RouterLink,
  },
  props: {
    type: {
      type: String,
      default: 'text-right',
    },
    photo: {
      type: String,
      default: '../assets/placeholder.png',
    },
    projectName: {
      type: String,
      default: 'Project Name',
    },
    projectDescription: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra. Tellus sed mauris, quis aenean purus, facilisi at.',
    },
    projectTechs: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus amet eget enim semper porttitor viverra.',
    },
    projectId: {
      type: String,
      default: 'https://github.com/isacfg',
    },
    isFirst: {
      default: 'false',
    },
    isDarkCard: {
      type: Boolean,
      default: false,
    },
    behanceLink: {
      type: String,
      default: 'https://www.behance.net/isaacf',
    },
    githubLink: {
      type: String,
      default: 'https://github.com/isacfg',
    },
  },
  data() {
    return {
      behancePath: '',
      githubPath: '',
      linkedinPath: '',
    }
  },
  mounted() {
    if (this.isDarkCard) {
      this.behancePath = '/icons/behance-dark.svg'
      this.githubPath = '/icons/github-dark.svg'
    } else {
      this.behancePath = '/icons/behance-light.svg'
      this.githubPath = '/icons/github-light.svg'
    }
  },
  updated() {
    if (this.isDarkCard) {
      this.behancePath = '/icons/behance-dark.svg'
      this.githubPath = '/icons/github-dark.svg'
    } else {
      this.behancePath = '/icons/behance-light.svg'
      this.githubPath = '/icons/github-light.svg'
    }
  },
  methods: {},
}
</script>

<style></style>
