<template>
  <div v-if="casePosts" class="pb-16" v-once>
    <h1 class="title text-left mb-8">UX/UI Case Studies</h1>
    <projects :posts="casePosts" />
  </div>
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
