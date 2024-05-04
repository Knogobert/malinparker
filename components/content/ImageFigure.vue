<template>
  <figure class="">
    <img :src="src" :alt="alt" :fit="fit" :height="height" :layout="layout" loading="lazy" class="image" />
    <figcaption :class="{ 'sr-only': !figcaption }" v-text="figcaption || alt" />
  </figure>
</template>

<script setup>
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  figcaption: {
    type: [Boolean, String],
    default: false,
  },
  fit: {
    type: String,
    default: '',
  },
  height: {
    type: [String, Number],
    default: '',
  },
  layout: {
    type: String,
    default: '',
  },
});
</script>
