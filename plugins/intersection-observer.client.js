import { ref } from 'vue';

/**
 * The observer variable.
 * @type {IntersectionObserver | null}
 */
const observer = ref(null);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('IntersectionObserver', {
    beforeMount(el, binding, vnode) {
      console.log('el:', el)
      const options = {
        threshold: binding.value.threshold || [0, 0.2],
        root: binding.value.root || null,
        rootMargin: binding.value.rootMargin || '0px 0px 0px 0px'
      };
      observer.value = new IntersectionObserver((entries) => {
        if (!entries[0].isIntersecting) {
          el.dispatchEvent(new CustomEvent('intersection-leave', { bubbles: true, detail: [entries[0]] }));
        } else {
          el.dispatchEvent(new CustomEvent('intersection-enter', { bubbles: true, detail: [entries[0]] }));
        }
        el.dispatchEvent(new CustomEvent('intersection-change', { bubbles: true, detail: [entries[0]] }));
      }, options);
    },
    mounted(el) {
      if (observer.value) observer.value?.observe?.(el);
    },
    beforeUnmount(el) {
      if (observer.value) observer.value?.disconnect?.();
    }
  })
})