<template>
  <div class="step grid-container" :class="gridClasses">
    <div class="images self-start space-y-16">
      <figure v-for="image in images" :key="image.id" class="">
        <NuxtImg :src="image.src" :alt="image?.alt" loading="lazy" class="image w-full" :class="image?.class" />
        <figcaption class="mt-2" :class="{ 'sr-only': !image.figcaption }" v-text="image.figcaption || alt" />
      </figure>
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
    split: {
      type: Boolean,
      default: true,
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
        'grid--split': this.split,
        'grid--split-reverse': this.split && this.reverseLayout,
        'grid--split-only-text': this.split && this.images.length === 0,
        'grid--split-larger-images': this.split && this.largerImages,
      };
    }
  },
}
</script>

<style lang="postcss" scoped>
.grid-container {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 4rem 1rem;
  grid-template-areas:
    "intro"
    "images";
  place-items: stretch;
}

@screen md {
  .grid-container {
    /* @apply max-w-5xl mx-auto; */

    :not(.images, img, picture, figure, figcaption) {
      @apply max-w-4xl mx-auto;
    }

    &.grid--split-only-text {
      grid-template-columns: 1fr 3fr;

      &.grid--split-reverse {
        grid-template-columns: 3fr 1fr;
      }
    }

    &.grid--split-larger-images {
      grid-template-columns: 2fr 1fr;

      &.grid--split-reverse {
        grid-template-columns: 1fr 2fr;
      }
    }

    &.grid--split {
      max-width: 100%;
      grid-template-columns: 1fr 2fr;
      grid-template-areas: "images intro";

      &.grid--split-reverse {
        grid-template-areas: "intro images";
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