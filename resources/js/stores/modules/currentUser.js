const state = {
  usuario: {},
  error: '',
  isLogin: false
}

const getters = {};

const actions = {
  crearUsuario({commit}, payload) {
    console.log(payload)
    commit('setUsuario', {
      email: payload.email,
      password: payload.password
    })
  },
  login({}, user){
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
  }
}

const mutations = {
  setUsuario(state, payload) {
    state.usuario = payload
  },
  setError(state, payload) {
    state.error = payload
  }
};

export defaults {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
