<template>
  <section>
    <h2 class="subtitle mb-8"><slot name="title" /></h2>
    <ul>
      <li v-for="image in images" :key="image.id" class="grid-container">
        <div class="images self-start">
          <nuxt-img v-if="image.src" :src="image.src" :alt="image.alt" loading="lazy" class="image" @load="addMediumZoom"/>
        </div>

        <div class="intro md:place-self-start">
          <div v-if="image.body" class="md-content" v-html="$md.render(image.body)"/>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addMediumZoom() {
      console.log('Yani');
      this.$nextTick(() => {
        console.log('YaniBrani');
        mediumZoom('.image', {
          margin: 32,
          background: 'var(--bg)',
          scrollOffset: 100,
        });
      });
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
    grid-template-columns: 2fr 1fr;
    grid-template-areas: "images intro";
  }
}

.images { grid-area: images; }
.intro { grid-area: intro; }
</style>