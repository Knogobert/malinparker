<template>
  <main v-if="projectPosts" class="main">
    <ul v-for="(projectPost, index) in projectPosts" :key="index" class="articles">
      <nuxt-link class="article article--clickable" :to="`projects/${projectPost.slug}`">
        <h3 class="block mb-4 font-bold">{{ projectPost.title }}</h3>
        <div class="my-4">
          <h2 class="inline py-1 px-2 mr-1 bg-blue-200 font-medium rounded-sm dark:bg-blue-900">
            {{ projectPost.project_type }}
          </h2>
          <p class="inline">{{ projectPost.description }}</p>
        </div>
      </nuxt-link>
    </ul>
  </main>
</template>
<script>
export default {
  computed: {
    projectPosts() {
      return this.$store.state.projectPosts
    }
  }
}
</script>
