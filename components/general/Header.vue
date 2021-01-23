<template>
  <header ref="header">
    <nav :class="{ 'shadow-xl': intersecting }">
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
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    intersecting: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
header {
  z-index: 100;
  height: 2rem;
  background: var(--bg-secondary);
  @apply fixed inset-x-0 top-0 transition-colors duration-200 ease-in-out;
}

nav {
  background: var(--bg);
  @apply rounded-2xl mt-4 mx-4 transition duration-200 ease-in-out;
}

.underscore {
  margin-bottom: 3.5px;
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
