<template>
  <section>
    <h2 class="subtitle mb-8" v-text="title" />
    <ul>
      <li v-for="image in images" :key="image.id" class="grid-container">
        <div class="images self-start">
          <img v-if="image.src" :src="image.src" :alt="image.alt" loading="lazy" class="image" />
        </div>

        <div class="intro md:place-self-start">
          <!-- <div v-if="image.body" class="md-content" v-text="image.body" /> -->
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
  gap: 1rem 1rem;
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