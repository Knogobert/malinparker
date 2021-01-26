<template>
  <section class="grid-container" :class="{ 'grid--reverse': reverseLayout, 'grid--only-text': images.length === 0 }">
    <div class="images self-start">
      <nuxt-image v-for="image in images" :key="image.id" :src="image.src" :alt="image.alt"/>
    </div>

    <div class="intro sm:place-self-start">
      <h3 class="text-3xl mb-4" >{{ step.title }}</h3>
      <div v-html="$md.render(step.body)"/>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    step: Object,
    reverseLayout: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    images() {
      return this.step?.images || [];
    }
  },
}
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
    grid-template-columns: 1fr 2fr;
    grid-template-areas: "images intro";
    &.grid--reverse {
      grid-template-areas: "intro images";
    }
    &.grid--only-text {
      grid-template-columns: 1fr 3fr;
      &.grid--reverse {
        grid-template-columns: 3fr 1fr;
      }
    }
  }
}

.images { grid-area: images; }
.intro { grid-area: intro; }
</style>