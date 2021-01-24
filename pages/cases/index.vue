<template>
  <main
    v-if="casePosts"
    class="main"
  >
    <h1 class="title text-left">Case Studies</h1>
    <ul
      v-for="(casePost, index) in casePosts"
      :key="index"
      class="articles"
    >
      <nuxt-link
        class="article article--clickable"
        :to="`/cases/${casePost.slug}`"
      >
        <h3 class="article-title">{{ casePost.title }}</h3>
        <div class="mt-4 mb-2">
          <h2 class="inline py-1 px-2 mr-1 bg-primary text-white font-medium rounded-sm dark:bg-primary">{{ casePost.date }}</h2>
          <p class="inline">{{ casePost.excerpt }}</p>
        </div>
      </nuxt-link>
    </ul>
  </main>
</template>
<script>
export default {
  computed: {
    casePosts() {
      return this.$store.state.casePosts
    }
  }
}
</script>
