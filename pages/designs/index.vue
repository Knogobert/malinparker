<template>
  <div v-if="designPosts" class="pb-16" v-once>
    <h1 class="title text-4xl sm:text-5xl text-left mb-8">Graphic Design Projects</h1>
    <Projects-Projects :posts="designPosts" :type="'design'" />
  </div>
</template>

<script>
  export default {
    computed: {
      designPosts() {
        return [...this.$pinia?.state?.designPosts || []].sort((a, b) => a.order - b.order) || [];
      }
    }
  }
</script>
