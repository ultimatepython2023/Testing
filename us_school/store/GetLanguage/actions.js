
import axios from "axios";


export default {




  async nuxtServerInit({commit}, param){
    const api_url = useRuntimeConfig().public.base_url

    // let locale = param ? param : 'en';
      await axios.get(api_url + '/config?user=true&lang='+ param.lang
      ).then(res =>{
        const get_data = res.data



        commit('addInLang', get_data.configResponse.lang);
        commit('setLocale', get_data.configResponse.locale);
        commit('setLangs', get_data.configResponse.langs);
        commit('setCurrency', get_data.configResponse.currency);

     })
     
 
     
 }


    
        

    }
    

      










