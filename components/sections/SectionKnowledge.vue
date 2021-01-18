<template>
  <section class="grid-container">
    <div class="headline self-end flex justify-start">
      <h3 class="text-sm text-primary">My knowledge</h3>
      <div class="underscore ml-2"></div>
    </div>

    <div class="image">
      <div class="flex-1">
        <h2 class="subtitle mb-4">a skill graph here</h2>
        <!-- <nuxt-image class="" src="/img/malin-hero@2x.png" alt="Malin with crossed arms" fit="contain" /> -->
      </div>
    </div>

    <div class="intro">
        <h2 class="subtitle mb-4">Skills</h2>
        <ul>
          <li>Skill1</li>
          <li>Skill2</li>
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
  grid-template-columns: 2rem 1.5fr 1fr;
  grid-template-rows: 2rem 1fr 3rem;
  gap: 1rem 1rem;
  grid-template-areas:
    "headline headline headline"
    ". image intro"
    ". cta intro";

  place-items: stretch;
}

.headline { grid-area: headline; }
.intro { grid-area: intro; }
.cta { grid-area: cta; }
.image { grid-area: image; }
</style>