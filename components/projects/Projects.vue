<template>
  <div class="projects">
    <project-single
      v-for="(project, i) in projects"
      :key="project.id"
      :project="project"
      :class="{ 'project--reverse': (i + 1) % 2 === 0 }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          slug: 'boka',
          title: 'bokA.',
          featuredImage: { src: '/img/boka-feature.png', alt: 'en applikation med 300 valbara böcker' },
          images: [],
          excerpt: 'Applikation med suverän position för bibliotekarier runt hela landet falukorv. En konceptlösning på hur man kan välja ut böcker och se vilken genre de tillhör. Där får man inspiration till nästa val och förslag på att kunna plocka böcker i samma kategori eller fylla i de luckor man saknar.',
          meta: {
            steps: [1, 2, 3, 5],
            duration: '5 days',
            methods: '',
            tools: '',
            role: '',
            workedWith: '',
          }
        },
        {
          slug: 'catan',
          title: 'Catan.',
          featuredImage: { src: '/img/catan-feature.jpg', alt: 'en ipad med ett spelbräde och en iphone som kontrollerar brädet' },
          images: [],
          excerpt: 'Applikation med suverän position för bibliotekarier runt hela landet falukorv. En konceptlösning på hur man kan välja ut böcker och se vilken genre de tillhör. Där får man inspiration till nästa val och förslag på att kunna plocka böcker i samma kategori eller fylla i de luckor man saknar.',
          meta: {
            steps: [ 4, 5],
            duration: '7 days',
            methods: '',
            tools: '',
            role: '',
            workedWith: '',
          }
        }
      ]
    }
  },
}
</script>

<style lang="postcss" scoped>
.projects {
  & .project {
    & + .project {
      @apply mt-8;
    }
  }
}
</style>