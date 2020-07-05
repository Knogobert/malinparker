<template>
  <div class="fixed bottom-0 left-0 m-3">
    <ColorScheme placeholder="…" tag="div">
      <div>
        <component :is="`icon-${color}`" @click="changeColorMode" title="Toggle background color" />
      </div>
    </ColorScheme>
  </div>
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
  computed: {
    colorMode() { return JSON.stringify(this.$colorMode.unknown) },
    color() {
      if (this.$colorMode.unknown) return COLOR_MODE_FALLBACK
      return this.$colorMode && this.$colorMode.preference != null && this.$colorMode.preference !== 'null'
        ? this.$colorMode.preference
        : COLOR_MODE_FALLBACK
    }
  },
  methods: {
    changeColorMode() {
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

<style lang="scss" scoped>
.icon {
  width: 44px;
  height: 44px;
}
</style>
