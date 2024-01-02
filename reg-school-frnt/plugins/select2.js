// plugins/select2.client.ts
import Select2 from 'nuxt3-select2';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("select2", Select2, {});
});