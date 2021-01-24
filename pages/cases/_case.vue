<template>
  <article
    v-if="casePost"
    class="main article"
  >
    <h1 class="article-title">{{ casePost.title }}</h1>
    <p class="mt-4">{{ casePost.excerpt }}</p>
    <img
      v-if="casePost.cover"
      class="cover-image"
      :src="casePost.cover.src"
      :alt="casePost.cover.alt"
    >
    <div
      class="block mt-8 mb-4"
      v-html="$md.render(casePost.body)"
    />
    <div v-if="casePost.gallery">
      <img
        v-for="image in casePost.gallery"
        class="image"
        :key="image.id"
        :src="image"
      >
    </div>
  </article>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { casePost: payload }
    else
      return {
        casePost: await require(`~/assets/content/cases/${params.case}.json`)
      }
  }
}
</script>
