import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/startup-applications',
    name: 'StartupApplications',
    component: () => import('../views/StartupApplications.vue')
  },
  {
    path: '/system-clean',
    name: 'SystemClean',
    component: () => import('../views/SystemClean.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/processes',
    name: 'Processes',
    component: () => import('../views/Processes.vue')
  },
  {
    path: '/uninstaller',
    name: 'Uninstaller',
    component: () => import('../views/Uninstaller.vue')
  },
  {
    path: '/disk-utilities',
    name: 'DiskUtilities',
    component: () => import('../views/DiskUtilities.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
