<template>
  <article v-if="project" class="project project-design">
    <nuxt-link :to="`/designs/${project.slug}`">
      <figure class="p-4" v-if="project.cover && project.cover.src">
        <img :src="project.cover.src" :alt="project.cover.alt || ''" fit="cover" />
        <figcaption>
          <h4>{{ project.title }}</h4>
          <!-- <p>{{ project.excerpt }}</p> -->
          <button class="btn btn-ghost w-full md:w-auto" tabindex="-1">read more</button>
        </figcaption>
      </figure>
    </nuxt-link>
  </article>
</template>

<script>
export default {
  props: {
    project: Object,
  },
}
</script>

<style lang="postcss" scoped>
.project-design > a {
  @apply flex flex-col justify-between rounded-3xl;
  -moz-outline-radius: 1.5rem;

  & figure > img {
    @apply rounded-2xl shadow-sm transition-shadow duration-200 ease-in-out;
  }

  & .btn {
    @apply transition-colors duration-200 ease-in-out;
  }

  &:active,
  &:hover,
  &:focus {
    @apply bg-primary-700;

    & figure > img {
      @apply shadow-xl;
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
      /* & > div {
        @apply m-2;
      } */
    }
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