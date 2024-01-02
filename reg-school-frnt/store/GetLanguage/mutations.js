export default{

  addInLang(state, data){
    state.lang = data;
  },
  setLocale(state, data){
      state.locale = data;
  },
  setLangs(state, data){
      state.langs = data;
  },
  setCurrency(state, data){
      state.currency = data;
  },
  setStep(state, data){
      state.step = data;
  },
  setStudentNumber(state, data){
      state.student_number = data;
  },
  setAuth(state,auth){
      state.auth = auth;
  },
  setRef(state,ref){
      state.ref = ref;
  },
  setIsAuth(state,isAuth){
      state.isAuth = isAuth;
  },






    }