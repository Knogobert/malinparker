<template>
  <div>
    <!-- <logo /> -->
    <h1 class="title">Malin Parker</h1>
    <h2 class="subtitle">Portfolio</h2>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  // components: {
  //   Logo
  // },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>
