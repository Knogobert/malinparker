<template>
  <div v-if="designPost" class="pb-32" v-once>
    <nav class="nav-back">
      <router-back class="block" />
    </nav>

    <h1 class="title text-4xl sm:text-5xl mb-8">{{ designPost.title }}</h1>
    <p class="mt-4">{{ designPost.body }}</p>
    <ul v-if="designPost.images && designPost.images.length !== 0" class="images max-w-2xl mx-auto">
      <li v-for="image in designPost.images" :key="image.id">
        <img v-if="image.src" :src="image.src" :alt="image.alt" class="image" />
      </li>
    </ul>
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

<style lang="postcss" scoped>
.images {
  & li {
    & + li {
      @apply mt-8;
    }
  }
}
</style>
