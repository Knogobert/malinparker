import { SET_CASE_POSTS, SET_DESIGN_POSTS } from './mutations.type'

export const state = () => ({
  casePosts: [],
  designPosts: []
})

export const mutations = {
  [SET_CASE_POSTS](state, list) {
    state.casePosts = list
  },
  [SET_DESIGN_POSTS](state, list) {
    state.designPosts = list
  }
}

export const actions = {
  getPosts(files) {
    return files.keys().map((key) => {
      let res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })
  },
  async nuxtServerInit({ commit }) {
    // Case Study collection type
    let caseFiles = await require.context('~/assets/content/cases/', false, /\.json$/)
    await commit(SET_CASE_POSTS, actions.getPosts(caseFiles))

    // Graphic Design collection type
    let designFiles = await require.context('~/assets/content/designs/', false, /\.json$/)
    await commit(SET_DESIGN_POSTS, actions.getPosts(designFiles))

    // ? When adding/changing NetlifyCMS collection types, make sure to:
    // ? 1. Add/rename exact slugs here
    // ? 2. Add/rename the MUTATION_TYPE names in `./mutations.type.js`
    // ? 3. Add/rename `pages/YOUR_SLUG_HERE` and use the Vuex store like the included examples
    // ? If you are adding, add a state, mutation and commit (like above) for it too
  }
}
