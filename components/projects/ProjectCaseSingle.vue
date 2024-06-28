<template>
  <article class="project project-case w-full">
    <NuxtLink :to="`/cases/${project.slug}`">
      <figure class="p-4 md:p-8" v-if="project.cover?.src">
        <!-- <Skeleton-ContentPlaceholders v-show="loadingImage">
          <Skeleton-ContentPlaceholdersImg class="w-full p-4 rounded-xl opacity-50"
            :class="{ 'h-64': !project.cover.height }" :style="`height: ${project.cover.height}px`" />
        </Skeleton-ContentPlaceholders> -->
        <NuxtImg :src="project.cover.src" :alt="project.cover.alt || ''" loading="lazy" fit="cover" class="image-ph"
          :class="loadingImage ? '' : 'show'" @load="loadingImage = false" :placeholder="[640, 480]" />
      </figure>
      <div class="intro">
        <h4 class="subtitle mb-2">{{ project.title }}</h4>
        <p v-html="project?.excerpt ?? project?.description" />
        <footer>
          <button class="btn btn-ghost w-full md:w-auto" :class="{

          }" tabindex="-1" :disabled="!project.ready"
            v-text="project.ready ? 'read case study' : 'case study coming soon'"></button>
        </footer>
      </div>
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
.project-case > a {
  @apply flex flex-col justify-between rounded-3xl; /* bg-gray-800; */
  -moz-outline-radius: 1.5rem;

  &[disabled='true'],
  &:disabled  {
    @apply pointer-events-none;
  }

  & figure > img {
    @apply opacity-25 rounded-xl shadow-sm transition duration-200 ease-in-out w-full;
    &.show {
      @apply opacity-100;
    }
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

    & footer .btn:not(:disabled) {
      @apply bg-primary text-white border-primary;
    }
  }
}
@screen md {
  .project-case > a {
    @apply flex-row;

    & figure {
      flex: 1 1 70%;
      @apply self-stretch;
      & img {
        @apply h-full object-cover aspect-video;
      }
      /* & > div {
        @apply m-2;
      } */
    }
    & .intro {
      flex: 1 1 30%;
      @apply p-6 text-sm;
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
    /* @apply bg-white; */
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