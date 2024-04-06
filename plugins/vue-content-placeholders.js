import VueContentPlaceholders from 'vue-content-placeholders'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      VueContentPlaceholders: VueContentPlaceholders(),
    },
  };
});