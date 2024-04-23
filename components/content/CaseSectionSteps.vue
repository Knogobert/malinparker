<template>
  <section class="steps">
    <h2 class="subtitle mb-4" v-text="title" />
    <slot />
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
});
</script>