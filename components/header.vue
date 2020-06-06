<template>
  <ul class="flex fixed top-0 inset-x-0 p-3">
    <li class="flex-1 mr-2">
      <nuxt-link class="btn block" to="/">Home</nuxt-link>
    </li>
    <li class="flex-1 mr-2">
      <nuxt-link class="btn block" to="/blog">Blog</nuxt-link>
    </li>
    <li class="flex-1">
      <a class="btn btn--disabled block" href="#">Disabled Item</a>
    </li>
  </ul>
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
