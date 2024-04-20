<template>
  <div v-if="casePost" class="pb-32" v-once>
    <nav class="nav-back">
      <General-RouterBack class="block" />
    </nav>

    <h1 class="title text-4xl sm:text-5xl mb-8">{{ casePost.title }}</h1>
    <!-- <p class="mt-4">{{ casePost.excerpt }}</p> -->

    <CaseSections-CaseSectionGeneral>
      <template v-slot:title>The Project.</template>
      <div class="md-content" v-html="$md.render(casePost.body)" />
      <ul v-if="casePost.meta" class="grid gap-y-4 my-4">
        <li v-if="casePost.meta.duration">
          <p><b>Duration:</b> {{ casePost.meta.duration }}</p>
        </li>
        <li v-if="casePost.meta.methods">
          <p><b>Methods:</b> {{ casePost.meta.methods }}</p>
        </li>
        <li v-if="casePost.meta.tools">
          <p><b>Tools:</b> {{ casePost.meta.tools }}</p>
        </li>
        <li v-if="casePost.meta.role">
          <p><b>My role:</b> {{ casePost.meta.role }}</p>
        </li>
        <li v-if="casePost.meta.workedWith">
          <p><b>Worked with:</b> {{ casePost.meta.workedWith }}</p>
        </li>
      </ul>
    </CaseSections-CaseSectionGeneral>

    <CaseSections-CaseSectionGeneral>
      <figure class="" v-if="casePost.cover && casePost.cover.src">
        <img :src="casePost.cover.src" :alt="casePost.cover.alt || ''" loading="lazy" fit="cover" class="image" />
      </figure>
    </CaseSections-CaseSectionGeneral>

    <CaseSections-CaseSectionGeneral v-if="casePost.context" class="mt-16">
      <template v-slot:title>Context.</template>
      <div class="md-content" v-html="$md.render(casePost.context)" />
    </CaseSections-CaseSectionGeneral>

    <CaseSections-CaseSectionSteps v-if="casePost.steps && casePost.steps.length !== 0" class="mt-16"
      :steps="casePost.steps" :visible-steps="casePost.meta.visibleSteps" />

    <CaseSections-CaseSectionFinal v-if="casePost.final" class="mt-16" :images="casePost.final">
      <template v-slot:title>Final Product.</template>
    </CaseSections-CaseSectionFinal>

    <CaseSections-CaseSectionGeneral v-if="casePost.retrospective" class="mt-16" :below="true">
      <template v-slot:title>Retrospective.</template>
      <div class="md-content" v-html="$md.render(casePost.retrospective)" />
    </CaseSections-CaseSectionGeneral>
  </div>
</template>

<!-- <script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { casePost: payload }
    else
      return {
        casePost: await require(`~/assets/content/cases/${params.case}.json`)
      }
  },
  data() {
    return {
      $md: { render: (d) => d },
    }
  }
}
</script> -->

<script setup>
const { params } = useRoute()
const { data: casePost } = await useAsyncData('case', () => require(`~/assets/content/cases/${params.case}.json`))

const $md = { render: (d) => d }
</script>
