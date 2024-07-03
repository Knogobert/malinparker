<template>
  <section class="" v-once>
    <div class="grid md:grid-cols-2 grid-flow-row-dense gap-12">
      <div class="">
        <h2 class="title mb-8">Work experience.</h2>
        <Motion :initial="{ opacity: 0, scale: 0.9 }" :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: .5, delay: 0.0 }">
          <h3 class="heading-3">UX Designer — HiQ Gothenburg</h3>
          <h4 class="heading-4">2021/12 — current</h4>
          <p class="mb-8">
            Working in different projects within small and large teams. Conducting research as well as designing
            detailed
            UI design. Has been working clients such as Telia, PEAB, Mölnlycke Health Care and Optigroup.
          </p>
        </Motion>
        <Motion :initial="{ opacity: 0, scale: 0.9 }" :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: .5, delay: 0.1 }">
          <h3 class="heading-3">Freelance Designer</h3>
          <h4 class="heading-4">2017/01 — current</h4>
          <p class="mb-8">
            Various freelance work, mostly with magazine layout and production but also different commission work within
            graphic design, illustration and photography.
          </p>
        </Motion>
        <Motion :initial="{ opacity: 0, scale: 0.9 }" :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: .5, delay: 0.2 }">
          <h3 class="heading-3">Art director — Scandinavian Photo</h3>
          <h4 class="heading-4">2018/04 — 2019/08</h4>
          <p class="">
            I was in charge of, and produced, most of all the visual content for Scandinavian Photo. This included
            producing coherent material for all of Scandinavian Photos platforms, both digital and printed.
          </p>
          <ul class="list-disc list-inside sm:list-outside mt-2 mb-8 space-y-2">
            <li>
              Setting guidelines and directions for visual merchandising of campaigns in all of Scandinavian Photos
              physical stores.
            </li>
            <li>Produced templates and guidelines for all marketing material in social channels and the web shop.</li>
            <li>Edited text content for social channels.</li>
          </ul>
        </Motion>
        <Motion :initial="{ opacity: 0, scale: 0.9 }" :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: .5, delay: 0.3 }">
          <h3 class="heading-3">Intern — bolt komminkation</h3>
          <h4 class="heading-4">2017/02 — 2017/05</h4>
          <p class="mb-8">
            Worked as Assistant Art Director with various different tasks within illustration, motion graphics, web
            design, studio photography and produced content for clients’ social media.
          </p>
        </Motion>
      </div>

      <div class="">
        <h2 class="title mb-8">Education.</h2>
        <Motion :initial="{ opacity: 0, scale: 0.9 }" :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: .5, delay: 0.4 }">
          <h3 class="heading-3">UX Design</h3>
          <h4 class="heading-4">2020/01 — 2021/12</h4>
          <p class="mb-8">
            Vocational University<br />
            Yrgo<br />
            Gothenburg, Sweden<br />
          </p>
        </Motion>
        <Motion :initial="{ opacity: 0, scale: 0.9 }" :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: .5, delay: 0.5 }">
          <h3 class="heading-3">Graphic Design & Communication</h3>
          <h4 class="heading-4">2015/08 — 2017/05</h4>
          <p class="mb-8">
            Vocational University<br />
            Södra Vätterbygdens Folkhögskola Jönköping, Sweden<br />
          </p>
        </Motion>
        <Motion :initial="{ opacity: 0, scale: 0.9 }" :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: .5, delay: 0.6 }">
          <h3 class="heading-3">Preparatory Industrial design</h3>
          <h4 class="heading-4">2014/08 — 2015/05</h4>
          <p class="mb-8">
            FIDU, Hällefors, Sweden<br />
          </p>
        </Motion>
        <Motion :initial="{ opacity: 0, scale: 0.9 }" :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: .5, delay: 0.7 }">
          <h3 class="heading-3">High School</h3>
          <h4 class="heading-4">2010/08 — 2013/06</h4>
          <p class="mb-8">
            Västerhöjdsgymnasiet, Tech and Design<br />
            Skövde, Sweden<br />
          </p>
        </Motion>
      </div>
    </div>

    <General-Footer button />
  </section>
</template>

<script setup>
definePageMeta({
  layout: 'nude',
})
</script>
