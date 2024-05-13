<template>
  <figure class="">
    <div class="flex justify-stretch gap-4">
      <img v-for="img in images" :src="img.src" :alt="img?.alt" :fit="img?.fit" :height="img?.height"
        :layout="img?.layout" loading="lazy" class="image w-full flex-auto" style="margin-top: 0;" />
    </div>
    <figcaption class="mt-2" :class="{ 'sr-only': !figcaption }" v-text="figcaption || alt" />
  </figure>
</template>

<script setup>
const props = defineProps({
  images: {
    type: Array,
    default: () => [],
  },
  figcaption: {
    type: [Boolean, String],
    default: false,
  },
});
</script>
