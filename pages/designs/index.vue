<template>
  <div v-if="data" class="pb-16">
    <h1 class="title text-4xl sm:text-5xl text-left mb-8">Graphic Design Projects</h1>
    <Projects-ProjectList :posts="data" :type="'design'" />
  </div>
</template>

<script setup>
const { data, error } = await useAsyncData('design', () => queryContent('/designs').find())
</script>