<template>
  <div
    class="mt-48 flex flex-row"
    :class="{
      'flex-row-reverse': type === 'text-left',
      'mt-48': isFirst === 'true',
    }">
    <div class="left mx-auto w-1/2">
      <img
        src="../assets/placeholder.png"
        alt="Project Photo"
        :class="{
          'mr-auto': type === 'text-right',
          'ml-auto': type === 'text-left',
        }" />
    </div>
    <div
      class="right max-h-full w-1/2"
      :class="{
        'mr-auto': type === 'text-left',
        'ml-auto': type === 'text-right',
      }">
      <h2 class="text-2xl font-medium text-black">{{ projectName }}</h2>
      <p class="mt-4 text-base font-normal leading-7 text-gray">
        {{ projectDescription }}
      </p>
      <p class="mt-6 text-lg font-medium text-purple">Tecnologias</p>
      <p class="mt-2 text-base font-normal leading-7 text-gray">
        {{ projectTechs }}
      </p>
      <a
        :href="projectLink"
        class="mt-8 flex gap-x-2 text-base font-semibold leading-6 text-purple"
        target="_blank"
        >Ver Projetos
        <span><img src="../assets/icons/arrow-circle-right.svg" alt="" /></span>
      </a>
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

<style>
span {
  color: #543cd9;
}

/*===================*/
/* BOB
/*===================*/

@-webkit-keyframes bob-on-hover {
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@keyframes bob-on-hover {
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@-webkit-keyframes bob-on-hover-float {
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@keyframes bob-on-hover-float {
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
.bob-on-hover {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.bob-on-hover:hover,
.bob-on-hover:focus,
.bob-on-hover:active {
  -webkit-animation-name: bob-on-hover-float, bob-on-hover;
  animation-name: bob-on-hover-float, bob-on-hover;
  -webkit-animation-duration: 0.3s, 1.5s;
  animation-duration: 0.3s, 1.5s;
  -webkit-animation-delay: 0s, 0.3s;
  animation-delay: 0s, 0.3s;
  -webkit-animation-timing-function: ease-out, ease-in-out;
  animation-timing-function: ease-out, ease-in-out;
  -webkit-animation-iteration-count: 1, infinite;
  animation-iteration-count: 1, infinite;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-direction: normal, alternate;
  animation-direction: normal, alternate;
}
</style>
