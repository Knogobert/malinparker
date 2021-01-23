<template>
  <article v-if="project" class="project">
    <nuxt-link :to="`/projects/${project.slug}`">
      <figure class="" v-if="project.featuredImage && project.featuredImage.src">
        <nuxt-image :src="project.featuredImage.src" :alt="project.featuredImage.alt" fit="cover" />
      </figure>
      <div class="intro">
        <h4 class="subtitle">{{ project.title }}</h4>
        <p>{{ project.excerpt }}</p>
        <footer>
          <button class="btn btn-ghost">read case study</button>
        </footer>
      </div>
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
.project > a {
  @apply flex flex-col justify-between rounded-3xl;

  & figure > div {
    @apply m-4 rounded-2xl shadow-sm transition-shadow duration-200 ease-in-out;
  }

  & .intro {
    @apply flex flex-col p-4 pt-0 self-stretch;
    & > p {
      @apply flex-1;
    }
  }
  & footer {
    @apply flex-initial self-end pt-6;
    & .btn {
      @apply transition-colors duration-200 ease-in-out;
    }
  }

  &:active,
  &:hover,
  &:focus {
    @apply bg-primary-700;

    & figure > div {
      @apply shadow-xl;
    }

    & footer .btn {
      @apply bg-primary text-white border-primary;
    }
  }
}
/* .project.project--reverse > a {
  @apply ;
} */
@screen md {
  .project > a {
    @apply flex-row;

    & figure {
      flex: 1 1 60%;
      /* & > div {
        @apply m-2;
      } */
    }
    & .intro {
      flex: 1 1 40%;
      @apply p-6;
    }
  }
  .project.project--reverse > a {
    @apply flex-row-reverse;
  }
}

.light-mode {
  & .project > a {
    &:active,
    &:hover,
    &:focus {
      @apply bg-primary-100;

      /* & footer .btn {
        @apply bg-primary text-white border-primary;
      } */
    }
  }
}
</style>