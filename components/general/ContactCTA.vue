<template>
  <div class="cta flex flex-col sm:flex-row">
    <div v-if="props.button" class="flex-auto mt-4 sm:mt-0">
      <a href="mailto:malin.parker@hiq.se" class="btn btn-ghost">get in touch</a>
    </div>
    <div v-else class="flex-auto mt-4 sm:mt-0">
      <h4 class="text-base">&nbsp;</h4>
      <p class="text-sm mt-0">
        Used <a href="https://tokotype.github.io/plusjakarta-sans/" ref="nofollow noopener">+Jakarta
          Sans</a> from <a href="https://www.tokotype.com/" ref="nofollow noopener">Tokotype</a>
      </p>
    </div>
    <div class="flex-1"></div>
    <div class="flex-auto text-left sm:text-right mt-4 sm:mt-0 sm:ml-4">
      <h4 class="font-mono text-base uppercase text-gray dark:text-primary-300">Contact</h4>
      <a href="mailto:malin.parker@hiq.se"
        class="text-primary dark:text-primary-400 hover:underline mt-0">malin.parker@hiq.se</a>
    </div>
    <div class="flex-auto text-left sm:text-right mt-4 sm:mt-0 sm:ml-4">
      <h4 class="font-mono text-base uppercase text-gray dark:text-primary-300">Location</h4>
      <p class="text-primary dark:text-primary-400 mt-0">Gothenburg</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  button: {
    type: Boolean,
    default: false,
  },
})
</script>