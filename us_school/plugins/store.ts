import store from "~/store";

export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.use(store)
  })