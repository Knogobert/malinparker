import { defineStore } from 'pinia'

export const useStore = defineStore('mainStore', () => {
  const casePosts = ref([]);
  const designPosts = ref([]);

  function getPosts(files) {
    return files.keys().map((key) => {
      let res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
  }

  async function initServerContent() {
    // Case Study collection type
    let caseFiles = await require.context('~/assets/content/cases/', false, /\.json$/)
    casePosts.value = getPosts(caseFiles)

    // Graphic Design collection type
    let designFiles = await require.context('~/assets/content/designs/', false, /\.json$/)
    designPosts.value = getPosts(designFiles)

    // ? When adding/changing NetlifyCMS collection types, make sure to:
    // ? 1. Add/rename exact slugs here
    // ? 2. Add/rename the MUTATION_TYPE names in `./mutations.type.js`
    // ? 3. Add/rename `pages/YOUR_SLUG_HERE` and use the Vuex store like the included examples
    // ? If you are adding, add a state, mutation and commit (like above) for it too
  }

  if (process.server) {
    initServerContent()
  }
})