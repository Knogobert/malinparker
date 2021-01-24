<template>
  <button class="picker fixed z-50 m-3" @click="changeColorMode" tabindex="0" title="Toggle background color">
    <component :is="`icon-${inverseColor}`" />
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
      color: COLOR_MODE_FALLBACK
    }
  },
  computed: {
    inverseColor() {
      return this.color === 'dark' ? 'light' : 'dark';
    }
  },
  watch: {
    '$colorMode.value': {
      immediate: true,
      handler(val) {
        if (!this.$colorMode.unknown) {
          this.color =
            this.$colorMode && this.$colorMode.preference != null && this.$colorMode.preference !== 'null'
              ? this.$colorMode.preference
              : COLOR_MODE_FALLBACK
        } else {
          this.color = COLOR_MODE_FALLBACK
        }
      }
    }
  },
  methods: {
    changeColorMode() {
      if (this.$colorMode.unknown) return (this.$colorMode.preference = COLOR_MODE_FALLBACK)

      switch (this.$colorMode.preference) {
        case 'light':
          return (this.$colorMode.preference = 'dark')
        case 'dark':
          return (this.$colorMode.preference = 'light')
        case 'system':
          return (this.$colorMode.preference = this.$colorMode.value === 'dark' ? 'light' : 'dark')

        default:
          return (this.$colorMode.preference = COLOR_MODE_FALLBACK)
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.picker {
  left: 1rem;
  bottom: 1rem;
  -moz-outline-radius: 1rem;
}
.icon {
  width: 44px;
  height: 44px;
}
</style>
