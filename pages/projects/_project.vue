<template>
  <article v-if="projectPost" class="main">
    <h1 class="block mb-4 font-bold">{{ projectPost.title }}</h1>
    <p class="my-4">{{ projectPost.description }}</p>
    <div class="block mt-8 mb-4" v-html="$md.render(projectPost.body)" />
  </article>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { projectPost: payload }
    else
      return {
        projectPost: await require(`~/assets/content/projects/${params.project}.json`)
      }
  }
}
</script>
