<template>
  <div class="wrapper">
    <General-Header :intersecting="isIntersecting" />
    <General-ColorModePicker />
    <main class="main flex flex-col justify-between" v-intersection-observer="{ rootMargin: '0px 0px -92.5% 0px' }"
      @intersection-enter="isIntersecting = true" @intersection-leave="isIntersecting = false">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
  </div>
</template>

<script setup>
import mediumZoom from "medium-zoom";
import { useSeoMeta, useHead } from '#app'
import * as SITE_INFO from './content/site/info.json'

const { site } = useAppConfig()
useSeoMeta({
  title: site?.title || SITE_INFO?.sitename || process.env.npm_package_name || '',
  description: site?.description || SITE_INFO?.sitedescription || process.env.npm_package_description || '',
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
    lang: site?.lang || SITE_INFO.sitelang || process.env.lang || 'en-US',
  }
})

const isIntersecting = ref(false)
const timer = ref(null)
const zoomInstance = ref({})
const addMediumZoom = () => {
  if (timer.value !== null) clearTimeout(timer.value);

  timer.value = setTimeout(() => {
    zoomInstance.value = mediumZoom('.image', {
      margin: 32,
      background: 'var(--bg)',
      scrollOffset: 100,
    });
  }, 500);
}

onMounted(() => { addMediumZoom() })
onUpdated(() => { addMediumZoom() })
onBeforeUnmount(() => {
  if (zoomInstance.value) {
    zoomInstance.value.detach();
  }
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s ease-in-out;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.2rem);
}
</style>
