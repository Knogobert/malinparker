<template>
  <section class="grid-container">
    <div class="headline self-end">
      <h3 class="monotitle text-sm">Hi, my name is</h3>
    </div>

    <div class="intro">
      <div class="flex-1">
        <h1 class="title text-gray-600 dark:text-primary mb-1">Malin Katrine Parker.</h1>
        <h2 class="subtitle mt-0 mb-4">UX designer who breathes and designs sustainability.</h2>
        <p>My motivation is to simplify and enhance people’s everyday life. I like it best when working in efficient yet thoughtful processes with a feeling that I’m contributing to something meaningful and important for others. My biggest strengths are that I’m an observant, questioning introvert. I love caring for my plants, sewing and playing hide and seek with my cat Misu.</p>
      </div>
    </div>

    <div class="cta flex flex-col sm:flex-row">
      <div class="flex-auto mt-4 sm:mt-0">
        <a href="mailto:hello@malinkatrine.com" class="btn btn-ghost">get in touch</a>
      </div>
      <div class="flex-1"></div>
      <div class="flex-auto text-left sm:text-right mt-4 sm:mt-0 sm:ml-4">
        <h4 class="font-mono text-base uppercase text-gray dark:text-primary-300">Contact</h4>
        <a href="mailto:hello@malinkatrine.com" class="text-primary dark:text-primary-400 hover:underline mt-0">hello@malinkatrine.com</a>
      </div>
      <div class="flex-auto text-left sm:text-right mt-4 sm:mt-0 sm:ml-4">
        <h4 class="font-mono text-base uppercase text-gray dark:text-primary-300">Location</h4>
        <p class="text-primary dark:text-primary-400 mt-0">Gothenburg</p>
      </div>
    </div>

    <div class="images">
      <content-placeholders v-show="loadingImage">
          <content-placeholders-img
            class="w-full p-4 opacity-50"
            style="height: 45vw; min-height: 320px; border-radius: 9999px 9999px 200vw 200vw;"
          />
        </content-placeholders>
      <img loading="eager" src="/img/malin-hero@2x.png" alt="Malin with crossed arms" fit="contain" class="image-ph" :class="loadingImage ? '' : 'show'"  @load="loadingImage = false"/>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      loadingImage: true
    }
  },
}
</script>

<style lang="postcss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2rem auto auto auto;
  gap: 1rem 3rem;
  grid-template-areas:
    "headline"
    "intro"
    "images"
    "cta";

  place-items: stretch;
}
@screen sm {
  .grid-container {
    grid-template-columns: 0rem 1.5fr 1fr;
    grid-template-rows: 2rem 1fr 3rem;
    /* gap: 1rem 1rem; */
    grid-template-areas:
      "headline headline headline"
      "intro intro images"
      "cta cta cta";
  }
}
/* @screen md {
  .grid-container {
    grid-template-areas:
      "headline headline images"
      ". intro images"
      ". cta cta";
  }
} */
@screen lg {
  .grid-container {
    grid-template-areas:
      "headline headline images"
      ". intro images"
      ". cta images";
  }
}

.headline { grid-area: headline; }
.intro { grid-area: intro; }
.cta { grid-area: cta; }
.images { grid-area: images; }
</style>