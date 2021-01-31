<template>
  <div class="wrapper">
    <Header :intersecting="intersecting" />
    <ColorModePicker />
    <intersect
      @enter="intersecting = true"
      @leave="intersecting = false"
      rootMargin="0px 0px -92.5% 0px"
    >
      <main class="main flex flex-col">
        <nuxt />
      </main>
    </intersect>
  </div>
</template>

<script>
import Intersect from 'vue-intersect'
import mediumZoom from "medium-zoom";

export default {
  components: { Intersect },
  data() {
    return {
      intersecting: false,
      timer: null,
      zoomInstance: {},
    }
  },
  watch: {
    $route(to, from) {
      this.addMediumZoom();
    },
  },
  mounted() {
    this.addMediumZoom();
  },
  methods: {
    addMediumZoom() {
      if (this.timer !== null) clearTimeout(this.timer);

      this.timer = setTimeout(() => {
        this.zoomInstance = mediumZoom('.image', {
          margin: 32,
          background: 'var(--bg)',
          scrollOffset: 100,
        });
      }, 500);
    },
  },
}
</script>
