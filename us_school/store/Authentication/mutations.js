export default{



    AUTHUNTICATION_STATUS(state,data){
        if(data['access_token']){
            state.is_authenticated = true
            state.auth_status = 'success'
        }else{
            state.is_authenticated = false
            state.auth_status = 'invalid'
        }
    },
    SIGNOUT_MUTTITIONS(state,data){
        state.is_authenticated = false
        state.auth_status = "signout"

    }
       



    // AUTHUNTICATION_STATUS(state,data){
    //     if(data['access_token']){
    //         localStorage.setItem('AT', data['access_token'])
    //         state.is_authenticated = true
    //         state.auth_status = 'success'
    //     }else{
    //         state.is_authenticated = false
    //         state.auth_status = 'invalid'

    //     }
    // },
        



}