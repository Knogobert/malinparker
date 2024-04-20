<template>
  <section v-if="selectedWorkPosts.length !== 0">
    <div class="flex justify-start mb-12">
      <h3 class="monotitle text-sm text-primary dark:text-primary-300 lowercase">Selected work</h3>
      <div class="underscore ml-2"></div>
    </div>

    <Projects-Projects :posts="selectedWorkPosts" />
  </section>
</template>

<script>
export default {
  computed: {
    selectedWorkPosts() {
      return [];
      // return [...this.$store?.state?.casePosts]
      //   .sort((a,b) => a.order - b.order)
      //   .filter((work) => work.selected)
      //   || [];
    }
  }
}
</script>