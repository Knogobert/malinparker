<template>
  <section class="grid-container">
    <div class="headline self-start">
      <h3 class="subtitle">Research</h3>
    </div>

    <div class="intro sm:place-self-start">
      To be able to understand the user I started with conducting an unstructured interview with a person working in a book store with a lot of knowladge about books and experience with putting together suggestions of books to book circles. I asked questions trying to understand which information about a book is the most crutial and common and what questions she would nomally ask a customer.
      <br>
      I also conducted secondary reasearch by looking up bookstores and librarby systems online to find information and inspiration from similar services.
      {{ step }}
    </div>
  </section>
</template>

<script>
export default {
  props: {
    step: Object,
  },
}
</script>

<style lang="postcss" scoped>
.grid-container {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1rem 1rem;
  grid-template-areas:
    "headline"
    "intro";
  place-items: stretch;
}
@screen sm {
  .grid-container {
    grid-template-columns: 1fr 2fr;
    grid-template-areas: "headline intro";
  }
}

.headline { grid-area: headline; }
.intro { grid-area: intro; }
</style>