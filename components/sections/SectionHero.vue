<template>
  <section class="grid-container">
    <div class="headline self-end">
      <h3 class="text-sm">Hej, mitt namn är</h3>
    </div>

    <div class="intro">
      <div class="flex-1">
        <h1 class="title mb-1">Malin Katrine Parker.</h1>
        <h2 class="subtitle mb-4">UX designer som vill designa och andas hållbart.</h2>
        <p>Motiveras av att förenkla och förbättra människors vardag. Trivs i snabba, långsamma designprocesser med känslan av att bidra med något viktigt. Jag är en formstark och inlyssnande person som gillar att leka kurragömma med min katt. </p>
      </div>
    </div>

    <div class="cta flex flex-col sm:flex-row items-start sm:items-end">
      <nuxt-link to="/contact" class="btn btn-ghost mt-2 sm:mt-0">Kontakta mig</nuxt-link>
      <div class="flex-1"></div>
      <div class="flex-auto text-left sm:text-right mt-4 sm:ml-4">
        <h4 class="uppercase text-gray">Kontakt</h4>
        <a href="mailto:hello@malinkatrine.com" class="">hello@malinkatrine.com</a>
      </div>
      <div class="flex-auto text-left sm:text-right mt-4 sm:ml-4">
        <h4 class="uppercase text-gray">Plats</h4>
        <p class="text-primary">Göteborg</p>
      </div>
    </div>

    <div class="image">
      <nuxt-image class="" src="/img/malin-hero@2x.png" alt="Malin with crossed arms" fit="contain" />
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2rem auto auto auto;
  gap: 1rem 1rem;
  grid-template-areas:
    "headline"
    "intro"
    "image"
    "cta";

  place-items: stretch;
}
@screen sm {
  .grid-container {
    grid-template-columns: 2rem 1.5fr 1fr;
    grid-template-rows: 2rem 1fr 3rem;
    gap: 1rem 1rem;
    grid-template-areas:
      "headline headline headline"
      "intro intro image"
      "cta cta cta";
  }
}
@screen md {
  .grid-container {
    grid-template-areas:
      "headline headline image"
      ". intro image"
      ". cta cta";
  }
}
@screen lg {
  .grid-container {
    grid-template-areas:
      "headline headline image"
      ". intro image"
      ". cta image";
  }
}

.headline { grid-area: headline; }
.intro { grid-area: intro; }
.cta { grid-area: cta; }
.image { grid-area: image; }
</style>