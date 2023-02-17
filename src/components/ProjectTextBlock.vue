<template>
  <div class="mt-28">
    <div class="flex flex-col gap-y-8 px-8">
      <h2 class="text-3xl font-semibold text-purple dark:brightness-150">
        <!-- Introdução -->
        {{ title }}
      </h2>
      <p class="text-base font-normal leading-7">
        {{ text }}
      </p>
      <div v-if="hasImage" class="">
        <div class="image mt-8">
          <img class="w-full" src="/placeholder-project-2.png" alt="" />
          <p class="mt-2 pl-8 text-sm text-gray">
            {{ legenda }}
          </p>
        </div>
        <p class="mt-12 text-base font-normal leading-7">
          {{ text2 }}
        </p>
      </div>
      <div
        v-if="!isLast"
        class="line mt-8 w-full border border-slate-200 dark:border-grayDarkMode"></div>
      <div v-if="isLast">
        <div
          class="takeaway mt-12 rounded-3xl border-2 border-middlePurple bg-lightPurple">
          <div class="text py-12 px-11">
            <p class="font-semibold uppercase text-purple">TAKEAWAY</p>
            <p class="mt-4 text-base font-normal leading-7 text-black">
              Lorem ipsum dolor sit amet consectetur. Et eu nisl tortor diam
              cras sit. Pulvinar quam lectus facilisis etiam. Vitae molestie vel
              suscipit enim dictumst velit tristique mi sed. Orci in amet elit
              egestas facilisis magna in. In est amet eget et quisque eu.
            </p>
          </div>
        </div>
        <div class="gallery mt-12">
          <div class="top flex flex-row max-md:flex-col">
            <img
              class="bob-on-hover w-2/5"
              src="/placeholder-project-2.png"
              alt="" />
            <img
              class="bob-on-hover w-3/5 pl-4"
              src="/placeholder-project-2.png"
              alt="" />
          </div>
          <div class="bottom mt-4">
            <img
              class="bob-on-hover w-full"
              src="/placeholder-project-2.png"
              alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectTextBlock',

  props: {
    title: {
      type: String,
      default: 'Title',
    },
    text: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis. Eget ut facilisis at ut risus nec eget enim purus. Vitae sodales neque in id egestas proin non sed scelerisque. Bibendum laoreet eget a et.',
    },
    hasImage: {
      type: Boolean,
      default: false,
    },
    textImage: {
      type: String,
      default: '',
    },
    legenda: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra.',
    },
    text2: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus felis',
    },
    isLast: {
      type: Boolean,
      default: false,
    },
    gallery1: {
      type: String,
      default: '',
    },
    gallery2: {
      type: String,
      default: '',
    },
    gallery3: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
.take-purple-50 {
  color: rgba(84, 60, 217, 0.5);
}
.take-purple-10 {
  color: rgba(84, 60, 217, 0.1);
}
</style>
