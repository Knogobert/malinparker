<template>
  <article class="project project-case">
    <nuxt-link :to="`/cases/${project.slug}`">
      <figure class="p-4" v-if="project.cover && project.cover.src">
        <img :src="project.cover.src" :alt="project.cover.alt || ''" loading="lazy" fit="cover" />
      </figure>
      <div class="intro">
        <h4 class="subtitle mb-2">{{ project.title }}</h4>
        <p>{{ project.excerpt }}</p>
        <footer>
          <button class="btn btn-ghost w-full md:w-auto" tabindex="-1">read case study</button>
        </footer>
      </div>
    </nuxt-link>
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
}
</script>

<style lang="postcss" scoped>
.project-case > a {
  @apply flex flex-col justify-between rounded-3xl;
  -moz-outline-radius: 1.5rem;

  & figure > img {
    @apply rounded-xl shadow-sm transition-shadow duration-200 ease-in-out;
  }

  & .intro {
    @apply flex flex-col p-4 pt-0 self-stretch;
    & > p {
      @apply flex-1;
    }
  }
  & footer {
    @apply flex-initial self-stretch pt-6;
    & .btn {
      @apply transition-colors duration-200 ease-in-out;
    }
  }

  &:active,
  &:hover,
  &:focus {
    @apply bg-primary-700;

    & figure > img {
      @apply shadow-xl;
    }

    & .intro {
      & .subtitle,
      & p {
        @apply text-primary-100;
      }
    }

    & footer .btn {
      @apply bg-primary text-white border-primary;
    }
  }
}
@screen md {
  .project-case > a {
    @apply flex-row;

    & figure {
      flex: 1 1 60%;
      @apply self-center;
      /* & > div {
        @apply m-2;
      } */
    }
    & .intro {
      flex: 1 1 40%;
      @apply p-6;
    }
     & footer {
      @apply self-end;
    }
  }
  .project-case.project--reverse > a {
    @apply flex-row-reverse;
  }
}

.light-mode {
  & .project-case > a {
    &:active,
    &:hover,
    &:focus {
      @apply bg-primary-100;

      & .intro {
        & .subtitle,
        & p {
          @apply text-primary-600;
        }
      }
    }
  }
}
</style>