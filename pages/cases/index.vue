<template>
  <main
    v-if="casePosts"
    class="main pb-16"
  >
    <h1 class="title text-left mb-8">UX/UI Case Studies</h1>
    <projects :posts="casePosts" />
  </main>
</template>
<script>
export default {
  computed: {
    casePosts() {
      return this.$store.state.casePosts || []
    }
  }
}
</script>
