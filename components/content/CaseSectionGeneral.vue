<template>
  <section class="grid-container" :class="{ below, [className]: className }">
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
  gap: 1rem 1rem;
  grid-template-areas:
    "headline"
    "intro";
  place-items: stretch;
}

@screen sm {
  .grid-container {
    grid-template-columns: 1fr 2fr;
    grid-template-areas: "headline intro";

    &.below {
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