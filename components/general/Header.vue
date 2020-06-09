<template>
  <nav>
    <ul class="flex fixed top-0 inset-x-0 p-3">
      <li class="flex-1 mr-2">
        <nuxt-link class="btn block" to="/">Home</nuxt-link>
      </li>
      <li class="flex-1 mr-2">
        <nuxt-link class="btn block" to="/blog">Blog</nuxt-link>
      </li>
      <li class="flex-1">
        <nuxt-link class="btn block" to="/projects">Projects</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.nuxt-link-exact-active {
  @apply text-white bg-blue-500;
  &:hover {
    @apply bg-blue-700;
  }
}
</style>
