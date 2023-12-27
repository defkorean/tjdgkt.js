import { createApp, h } from 'vue'
import App from './App.vue'
import { createApolloProvider } from '@vue/apollo-option'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

import router from './router'

// cache implementation
const cache = new InMemoryCache()

// HTTP connetion to graphQL API
const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql'
})

// creates apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache, 
})

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

// creates and deploys app
const app = createApp({
  render: () => h(App),
  router,
})

app.use(router)
app.use(apolloProvider)
app.mount('#app')