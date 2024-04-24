<template>
  <div class="wrapper">
    <General-Header :intersecting="intersecting" />
    <General-ColorModePicker />
    <!-- <intersect
      @enter="intersecting = true"
      @leave="intersecting = false"
      rootMargin="0px 0px -92.5% 0px"
    > -->
    <main class="main flex flex-col">
      <!-- <slot /> -->
      <NuxtPage />
    </main>
    <!-- </intersect> -->
  </div>
</template>

<script>
// import Intersect from 'vue-intersect'
import mediumZoom from "medium-zoom";

export default {
  // components: { Intersect },
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

<script setup>
import { useSeoMeta, useHead } from '#app'
import * as SITE_INFO from './content/site/info.json'

useSeoMeta({
  title: SITE_INFO?.sitename || process.env.npm_package_name || '',
  description: SITE_INFO?.sitedescription || process.env.npm_package_description || '',
  // ogTitle: '[og:title]',
  // ogDescription: '[og:description]',
  ogImage: '/ogp-dark.png',
  ogHost: process.env.URL,
  // ogUrl: '[og:url]',
  // twitterTitle: '[twitter:title]',
  // twitterDescription: '[twitter:description]',
  // twitterImage: '[twitter:image]',
  // twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: SITE_INFO.sitelang || process.env.lang || 'en-US',
  }
})
</script>
