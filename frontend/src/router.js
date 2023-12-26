import { createRouter, createWebHistory } from 'vue-router'

import Post from './components/MyPost'
import Author from './components/MyAuthor'
import PostsByTag from './components/PostsByTag'
import AllPosts from './components/AllPosts'

const routes = [
  { path: '/author/:username', 
    component: Author 
  },
  { path: '/post/:slug', 
    component: Post 
  },
  { path: '/tag/:tag', 
    component: PostsByTag 
  },
  { path: '/', 
    component: AllPosts 
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router