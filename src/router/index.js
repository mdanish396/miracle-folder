import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth'
        }
      } else {
        return { top: 0 }
      }
    },
    routes,

    // Leave this as is and make changes in quasar.config.js instead!
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  // ✅ Proper error handling
  Router.onError((error) => {
    console.error('Routing error:', error)
    Router.push('/500').catch(() => {}) // Prevent infinite loops
  })

  return Router
})
