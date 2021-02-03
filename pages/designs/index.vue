<template>
  <div v-if="designPosts" class="pb-16" v-once>
    <h1 class="title text-left mb-8">Graphic Design Projects</h1>
    <projects :posts="designPosts" />
  </div>
</template>
<script>
export default {
  computed: {
    designPosts() {
      return this.$store.state.designPosts || []
    }
  }
}
</script>
