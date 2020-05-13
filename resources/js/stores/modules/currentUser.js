const state = {
  usuario: {},
  user:{},
  error: '',
  isLogin: false
}

const getters = {};

const actions = {
  getUser({commit}){
    axios.get("/api/user/current")
    .then( response => {
      commit('setUser', response.data);
    });
  },
  crearUsuario({commit}, payload) {
    console.log(payload)
    commit('setUsuario', {
      email: payload.email,
      password: payload.password
    })
  },
  loginUser({}, user){
    axios
    .post("api/login", {
      email: user.email,
      password: user.password
    })
    .then( response => {
      console.log(response.data)
      if (response.data.access_token) {
        // save token
        localStorage.setItem(
          "api_token",
          response.data.access_token
        )
        window.location.replace("/home")
      }
    })
  },
  logoutUser(){
    //remove token
    localStorage.removeItem("api_token");
    windows.location.replace("/login");
  }
}

const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  setError(state, payload) {
    state.error = payload
  },
  setUser(state, payload) {
    state.user = payload;
  }
};

export defaults {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
