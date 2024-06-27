<template>
  <div v-if="data" class="pb-16">
    <h1 class="title text-4xl sm:text-5xl text-left mb-8">UX/UI Case Studies</h1>
    <Projects-ProjectList :posts="data" />
  </div>
</template>
<script setup>
const { data, error } = await useAsyncData('case', () => queryContent('/cases/').sort({ order: 1, $numeric: true }).find())
</script>
