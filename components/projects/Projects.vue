<template>
  <div class="projects" v-if="posts && posts.length !== 0" :class="classes">
    <template v-if="type === 'case'">
      <project-case-single
        v-for="(post, i) in posts"
        :key="post.id"
        :project="post"
        :class="{ 'project--reverse': (i + 1) % 2 === 0 }"
      />
    </template>
    <template v-else-if="type === 'design'">
      <project-design-single
        v-for="post in posts"
        :key="post.id"
        :project="post"
      />
    </template>
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

.projects-designs {
  display: grid;
  grid-gap: 0.5rem; /* [1] Add some gap between rows and columns */
  grid-template-columns: repeat( auto-fill, minmax( 200px, 1fr ) ); /* [2] Make columns adjust according to the available viewport */
  grid-auto-rows: 250px; /* [3] Set the height for implicitly-created row track */
}
</style>