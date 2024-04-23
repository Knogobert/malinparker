<template>
  <div class="step grid-container" :class="gridClasses">
    <div class="images self-start">
      <img v-for="image in images" :key="image.id" :src="image.src" :alt="image?.alt" loading="lazy" class="image" />
    </div>

    <div class="intro md:place-self-start">
      <h3 class="text-2xl md:text-3xl mb-4" v-text="title" />
      <ContentSlot class="md-content" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    images: {
      type: Array,
      default: () => [],
      validator: (images) => images.every((image) => image.src),
    },
    reverseLayout: {
      type: Boolean,
      default: false,
    },
    largerImages: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    gridClasses() {
      return {
        'grid--reverse': this.reverseLayout,
        'grid--only-text': this.images.length === 0,
        'grid--larger-images': this.largerImages,
      };
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
    "intro"
    "images";
  place-items: stretch;

}

@screen md {
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

    &.grid--larger-images {
      grid-template-columns: 2fr 1fr;

      &.grid--reverse {
        grid-template-columns: 1fr 2fr;
      }
    }
  }
}

.images {
  grid-area: images;
}

.intro {
  grid-area: intro;
}
</style>