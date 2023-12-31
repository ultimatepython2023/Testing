
import store from "~/store"
import axios from 'axios'

export default defineNuxtRouteMiddleware(()=>{
    
    const route = useRoute();
    let locale = route.query.lang;
    if(!locale){
        navigateTo('/?lang=en' )
    }

    store.dispatch('nuxtServerInit',{lang:locale})

      
})