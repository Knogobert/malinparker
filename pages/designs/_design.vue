<template>
  <div v-if="designPost" class="pb-32" v-once>
    <nav class="nav-back">
      <router-back class="block" />
    </nav>

    <h1 class="title text-4xl sm:text-5xl mb-8">{{ designPost.title }}</h1>
    <!-- <p class="mt-4">{{ designPost.excerpt }}</p> -->
    <!-- <img
      v-if="designPost.cover"
      class="cover-image"
      :src="designPost.cover.src"
      :alt="designPost.cover.alt"
    > -->
  </div>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { designPost: payload }
    else
      return {
        designPost: await require(`~/assets/content/designs/${params.design}.json`)
      }
  }
}
</script>
