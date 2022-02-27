import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import "bootstrap/dist/css/bootstrap.min.css"



import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
Vue.config.productionTip = false

const app=new Vue({
  router,
  store,
  vuetify,
   data: { loading: false },
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => {
  app.loading = true
    next()
})

router.afterEach(() => {
  setTimeout(() => app.loading = false, 5000) // timeout for demo purposes
})