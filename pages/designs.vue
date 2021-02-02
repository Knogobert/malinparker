<template>
  <div>
    designs
    <projects :posts="designPosts" :type="'design'"/>
  </div>
</template>

<script>
  export default {
    computed: {
      designPosts() {
        return this.$store.state?.designPosts || [
          { slug: 'test', title: 'Test', cover: { src: '/img/boka-final-1@2x.png', alt: 'testy' }},
          { slug: 'test2', title: 'Test2', cover: { src: '/img/boka-final-2@2x.png', alt: 'testy2' }}
        ];
      }
    }
  }
</script>

<style lang="postcss" scoped>

</style>