<template>
  <header id="header" ref="header">
    <nav :class="{ 'shadow-xl': intersecting || isOpen }">
      <ul class="flex justify-end items-end py-4 px-4 sm:px-8 max-w-6xl mx-auto">
        <li v-if="$route.path !== '/'" class="mr-4">
          <NuxtLink class="sm:hidden" to="/">MKP</NuxtLink>
          <NuxtLink class="hidden sm:block" to="/">Malin Katrine Parker</NuxtLink>
        </li>
        <li class="underscore mr-1"></li>
        <li class="xs:hidden -my-2 -mr-2">
          <button class="flex items-center text-primary-600 dark:text-primary-300 pl-4 hover:underline" type="button"
            @click="isOpen = !isOpen" style="margin-bottom: -2.5px;">
            <span class="uppercase">Menu</span>
            <svg class="ham hamRotate ham8" :class="{ active: isOpen }" viewBox="0 0 100 100" width="45" height="45">
              <path class="line top"
                d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
              <path class="line middle" d="m 30,50 h 40" />
              <path class="line bottom"
                d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
            </svg>
          </button>
        </li>
        <li class="hidden xs:inline-block">
          <NuxtLink class="pl-4 pr-2" to="/cases">UX/UI</NuxtLink>
        </li>
        <li class="hidden xs:inline-block">
          <NuxtLink class="px-2 [word-spacing:-0.1rem]" to="/designs">graphic design</NuxtLink>
        </li>
        <li class="hidden xs:inline-block">
          <NuxtLink class="pl-4" to="/resume">résumé</NuxtLink>
        </li>
        <!-- <li class="hidden xs:inline-block -mr-1">
          <NuxtLink to="/resume" class="btn btn-pill leading-none lowercase -my-3 px-3 no-underline">résumé</NuxtLink>
        </li> -->
      </ul>
      <transition name="fade">
        <ul v-if="isOpen"
          class="xs:hidden flex flex-col items-end rounded-b-3xl py-4 px-10 mx-auto bg-primary-100 dark:bg-primary-900 transition duration-200 ease-in-out">
          <li class="my-2">
            <NuxtLink class="pl-4 pr-2" to="/cases">UX/UI</NuxtLink>
          </li>
          <li class="my-2">
            <NuxtLink class="px-2 [word-spacing:-0.1rem]" to="/designs">graphic design</NuxtLink>
          </li>
          <li class="my-2">
            <NuxtLink class="pl-4" to="/resume">résumé</NuxtLink>
          </li>
          <!-- <li class="my-2 -ml-3 px-4">
            <NuxtLink to="/resume" class="btn btn-pill leading-none lowercase px-3 no-underline">résumé</NuxtLink>
          </li> -->
        </ul>
      </transition>
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
  // head() {
  //   return {
  //     bodyAttrs: {
  //       class: this.isOpen ? 'overflow-hidden' : '',
  //     },
  //   };
  // },
  data() {
    return {
      isOpen: false,
    };
  },
  watch: {
    $route() {
      this.isOpen = false;
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

a:not(.no-underline):hover {
  @apply underline;
}

.ham {
  @apply
    h-full
    cursor-pointer
    select-none;

  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
}
.hamRotate.active {
  transform: rotate(45deg);
}
.hamRotate180.active {
  transform: rotate(180deg);
}
.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: var(--text-secondary);
  stroke-width: 3;
  stroke-linecap: round;
}
.ham8 .top {
  stroke-dasharray: 40 160;
}
.ham8 .middle {
  stroke-dasharray: 40 142;
  transform-origin: 50%;
  transition: transform 400ms;
}
.ham8 .bottom {
  stroke-dasharray: 40 85;
  transform-origin: 50%;
  transition: transform 400ms, stroke-dashoffset 400ms;
}
.ham8.active .top {
  stroke-dashoffset: -64px;
}
.ham8.active .middle {
  transform: rotate(90deg);
}
.ham8.active .bottom {
  stroke-dashoffset: -64px;
}

.NuxtLink-exact-active {
  @apply text-primary-100 underline;
  &:hover {
    @apply text-primary-200;
  }
}
.light-mode {
  & .NuxtLink-exact-active {
    @apply text-primary-800;
    &:hover {
      @apply text-primary-700;
    }
  }
}
</style>
