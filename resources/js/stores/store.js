import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: '',
    error: '',
    isLogin: false
  },
  mutations: {
    setUsuario(state, payload) {
      state.usuario = payload
    },
    setError(state, payload) {
      state.error = payload
    }
  },
  actions: {
    crearUsuario({
      commit
    }, payload) {
      console.log(payload)
      commit('setUsuario', {
        email: payload.email,
        password: payload.password
      })
    }

  },
  modules: {}
})
