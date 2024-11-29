const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'about-miracle', component: () => import('src/pages/AboutMiracle.vue') },
      { path: '/awards', component: () => import('src/pages/AwardsPage.vue') },
      { path: '/investor-media', component: () => import('src/pages/InvestorMediaPage.vue') },
      { path: '/current-development', component: () => import('src/pages/CurrentDevelopmentPage.vue') },
      { path: '/past-development', component: () => import('src/pages/PastDevelopmentPage.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
