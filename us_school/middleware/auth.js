import store from "~/store"
export default defineNuxtRouteMiddleware((to,from )=>{

    store.dispatch('check_authentication',{}).then(()=>{
        if(store.state.Authentication.user_auth == "1"){
            return navigateTo(to.fullPath)
        }else{
            return navigateTo("/")

        }

    }
    )

   
    

})