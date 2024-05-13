<template>
  <article class="project project-design size-full" :class="{
    'col-span-full': project.cover.size === 'large',
    'col-span-1': project.cover.size === 'medium'
  }">
    <NuxtLink :to="`/designs/${project.slug}`" class="size-full">
      <figure class="relative p-4 size-full" v-if="project.cover?.src">
        <!-- <skeleton-content-placeholders v-show="loadingImage">
          <skeleton-content-placeholders-img class="w-full p-4 rounded-xl opacity-50"
            :class="{ 'h-64': !project.cover.height }" :style="`height: ${project.cover.height}px`" />
        </skeleton-content-placeholders> -->
        <NuxtPicture :src="project.cover.src" :alt="project.cover.alt || ''" loading="lazy" fit="cover" class="image-ph"
          :class="loadingImage ? '' : 'show'" @load="loadingImage = false"
          :placeholder="project.cover.size === 'large' ? [1090, 820] : [525, 400]"
          :width="project.cover.size === 'large' ? '1090px' : '525px'"
          :height="project.cover.size === 'large' ? '820px' : '720px'"
          :img-attrs="{ class: 'rounded-xl' }" />
        <figcaption
          class="absolute inset-0 flex flex-col justify-between items-between rounded-xl bg-white bg-opacity-75 m-4 p-4">
          <h4 class="font-sans font-bold text-xl dark:text-primary-100 mb-2">{{ project.title }}</h4>
          <button class="btn btn-ghost self-end w-full " tabindex="-1">see more</button>
        </figcaption>
      </figure>
    </NuxtLink>
  </article>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
      validator: (val) => val.slug && val.title,
    },
  },
  data() {
    return {
      loadingImage: true
    }
  },
  mounted() {
    setTimeout(() => { this.loadingImage = false; }, 2000);
  },
}
</script>

<style lang="postcss" scoped>
.project-design > a {
  @apply flex flex-col justify-between rounded-3xl;
  -moz-outline-radius: 1.5rem;

  & figure > img,
  & figure > picture {
    @apply opacity-25 rounded-xl shadow-sm transition duration-200 ease-in-out;
    &.show {
      @apply opacity-100;
    }
  }

  /* & picture img {
    @apply rounded-xl;
  } */

  & figcaption {
    @apply opacity-0 transition-opacity duration-200 ease-in-out;
    backdrop-filter: saturate(25%);
  }

  & .btn {
    @apply transition-colors duration-200 ease-in-out;
  }

  &:active,
  &:hover,
  &:focus {
    @apply bg-primary-700;

    & figure > img,
    & figure > picture {
      @apply shadow-xl;
    }

    & figcaption {
      @apply opacity-100;
    }

    & .btn {
      @apply bg-primary text-white border-primary;
    }
  }
}
@screen md {
  .project-design > a {
    @apply flex-row;

    & figure {
      flex: 1 1 60%;
      @apply self-center;
    }
  }
}

.dark-mode {
  & figcaption {
    @apply bg-black;
    --bg-opacity: 0.75;
  }
}
.light-mode {
  & .project-design > a {
    &:active,
    &:hover,
    &:focus {
      @apply bg-primary-100;

      & figcaption {
        & h4,
        & p {
          @apply text-primary-600;
        }
      }
    }
  }
}
</style>