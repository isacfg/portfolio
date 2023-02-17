<template>
  <div class="mt-28">
    <div class="flex flex-col gap-y-8 px-16">
      <h2 class="text-3xl font-semibold text-purple dark:brightness-150">
        <!-- Introdução -->
        {{ title }}
      </h2>
      <p class="text-base font-normal leading-7">
        <!-- Lorem ipsum dolor sit amet consectetur. Eu a maecenas leo dictum
        tincidunt in id viverra. In molestie sit nisi metus fames. Eget tellus
        venenatis proin sit urna scelerisque sed eu in. Volutpat in leo faucibus
        felis. Eget ut facilisis at ut risus nec eget enim purus. Vitae sodales
        neque in id egestas proin non sed scelerisque. Bibendum laoreet eget a
        et. -->

        {{ text }}
      </p>
      <div
        class="line mt-8 w-full border border-slate-200 dark:border-grayDarkMode"></div>
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
  },
}
</script>

<style></style>
