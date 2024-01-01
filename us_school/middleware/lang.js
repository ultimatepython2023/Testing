
import store from "~/store"
import axios from 'axios'

export default defineNuxtRouteMiddleware(()=>{
    
    const route = useRoute();
    let locale = route.query.lang;
    if(!locale){
        window.location.href =route.href +'/?lang=en'

    }

    store.dispatch('nuxtServerInit',{lang:locale})

      
})
