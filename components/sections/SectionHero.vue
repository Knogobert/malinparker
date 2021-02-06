<template>
  <section class="grid-container">
    <div class="headline self-end">
      <h3 class="monotitle text-sm">Hi, my name is</h3>
    </div>

    <div class="intro">
      <div class="flex-1">
        <h1 class="title text-gray-600 dark:text-primary mb-1">Malin Katrine Parker.</h1>
        <h2 class="subtitle mb-4">UX designer who breathes and designs sustainability.</h2>
        <p>Motiveras av att förenkla och förbättra människors vardag. Trivs i snabba, långsamma designprocesser med känslan av att bidra med något viktigt. Jag är en formstark och inlyssnande person som gillar att leka kurragömma med min katt. </p>
      </div>
    </div>

    <div class="cta flex flex-col sm:flex-row">
      <div class="flex-auto mt-4 sm:mt-0">
        <a href="mailto:hello@malinkatrine.com" class="btn btn-ghost">get in touch</a>
      </div>
      <div class="flex-1"></div>
      <div class="flex-auto text-left sm:text-right mt-4 sm:mt-0 sm:ml-4">
        <h4 class="font-mono text-base uppercase text-gray dark:text-primary-300">Contact</h4>
        <a href="mailto:hello@malinkatrine.com" class="text-primary dark:text-primary-400 hover:underline">hello@malinkatrine.com</a>
      </div>
      <div class="flex-auto text-left sm:text-right mt-4 sm:mt-0 sm:ml-4">
        <h4 class="font-mono text-base uppercase text-gray dark:text-primary-300">Location</h4>
        <p class="text-primary dark:text-primary-400">Gothenburg</p>
      </div>
    </div>

    <div class="images">
      <img loading="eager" src="/img/malin-hero@2x.png" alt="Malin with crossed arms" fit="contain" />
    </div>
  </section>
</template>

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
@screen md {
  .grid-container {
    grid-template-areas:
      "headline headline images"
      ". intro images"
      ". cta cta";
  }
}
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