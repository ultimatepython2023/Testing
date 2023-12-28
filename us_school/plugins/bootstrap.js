import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min'

export default defineNuxtPlugin(NuxtApp =>{
    NuxtApp.provide('bootstrap',bootstrap)
})