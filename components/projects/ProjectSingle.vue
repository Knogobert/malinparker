<template>
  <article v-if="project">
    <figure class="" v-if="project.featuredImage && project.featuredImage.src">
      <nuxt-image class="rounded-2xl" :src="project.featuredImage.src" :alt="project.featuredImage.alt" fit="cover" />
    </figure>
    <h4 class="subtitle">{{ project.title }}</h4>
    <p>{{ project.excerpt }}</p>
  </article>
</template>

<script>
export default {
  props: {
    project: Object,
  },
}
</script>