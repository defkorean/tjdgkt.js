import { createApp, provide, h } from 'vue'
import App from './App.vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { ApolloClient, InMemoryCache } from '@apollo/client'

import router from './router'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    cache, 
    uri: 'http://localhost:8000/graphql',
})

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  }, 
  router,
  render: () => h(App),
})

app.use(router).mount('#app')