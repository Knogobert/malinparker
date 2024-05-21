<template>
  <figure class="">
    <img :src="src" :alt="alt" :fit="fit" :height="height" loading="lazy" class="image w-full" :class="class" />
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
  class: {
    type: String,
    default: '',
  },
});
</script>
