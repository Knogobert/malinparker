<template>
  <code v-if="error" class="w-full">
    <h1 class="title text-4xl sm:text-5xl mb-8">Oh no! 🫠</h1>
    {{ error }}
  </code>
  <div v-else class="pb-32" v-once>
    <nav class="nav-back">
      <General-RouterBack class="block" />
    </nav>

    <h1 class="title text-4xl sm:text-5xl mb-8">{{ data?.title }}</h1>

    <ContentRenderer :value="data">
      <ContentRendererMarkdown :value="data" class="md-content" />
    </ContentRenderer>

    <ul v-if="data?.images?.length !== 0" class="images max-w-2xl mx-auto">
      <li v-for="image in data.images" :key="image.id">
        <img v-if="image.src" :src="image.src" :alt="image.alt" loading="lazy" class="image" />
      </li>
    </ul>
  </div>
</template>

<script setup>
const { path } = useRoute()
const { data, error } = await useAsyncData(path, () => queryContent(path).findOne())
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
