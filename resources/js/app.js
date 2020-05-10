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

// Vue.use(vuetify)

const app = new Vue({
  el: '#app',
  store,
  vuetify,
  router,
  render: h => h(App)
})

export default app
