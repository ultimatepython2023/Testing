
import axios from "axios";




export default {

   async signout({commit}, payload){
      localStorage.setItem("AT", "")
      await commit('SIGNOUT_MUTTITIONS',"signout")
      return "signout"



 },

     async login({commit}, payload){

        const url = useRuntimeConfig().public.base_url
        const headers = {
        "content-type": 'application/json',
        };
        const request = {'email': payload.email, 'password': payload.password}
        await axios.post(url+'/auth/login',request, { headers } ).then((response)=>{
          const get_data = response.data
          if(get_data['access_token']){
            localStorage.setItem("AT", get_data['access_token'])
          }
          commit('AUTHUNTICATION_STATUS',get_data)
          return get_data

        }).catch(error => {
          commit('AUTHUNTICATION_STATUS',error)
          return error
        });
     },

      async check_authentication({commit}, payload){
          const url = useRuntimeConfig().public.base_url
      const access_token = localStorage.getItem(("AT"))
      const headers = {

          "content-type": 'application/json"',
          "Authorization": "bearer "+ access_token
          };
      await axios.post(url+'/auth/check',{headers}).then((response)=>{
       const get_data = response.data
       if(get_data['is_valid']){
          
          commit('AUTHUNTICATION_STATUS',{'access_token': localStorage.getItem('AT')})

       }else{
          commit('AUTHUNTICATION_STATUS',{})

       }
       return get_data
       

     
      
      
      })

    
}   
      
      










}