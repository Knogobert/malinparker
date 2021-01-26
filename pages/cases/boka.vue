<template>
  <main
    v-if="casePost"
    class="main pb-32"
  >
    <h1 class="title text-4xl sm:text-5xl mb-8">{{ casePost.title }}</h1>
    <!-- <p class="mt-4">{{ casePost.excerpt }}</p> -->

    <case-section-general>
      <template v-slot:title>The Project.</template>
      <div v-html="$md.render(casePost.body)" />
      <ul class="grid gap-y-4 my-4">
        <li v-if="casePost.meta.duration"><p><b>Duration:</b> {{casePost.meta.duration}}</p></li>
        <li v-if="casePost.meta.methods"><p><b>Methods:</b> {{casePost.meta.methods}}</p></li>
        <li v-if="casePost.meta.tools"><p><b>Tools:</b> {{casePost.meta.tools}}</p></li>
        <li v-if="casePost.meta.role"><p><b>My role:</b> {{casePost.meta.role}}</p></li>
        <li v-if="casePost.meta.workedWith"><p><b>Worked with:</b> {{casePost.meta.workedWith}}</p></li>
      </ul>
    </case-section-general>

    <case-section-general class="mt-16">
      <template v-slot:title>Context.</template>

      <h3 class="font-bold text-lg">Function specification:</h3>
      <ul class="list-disc grid gap-y-2 my-4 ml-4 sm:ml-0">
        <li>
          <p>Format: no more than 1850 x 1000 pixels, everything must be visible at all times, no dialogs, dropdowns, scolling or etc is aloud. (with one exception)</p>
        </li>
        <li>
          <p>The user must be able to put together packages of up to 10 books</p>
        </li>
        <li>
          <p>The user needs to be able to always see at least 300 books</p>
        </li>
        <li>
          <p>100 of these 300 must visualise the following 4 properties:</p>
          <ul class="list-disc grid gap-y-1 ml-8 mt-2">
            <li><p>genre</p></li>
            <li><p>type</p></li>
            <li><p>target group</p></li>
            <li><p>popularity</p></li>
          </ul>
        </li>
        <li>
          <p>The remaining 200 must visualise at least 2 properties</p>
        </li>
        <li>
          <p>All books have tags, and the system should be able to show if books have mutual tags</p>
        </li>
        <li>
          <p>People with color blindness should be able to use the system</p>
        </li>
        <li>
          <p>The user needs to be able to read all the detailed information about a book. (Exception: This can be done with a pop-up)</p>
        </li>
      </ul>
    </case-section-general>

    <case-section-steps
      class="mt-16"
      :steps="casePost.steps"
      :visible-steps="casePost.meta.visibleSteps"
    />

    <!-- <img
      v-if="casePost.cover"
      class="cover-image"
      :src="casePost.cover.src"
      :alt="casePost.cover.alt"
    > -->
    <section v-if="casePost.gallery">
      <img
        v-for="image in casePost.gallery"
        class="image"
        :key="image.id"
        :src="image"
      >
    </section>
  </main>
</template>

<script>
export default {
  async asyncData({ params, payload }) {
    const hardcodedSlug = 'boka';
    if (payload) return { casePost: payload }
    else
      return {
        casePost: await require(`~/assets/content/cases/${hardcodedSlug}.json`)
      }
  }
}
</script>
