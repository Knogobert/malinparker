<template>
  <section class="grid-container">
    <div class="headline self-end flex justify-start">
      <h3 class="monotitle text-sm text-primary dark:text-primary-300 lowercase">My knowledge</h3>
      <div class="underscore ml-2"></div>
    </div>

    <div class="images self-center">
      <!-- <img class="images" src="/img/knowledge-diagram.svg" alt="Knowledge tree" fit="contain" /> -->
      <Svgs-SvgKnowlegdeDiagram class="image w-full h-auto" title="Knowledge tree" />
    </div>

    <div class="intro md:place-self-center">
      <h2 class="subtitle mb-4">Skills.</h2>
      <div class="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-8 text-sm">
        <ul class="grid grid-cols-1 gap-y-4">
          <li>UI Design</li>
          <li>User&nbsp;Testing</li>
          <li>Graphic&nbsp;Design</li>
          <li>Figma</li>
          <li>Photography</li>
        </ul>
        <ul class="grid grid-cols-1 gap-y-4 md:mt-4 lg:mt-0">
          <li>UX Research</li>
          <li>Adobe Suite</li>
          <li>Illustration</li>
          <li>Prototyping</li>
          <li>Basic HTML + CSS</li>
        </ul>
      </div>
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
  grid-template-rows: 2rem 1fr auto;
  gap: 3rem 1rem;
  grid-template-areas: "headline" "images" "intro";
  place-items: stretch;
}
@screen md {
  .grid-container {
    grid-template-columns: 2fr 2rem 1fr;
    grid-template-rows: 2rem 1fr;
    gap: 2rem 1rem;
    grid-template-areas:
      "headline headline headline"
      "images . intro";
  }
}
@screen lg {
  .grid-container {
    grid-template-columns: 2fr 3rem 1.5fr;
  }
}

.headline { grid-area: headline; }
.intro { grid-area: intro; }
.images { grid-area: images; }
</style>