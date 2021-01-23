<template>
  <div class="wrapper">
    <Header :intersecting="intersecting" />
    <ColorModePicker />
    <intersect
      @enter="intersecting = true"
      @leave="intersecting = false"
      rootMargin="0px 0px -92.5% 0px"
    >
      <nuxt ref="main" />
    </intersect>
  </div>
</template>

<script>
import Intersect from 'vue-intersect'

export default {
  components: { Intersect },
  data() {
    return {
      intersecting: false,
    }
  },
}
</script>
