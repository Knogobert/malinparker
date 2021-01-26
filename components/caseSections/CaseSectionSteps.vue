<template>
  <section>
    <h2 class="subtitle">Process.</h2>
    <case-section-steps-single
      v-for="(step, i) in filteredSteps"
      :key="step.id"
      :step="step"
      :reverseLayout="(i + 1) % 2 === 0"
    />
  </section>
</template>

<script>
export default {
  props: {
    steps: Array,
    visibleSteps: Array,
  },
  computed: {
    filteredSteps() {
      return this.steps.filter((step) => this.visibleSteps.includes(step.type));
    }
  },
}
</script>

<style lang="postcss" scoped>
section + section {
  @apply mt-16;
}
</style>
