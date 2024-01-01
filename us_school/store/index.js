import {createStore} from 'vuex';
import GetLanguage from "@/store/GetLanguage";
import Authentication from "@/store/Authentication"

const store = createStore({
    modules:{
      
        GetLanguage,
        Authentication
        
        
    }
})

export default store;