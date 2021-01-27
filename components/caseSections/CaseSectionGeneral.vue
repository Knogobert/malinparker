<template>
  <section class="grid-container" :class="{ below }">
    <div class="headline self-start">
      <h2 class="subtitle"><slot name="title" /></h2>
    </div>

    <div class="intro sm:place-self-start">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    below: {
      type: Boolean,
      default: false,
    },
  },
}
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
      grid-template-columns: auto;
      grid-template-rows: auto 1fr;
      grid-template-areas:
        "headline"
        "intro";
    }
  }
}

.headline { grid-area: headline; }
.intro { grid-area: intro; }
</style>