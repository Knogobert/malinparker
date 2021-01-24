<template>
  <div class="projects" v-if="posts && posts.length !== 0">
    <project-single
      v-for="(post, i) in posts"
      :key="post.id"
      :project="post"
      :class="{ 'project--reverse': (i + 1) % 2 === 0 }"
    />
  </div>
</template>

<script>
export default {
  props: {
    posts: Array,
  },
}
</script>

<style lang="postcss" scoped>
.projects {
  & .project {
    & + .project {
      @apply mt-8;
    }
  }
}
</style>