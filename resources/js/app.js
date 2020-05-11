import './bootstrap'
import Vue from 'vue'
import '@/js/registerServiceWorker'
import store from '@/js/stores/store'
import '@/js/plugins/axios'
import vuetify from '@/js/plugins/vuetify'

// Route Information for Vue Router
import router from '@/js/routes.js'

// Component File
import App from '@/js/views/App'
Vue.component('login', require('./components/login'))
Vue.component(
  'passport-clients',
  require('./components/passport/Clients.vue').default
)

Vue.component(
  'passport-authorized-clients',
  require('./components/passport/AuthorizedClients.vue').default
)

Vue.component(
  'passport-personal-access-tokens',
  require('./components/passport/PersonalAccessTokens.vue').default
)

// Vue.use(vuetify)

const app = new Vue({
  el: '#app',
  store,
  vuetify,
  router,
  render: h => h(App)
})

export default app
