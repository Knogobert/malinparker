<template>
  <section class="grid-container">
    <div class="headline self-end flex justify-start">
      <h3 class="text-sm text-primary dark:text-primary-300 lowercase">My knowledge</h3>
      <div class="underscore ml-2"></div>
    </div>

    <div class="image self-center">
      <img class="image" src="/img/knowledge.svg" alt="Knowledge tree" fit="contain" />
    </div>

    <div class="intro sm:place-self-center">
      <h2 class="subtitle mb-4">Skills.</h2>
      <ul class="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-8">
        <li>UX Research</li>
        <li>Adobe Suite</li>
        <li>UI Design</li>
        <li>User&nbsp;Testing</li>
        <li>Graphic&nbsp;Design</li>
        <li>Prototyping</li>
        <li>Figma</li>
        <li>Illustration</li>
        <li>Photography</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
.underscore {
  margin-bottom: 6px;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2rem 1fr auto;
  gap: 3rem 1rem;
  grid-template-areas: "headline" "image" "intro";
  place-items: stretch;
}
@screen sm {
  .grid-container {
    grid-template-columns: 2fr 2rem 1fr;
    grid-template-rows: 2rem 1fr;
    grid-template-areas:
      "headline headline headline"
      "image . intro";
  }
}
@screen md {
  .grid-container {
    grid-template-columns: 2fr 3rem 1.5fr;
  }
}

.headline { grid-area: headline; }
.intro { grid-area: intro; }
.image { grid-area: image; }
</style>