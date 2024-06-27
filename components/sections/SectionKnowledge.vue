<template>
  <section class="grid-container">
    <div class="headline self-end flex justify-start">
      <h3 class="text-4xl text-primary dark:text-primary-300 lowercase">My knowledge</h3>
      <div class="underscore ml-2"></div>
    </div>

    <div class="images self-center">
      <NuxtPicture class="images" src="/img/knowledge-diagram-nuevo.svg" alt="Knowledge tree" fit="contain"
        sizes="640px" />
    </div>

    <div class="intro">
      <h2 class="subtitle mb-6">Skills.</h2>
      <div class="grid grid-cols-2 md:grid-cols-1 gap-x-8 text-sm">
        <ul class="space-y-3">
          <li>UI Design</li>
          <li>UX Research</li>
          <li>Prototyping</li>
          <li>User&nbsp;Testing</li>
          <li>Service&nbsp;Design</li>
          <li>Design&nbsp;Handoff</li>
        </ul>
        <ul class="space-y-3 md:mt-3">
          <li>Facilitation</li>
          <li>Graphic&nbsp;Design</li>
          <li>Figma</li>
          <li>Jira/Confluence</li>
          <li>Adobe Suite</li>
        </ul>
      </div>

    </div>

    <div class="legend flex items-center justify-end md:justify-start gap-4">
      <div title="legend circle" class="size-8 bg-primary-200 border border-primary-400 rounded-full"></div>
      <span class="text-sm">my knowledge area</span>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.underscore {
  margin-bottom: 6px;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2rem 1fr auto auto;
  gap: 3rem 1rem;
  grid-template-areas: "headline" "images" "legend" "intro";
  place-items: stretch;
}

@screen md {
  .grid-container {
    grid-template-columns: 2fr 2rem 1fr;
    grid-template-rows: 2rem 1fr auto;
    gap: 4rem 1rem;
    grid-template-areas:
      "headline headline headline"
      "images   .        intro"
      "images   .        legend";
  }
}
@screen lg {
  .grid-container {
    grid-template-columns: 2fr 3rem 1.25fr;
  }
}

.headline {
  grid-area: headline;
}

.intro {
  grid-area: intro;
}

.images {
  grid-area: images;
}

.legend {
  grid-area: legend;
}
</style>