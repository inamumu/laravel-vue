import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store'
//view
import List from './views/List.vue'
import Login from './views/Login.vue'
import System from './views/errors/System.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: List
  },
  {
    path: '/login',
    component: Login,
    beforeEnter(to, from, next) {
      if(store.getters['auth/check']) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/500',
    component: System
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router