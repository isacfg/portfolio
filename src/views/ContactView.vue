<template>
  <Header />
  <div class="about container mx-auto flex flex-row px-12 max-md:flex-col">
    <div class="left w-3/5 max-md:w-full">
      <div class="text">
        <h1 class="text-5xl font-semibold text-black">
          Meu nome é <span class="text-purple">Isaac</span> 👋😊
        </h1>
        <p class="font-regular text-base leading-7 text-black">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences . Currently, I’m focused on
          building accessible, human-centered produts at Upstatement.
        </p>
        <p class="font-regular text-base leading-7 text-black">
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences . Currently, I’m focused on
          building accessible, human-centered produts at Upstatement.
        </p>
      </div>
      <div class="btns-socials flex items-center justify-between">
        <div class="btns">
          <Button text="currículo" type="btn-secondary" />
        </div>
        <div class="socials-icons flex gap-x-6 pr-8 max-md:pr-0">
          <a
            target="_blank"
            class="bob-on-hover hover:text-purple"
            href="https://www.behance.net/isaacf">
            <img
              src="../assets/icons/behance-light.svg"
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
              class="max-md:w-6"
              alt=""
              srcset="" />
          </a>
        </div>
      </div>
    </div>
    <div class="right ml-auto">
      <img
        src="../assets/placeholder-about.png"
        class="ml-auto"
        alt=""
        srcset="" />
    </div>
  </div>
  <Footer />
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 90vh;
  }
}
</style>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Button from '../components/Button.vue'
</script>
