<template>
  <section class="grid-container">
    <div class="headline self-end">
      <h3 class="monotitle text-sm">Hi, my name is</h3>
    </div>

    <div class="intro mb-4 lg:mb-12">
      <div class="flex-1">
        <h1 class="title text-gray-600 dark:text-primary mb-1">Malin Katrine Parker.</h1>
        <h2 class="subtitle mt-0 mb-4 text-balance">UX designer with a passion for sustainability.</h2>
        <p>
          My motivation is to simplify and enhance people’s everyday life. I like it best when working in efficient yet
          thoughtful processes with a feeling that I’m contributing to something meaningful and important for others. My
          biggest strengths are that I’m an observant, questioning introvert.
        </p>
        <p>
          I love spending time with my family and being in nature doing stuff like running, hiking or drinking coffee.
          But if I’m not doing that you will likely find me working on a thrilling new sewing project or renovating my
          latest buy from the flea market.
        </p>
      </div>
    </div>

    <General-ContactCTA button />

    <div class="images">
      <!-- <Skeleton-ContentPlaceholders v-show="loadingImage">
        <Skeleton-ContentPlaceholdersImg class="w-full p-4 opacity-50"
          style="height: 45vw; min-height: 320px; max-height: 550px; border-radius: 9999px 9999px 200vw 200vw;" />
      </Skeleton-ContentPlaceholders> -->
      <NuxtPicture loading="eager" src="/img/malin-hero-nuevos.png" alt="Portrait of Malin" fit="contain"
        class="image image-ph" :class="loadingImage ? '' : 'show'" @load="loadingImage = false"
        :placeholder="[450, 602]" width="450px" height="667.083px" />
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
  mounted() {
    setTimeout(() => { this.loadingImage = false; }, 2000);
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
    grid-template-columns: 0rem 1.5fr 1.25fr;
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