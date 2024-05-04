<template>
  <section class="grid-container" :class="{ 'grid--split': split, 'grid--below': below, [className]: className }">
    <div class="headline self-start">
      <h2 class="subtitle" v-text="title" />
    </div>

    <div class="intro sm:place-self-start md-content">
      <ContentSlot />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  split: {
    type: Boolean,
    default: false,
  },
  below: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
  },
});
</script>

<style lang="postcss" scoped>
.grid-container {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1rem;
  grid-template-areas:
    "headline"
    "intro";
  place-items: stretch;
}

@screen sm {
  .grid-container {
    @apply max-w-4xl mx-auto;
    /* @apply max-w-5xl mx-auto; */
    gap: 2rem 1rem;

    /* :not(.images, img, figure, figure *) {
      @apply max-w-4xl mx-auto;
    } */

    &.grid--split {
      max-width: 100%;
      gap: 1rem;
      grid-template-columns: 1fr 2fr;
      grid-template-areas: "headline intro";
    }

    &.grid--below {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "headline headline"
      ". intro";
    }
  }
}

.headline {
  grid-area: headline;
}

.intro {
  grid-area: intro;
}
</style>