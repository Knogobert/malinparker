<template>
  <section class="grid-container">
    <div class="headline self-end flex justify-start">
      <h3 class="text-sm text-primary lowercase">My knowledge</h3>
      <div class="underscore ml-2"></div>
    </div>

    <div class="image">
      <nuxt-image class="" src="/img/knowledge.svg" alt="Knowledge tree" fit="contain" />
    </div>

    <div class="intro sm:place-self-center">
      <h2 class="subtitle mb-4">Skills</h2>
      <ul>
        <li>Skill1</li>
        <li>Skill2</li>
        <li>Skill3</li>
        <li>Skill4</li>
        <li>Skill5</li>
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
  @apply
    border-b
    border-primary
    flex-1
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
    grid-template-columns: 2rem 2fr 3rem 1.5fr;
    grid-template-rows: 2rem 1fr;
    grid-template-areas:
      "headline headline headline headline"
      "image image . intro";
  }
}

.headline { grid-area: headline; }
.intro { grid-area: intro; }
.cta { grid-area: cta; }
.image { grid-area: image; }
</style>