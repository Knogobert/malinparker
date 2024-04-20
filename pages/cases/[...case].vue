<template>
  <div v-if="data" class="pb-32">
    <nav class="nav-back">
      <General-RouterBack class="block" />
    </nav>

    <h1 class="title text-4xl sm:text-5xl mb-8">{{ data?.title }}</h1>
    <!-- <p class="mt-4">{{ data.excerpt }}</p> -->

    <ContentRenderer :value="data" class="md-content">
      <ContentRendererMarkdown :value="data" class="md-content" />
    </ContentRenderer>

    <CaseSections-CaseSectionGeneral>
      <template #title>The Project.</template>
      <!-- <ContentRenderer :value="data.body" class="md-content">
        <ContentRendererMarkdown :value="data.body" class="md-content" />
      </ContentRenderer> -->

      <ul v-if="data.meta" class="grid gap-y-4 my-4">
        <li v-if="data.meta.duration">
          <p><b>Duration:</b> {{ data.meta.duration }}</p>
        </li>
        <li v-if="data.meta.methods">
          <p><b>Methods:</b> {{ data.meta.methods }}</p>
        </li>
        <li v-if="data.meta.tools">
          <p><b>Tools:</b> {{ data.meta.tools }}</p>
        </li>
        <li v-if="data.meta.role">
          <p><b>My role:</b> {{ data.meta.role }}</p>
        </li>
        <li v-if="data.meta.workedWith">
          <p><b>Worked with:</b> {{ data.meta.workedWith }}</p>
        </li>
      </ul>
    </CaseSections-CaseSectionGeneral>

    <CaseSections-CaseSectionGeneral>
      <figure class="" v-if="data.cover && data.cover.src">
        <img :src="data.cover.src" :alt="data.cover.alt || ''" loading="lazy" fit="cover" class="image" />
      </figure>
    </CaseSections-CaseSectionGeneral>

    <CaseSections-CaseSectionGeneral v-if="data.context" class="mt-16">
      <template #title>Context.</template>
      <ContentRenderer :value="data.context" class="md-content">
        <ContentRendererMarkdown :value="data.context" class="md-content" />
      </ContentRenderer>
    </CaseSections-CaseSectionGeneral>

    <CaseSections-CaseSectionSteps v-if="data.steps && data.steps.length !== 0" class="mt-16" :steps="data.steps"
      :visible-steps="data.meta.visibleSteps" />

    <CaseSections-CaseSectionFinal v-if="data.final" class="mt-16" :images="data.final">
      <template #title>Final Product.</template>
    </CaseSections-CaseSectionFinal>

    <CaseSections-CaseSectionGeneral v-if="data.retrospective" class="mt-16" :below="true">
      <template #title>Retrospective.</template>
      <ContentRenderer :value="data.retrospective" class="md-content">
        <ContentRendererMarkdown :value="data.retrospective" class="md-content" />
      </ContentRenderer>
    </CaseSections-CaseSectionGeneral>
  </div>
</template>

<script setup>
const { params } = useRoute()
const { data, error } = await useAsyncData('case', () => queryContent('/cases', params?.case?.[0]).findOne())
</script>
