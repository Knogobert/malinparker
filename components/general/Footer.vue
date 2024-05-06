<template>
  <footer class="w-full max-w-6xl mx-auto mt-8 mb-24">
    <General-ContactCTA :button="props.button" />
  </footer>
</template>

<script setup>
const props = defineProps({
  button: {
    type: Boolean,
    default: false,
  },
})
</script>