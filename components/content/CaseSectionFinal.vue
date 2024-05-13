<template>
  <section :class="{ 'grid--split': split }">
    <h2 class="subtitle mb-8" v-text="title" />
    <ul>
      <li v-for="image in images" :key="image.id" class="grid-container">
        <div class="images self-start">
          <NuxtPicture v-if="image.src" :src="image.src" :alt="image.alt" loading="lazy" class="image w-full" />
        </div>

        <div class="intro md:place-self-start">
          <ContentSlot class="md-content" />
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  split: {
    type: Boolean,
    default: true,
  },
  images: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="postcss" scoped>
.grid-container {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1rem;
  grid-template-areas:
    "images"
    "intro";
  place-items: stretch;
}

@screen sm {
  .grid-container {
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "images intro";
  }
}

.images {
  grid-area: images;
}

.intro {
  grid-area: intro;
}
</style>