<template>
  <nav class="header">
    <ul class="flex justify-end py-4 px-4 sm:px-8 max-w-5xl mx-auto">
      <li class="underscore mr-2"></li>
      <li class="mx-2">
        <nuxt-link class="px-4" to="/">Home</nuxt-link>
      </li>
      <li class="mx-2">
        <nuxt-link class="px-4" to="/blog">Blog</nuxt-link>
      </li>
      <li class="ml-2">
        <nuxt-link class="pl-4" to="/projects">Projects</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="postcss" scoped>
.header {
  position: fixed;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  z-index: 100;
}

.underscore {
  margin-bottom: 3.5px;
  @apply
    border-b
    border-primary
    flex-1
}

a:hover {
  @apply underline;
}

.nuxt-link-exact-active {
  @apply text-primary-100 underline;
  &:hover {
    @apply text-primary-200;
  }
}
.light-mode {
  & .nuxt-link-exact-active {
    @apply text-primary-800;
    &:hover {
      @apply text-primary-700;
    }
  }
}
</style>
