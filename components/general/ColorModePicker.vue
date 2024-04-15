<template>
  <button class="picker fixed z-50 m-3" @click="changeColorMode" tabindex="0" title="Toggle background color"
    aria-label="Toggle background color">
    <svg v-if="color === 'light'" title="light mode" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-sun">
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
    <svg v-else-if="color === 'dark'" title="dark mode" width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-moon">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
    <svg v-else title="system color mode" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-monitor">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>

    <!-- <component :is="`icon-${inverseColor}`" /> -->
    <!-- <IconLight v-if="color === 'light'" class="w-6 h-6" color="black" />
    <IconDark v-else-if="color === 'dark'" class="w-6 h-6" color="white" />
    <IconSystem v-else class="w-6 h-6" color="black" /> -->
  </button>
</template>

<script>
import { COLOR_MODE_FALLBACK } from '~/utils/globals.js'
import IconSystem from '~/components/icons/system.svg?inline'
import IconLight from '~/components/icons/light.svg?inline'
import IconDark from '~/components/icons/dark.svg?inline'

export default {
  name: 'ColorModePicker',
  components: {
    IconSystem,
    IconLight,
    IconDark
  },
  data() {
    return {
      color: COLOR_MODE_FALLBACK,
    };
  },
  watch: {
    '$colorMode.value': {
      immediate: true,
      handler(val) {
        if (!this.$colorMode.unknown) {
          this.color = this.$colorMode
            && this.$colorMode.preference != null
            && this.$colorMode.preference !== 'null'
            ? this.$colorMode.preference
            : COLOR_MODE_FALLBACK;
        }
        else {
          this.color = COLOR_MODE_FALLBACK;
        }
      },
    },
  },
  methods: {
    changeColorMode() {
      if (this.$colorMode.unknown) {
        this.$colorMode.preference = COLOR_MODE_FALLBACK;
        return;
      }

      switch (this.$colorMode.preference) {
        case 'light':
          this.$colorMode.preference = 'dark';
          break;
        case 'dark':
          this.$colorMode.preference = 'light';
          break;
        case 'system':
          this.$colorMode.preference = this.$colorMode.value === 'dark' ? 'light' : 'dark';
          break;

        default:
          this.$colorMode.preference = COLOR_MODE_FALLBACK;
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.picker {
  right: 1rem;
  bottom: 1rem;
  -moz-outline-radius: 1rem;
  @apply transition duration-200 ease-in-out;
}
.icon {
  width: 44px;
  height: 44px;
}
</style>
