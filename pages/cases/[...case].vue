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
  </div>
</template>

<script setup>
const { params } = useRoute()
const { data, error } = await useAsyncData('case', () => queryContent('/cases/', params?.case?.[0]).findOne())
</script>
