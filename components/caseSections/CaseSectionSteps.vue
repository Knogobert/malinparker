<template>
  <section class="steps">
    <h2 class="subtitle mb-4">Process.</h2>
    <CaseSectionStepsSingle
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