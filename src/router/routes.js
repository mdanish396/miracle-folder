const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/about-miracle', name: 'AboutMiracle', component: () => import('src/pages/AboutMiracle.vue') },
      { path: '/awards', component: () => import('src/pages/AwardsPage.vue') },
      { path: '/current-development', component: () => import('src/pages/CurrentDevelopmentPage.vue') },
      { path: '/past-development', component: () => import('src/pages/PastDevelopmentPage.vue') },
      { path: '/announcement', component: () => import('src/pages/AnnouncementPage.vue') },
      { path: '/investor-centre', component: () => import('src/pages/InvestorCentrePage.vue') },
      { path: '/reports', component: () => import('src/pages/ReportsPage.vue') },
      { path: '/news', component: () => import('src/pages/NewsPage.vue') },
      { path: '/career', component: () => import('src/pages/CareerPage.vue') },
      { path: '/news-details/:slug', name: 'NewsDetails', component: () => import('src/pages/NewsDetails.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
