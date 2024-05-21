<template>
  <div class="projects -mx-4" v-if="posts && posts.length !== 0" :class="classes">
    <template v-if="type === 'case'">
      <Projects-ProjectCaseSingle v-for="(post, i) in posts" :key="post.id" :project="post"
        :class="{ 'project--reverse': isReversableLayout && (i + 1) % 2 === 0 }" />
    </template>
    <template v-else-if="type === 'design'">
      <Projects-ProjectDesignSingle v-for="post in posts" :key="post.id" :project="post" />
    </template>
  </div>
  <div v-else>
    Couldn’t find any projects
  </div>
</template>

<script setup>
import { computed } from 'vue';
const { components } = useAppConfig()

const props = defineProps({
  posts: Array,
  type: {
    type: String,
    default: 'case',
    validator: (val) => ['case', 'design'].includes(val)
  }
})

const classes = computed(() => {
  return {
    'projects-cases': props.type === 'case',
    'projects-designs': props.type === 'design',
  };
});

const isReversableLayout = computed(() => components?.case?.reverseLayoutForOddItemsInList ?? true);
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
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
}
</style>