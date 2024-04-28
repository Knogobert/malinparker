<template>
  <div v-if="data" class="pb-32" v-once>
    <nav class="nav-back">
      <General-RouterBack class="block" />
    </nav>

    <h1 class="title text-4xl sm:text-5xl mb-8">{{ data.title }}</h1>
    <!-- <p class="mt-4">{{ data.body }}</p> -->
    <ContentRenderer :value="data">
      <ContentRendererMarkdown :value="data" class="md-content" />
    </ContentRenderer>

    <ul v-if="data.images && data.images.length !== 0" class="images max-w-2xl mx-auto">
      <li v-for="image in data.images" :key="image.id">
        <img v-if="image.src" :src="image.src" :alt="image.alt" loading="lazy" class="image" />
      </li>
    </ul>
  </div>
</template>

<script setup>
const { params } = useRoute()
const { data } = await useAsyncData('design', () => require(`~/assets/content/designs/${params.design}.json`))
</script>

<style lang="postcss" scoped>
.images {
  & li {
    &+li {
      @apply mt-8;
    }
  }
}
</style>
