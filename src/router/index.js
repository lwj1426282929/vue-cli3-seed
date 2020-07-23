import Vue from 'vue'
import Router from 'vue-router'

import user from './user'
import document from './document'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/layout'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home'),
      },
    ],
  },
  ...user,
  ...document,
  {
    name: '404',
    path: '*',
    redirect: '/404',
    component: () => import('@/layout'),
    children: [{
      path: '/404',
      component: () => import('@/views/404.vue')
    }]
  },
]

// hack Avoided redundant navigation to current location
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes,
})

export default router
