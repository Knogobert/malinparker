<template>
  <div class="projects -mx-4" v-if="posts && posts.length !== 0" :class="classes">
    <template v-if="type === 'case'">
      <Projects-ProjectCaseSingle v-for="(post, i) in posts" :key="post.id" :project="post"
        :class="{ 'project--reverse': (i + 1) % 2 === 0 }" />
    </template>
    <template v-else-if="type === 'design'">
      <Projects-ProjectDesignSingle v-for="post in posts" :key="post.id" :project="post" />
    </template>
  </div>
  <div v-else>
    Couldn’t find any projects
  </div>
</template>

<script>
export default {
  props: {
    posts: Array,
    type: {
      type: String,
      default: 'case',
      validator: (val) => ['case', 'design'].includes(val)
    }
  },
  computed: {
    classes() {
      return {
        'projects-cases': this.type === 'case',
        'projects-designs': this.type === 'design',
      }
    }
  },
}
</script>

<style lang="postcss" scoped>
.projects {
  & .project-case {
    & + .project-case {
      @apply mt-8;
    }
  }
}

/* .projects-designs {
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat( auto-fill, minmax(20rem, 1fr) );
  grid-auto-rows: auto;
} */
.projects-designs {
  column-count: 1;
  column-gap: 1rem;

  @screen sm {
    column-count: 2;
  }
  @screen lg {
    column-count: 3;
  }

  & .project-design {
    @apply inline-block mb-4
  }
}
</style>