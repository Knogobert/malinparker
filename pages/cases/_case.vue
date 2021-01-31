<template>
  <div v-if="casePost" class="pb-32">
    <nav>
      <router-back class="block -mt-4 mb-16" />
    </nav>

    <h1 class="title text-4xl sm:text-5xl mb-8">{{ casePost.title }}</h1>
    <!-- <p class="mt-4">{{ casePost.excerpt }}</p> -->

    <case-section-general>
      <template v-slot:title>The Project.</template>
      <div class="md-content" v-html="$md.render(casePost.body)" />
      <ul v-if="casePost.meta" class="grid gap-y-4 my-4">
        <li v-if="casePost.meta.duration"><p><b>Duration:</b> {{casePost.meta.duration}}</p></li>
        <li v-if="casePost.meta.methods"><p><b>Methods:</b> {{casePost.meta.methods}}</p></li>
        <li v-if="casePost.meta.tools"><p><b>Tools:</b> {{casePost.meta.tools}}</p></li>
        <li v-if="casePost.meta.role"><p><b>My role:</b> {{casePost.meta.role}}</p></li>
        <li v-if="casePost.meta.workedWith"><p><b>Worked with:</b> {{casePost.meta.workedWith}}</p></li>
      </ul>
    </case-section-general>

    <case-section-general v-if="casePost.context" class="mt-16">
      <template v-slot:title>Context.</template>
      <div class="md-content" v-html="$md.render(casePost.context)" />
    </case-section-general>

    <case-section-steps
      v-if="casePost.steps && casePost.steps.length !== 0"
      class="mt-16"
      :steps="casePost.steps"
      :visible-steps="casePost.meta.visibleSteps"
    />

    <case-section-final v-if="casePost.final" class="mt-16" :images="casePost.final">
      <template v-slot:title>Final Product.</template>
    </case-section-final>

    <case-section-general v-if="casePost.retrospective" class="mt-16" :below="true">
      <template v-slot:title>Retrospective.</template>
      <div class="md-content" v-html="$md.render(casePost.retrospective)" />
    </case-section-general>
    <!-- <img
      v-if="casePost.cover"
      class="cover-image"
      :src="casePost.cover.src"
      :alt="casePost.cover.alt"
    > -->
  </div>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { casePost: payload }
    else
      return {
        casePost: await require(`~/assets/content/cases/${params.case}.json`)
      }
  }
}
</script>
