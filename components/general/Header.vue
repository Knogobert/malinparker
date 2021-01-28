<template>
  <header id="header" ref="header">
    <nav :class="{ 'shadow-xl': intersecting }">
      <ul class="flex justify-end py-4 px-4 sm:px-8 max-w-6xl mx-auto">
        <li v-if="$route.path !== '/'" class="mr-4 sm:mr-6">
          <nuxt-link class="sm:hidden" to="/">MKP</nuxt-link>
          <nuxt-link class="hidden sm:block" to="/">Malin Katrine Parker</nuxt-link>
        </li>
        <li class="underscore mr-4"></li>
        <li class="">
          <nuxt-link class="px-4" to="/cases">UX/UI</nuxt-link>
        </li>
        <!-- <li class="mx-2">
          <nuxt-link class="px-4" to="/design">graphic design</nuxt-link>
        </li> -->
        <li class="-mr-4">
          <nuxt-link class="px-4" to="/contact">who am i?</nuxt-link>
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
header { /* top solid border */
  height: 2.5rem;
  background: var(--bg-secondary);
  @apply fixed z-40 inset-x-0 top-0 transition-all duration-200 ease-in-out;
}

nav {
  background: var(--bg);
  @apply rounded-3xl mt-4 mx-4 transition duration-200 ease-in-out;
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
