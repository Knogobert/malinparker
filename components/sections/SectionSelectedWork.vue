<template>
  <section v-if="data.length !== 0">
    <div class="flex justify-start mb-12">
      <h3 class="monotitle text-sm text-primary dark:text-primary-300 lowercase">Selected work</h3>
      <div class="underscore ml-2"></div>
    </div>

    <Projects-ProjectList :posts="data" />
  </section>
</template>

<script setup>
const { data, error } = await useAsyncData('case', () => queryContent('/cases').find())
</script>