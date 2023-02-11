<template>
  <div
    class="mt-36 flex flex-row max-md:mt-24 max-md:flex-col"
    :class="{
      'flex-row-reverse': type === 'text-left',
      'mt-48': isFirst === 'true',
    }">
    <div class="left mx-auto w-1/2 max-md:w-full">
      <img
        src="../assets/placeholder.png"
        alt="Project Photo"
        :class="{
          'mr-auto': type === 'text-right',
          'ml-auto': type === 'text-left',
        }" />
    </div>
    <div
      class="right flex max-h-full w-1/2 flex-col justify-between py-4 max-md:mt-8 max-md:w-full max-md:px-2"
      :class="{
        'mr-auto': type === 'text-left',
        'ml-auto': type === 'text-right',
      }">
      <div class="project-name">
        <h2 class="text-2xl font-medium text-black">
          {{ projectName }}
        </h2>
        <p class="mt-4 text-base font-normal leading-7 text-gray">
          {{ projectDescription }}
        </p>
      </div>
      <div class="project-tech">
        <p class="mt-6 text-lg font-medium text-purple">Tecnologias</p>
        <p class="mt-2 text-base font-normal leading-7 text-gray">
          {{ projectTechs }}
        </p>
      </div>
      <div>
        <a
          :href="projectLink"
          class="bob-on-hover mt-8 flex gap-x-2 text-base font-semibold leading-6 text-purple"
          target="_blank"
          >Ver Projeto
          <span
            ><img src="../assets/icons/arrow-circle-right.svg" alt=""
          /></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCardHome',
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
    projectLink: {
      type: String,
      default: 'https://github.com/isacfg',
    },
    isFirst: {
      type: String,
      default: 'false',
    },
  },
  data() {
    return {
      imagePath: '../assets/placeholder.png',
    }
  },
  methods: {},
}
</script>

<style></style>
