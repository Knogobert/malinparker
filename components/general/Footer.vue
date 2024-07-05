<template>
  <Motion tag="footer" class="w-full max-w-6xl mx-auto mt-8 mb-24" :initial="{ opacity: 0, scale: 0.85 }"
    :animate="{ opacity: 1, scale: 1 }">
    <General-ContactCTA :button="props.button" />
  </Motion>
</template>

<script setup>
const props = defineProps({
  button: {
    type: Boolean,
    default: false,
  },
})
</script>