import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/pages/Dashboard.vue')
  },
  {
    path: '/startup-applications',
    name: 'StartupApplications',
    component: () => import('../views/pages/StartupApplications.vue')
  },
  {
    path: '/system-clean',
    name: 'SystemClean',
    component: () => import('../views/pages/SystemClean.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/pages/Services.vue')
  },
  {
    path: '/processes',
    name: 'Processes',
    component: () => import('../views/pages/Processes.vue')
  },
  {
    path: '/uninstaller',
    name: 'Uninstaller',
    component: () => import('../views/pages/Uninstaller.vue')
  },
  {
    path: '/disk-utilities',
    name: 'DiskUtilities',
    component: () => import('../views/pages/DiskUtilities.vue')
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import('../views/pages/Resources.vue')
  },
  {
    path: '/apt-repository-manager',
    name: 'APTRepositoryManager',
    component: () => import('../views/pages/APTRepositoryManager.vue')
  },
  {
    path: '/gnome-settings',
    name: 'GnomeSettings',
    component: () => import('../views/pages/GnomeSettings.vue')
  },
  {
    path: '/kde-settings',
    name: 'KDESettings',
    component: () => import('../views/pages/KDESettings.vue')
  },
  {
    path: '/cinnamon-settings',
    name: 'CinnamonSettings',
    component: () => import('../views/pages/CinnamonSettings.vue')
  },
  {
    path: '/host-file-editor',
    name: 'HostFileEditor',
    component: () => import('../views/pages/HostFileEditor.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/pages/Settings.vue')
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: () => import('../views/pages/Feedback.vue')
  },
  {
    path: '/donate',
    name: 'Donate',
    component: () => import('../views/pages/Donate.vue')
  }
]

export default createRouter({
    history: createWebHistory(),
  // linkExactActiveClass: 'active',
  routes: routes
})

