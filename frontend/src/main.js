import Vue from 'vue'
import App from './App.vue'
import { createProvider } from './vue-apollo'

import router from '@/router'

Vue.config.productionTip = false

new Vue({
  router,

  apolloProvider: createProvider({
    httpEndpoint: 'http://localhost:8000/graphql',
    wsEndpoint: null,
  }),

  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
