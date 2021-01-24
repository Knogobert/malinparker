<template>
  <section>
    <h2 class="subtitle">Process.</h2>
    <case-section-steps-single
      v-for="step in filteredSteps"
      :key="step.id"
      :step="step"
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
      return this.steps.filter((step) => this.visibleSteps.includes(step.number));
    }
  },
}
</script>
