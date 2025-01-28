const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/about-miracle', name: 'AboutMiracle', component: () => import('src/pages/AboutMiracle.vue') },
      { path: '/awards', component: () => import('src/pages/AwardsPage.vue') },
      { path: '/current-development', component: () => import('src/pages/CurrentDevelopmentPage.vue') },
      { path: '/past-development', component: () => import('src/pages/PastDevelopmentDetails.vue') },
      { path: '/announcement', component: () => import('src/pages/AnnouncementPage.vue') },
      { path: '/investor-centre', component: () => import('src/pages/InvestorCentrePage.vue') },
      { path: '/reports', component: () => import('src/pages/ReportsPage.vue') },
      { path: '/news', component: () => import('src/pages/NewsPage.vue') },
      { path: '/career', component: () => import('src/pages/CareerPage.vue') },
      { path: '/career-opportunities', component: () => import('src/pages/CareerDetails.vue') },
      { path: '/news-details/:slug', name: 'NewsDetails', component: () => import('src/pages/NewsDetails.vue') },
      { path: '/contacts', component: () => import('src/pages/ContactUs.vue') },
      { path: '/development', component: () => import('src/pages/DevelopmentPage.vue') },
      { path: '/for-sale/:slug', name: 'ForSale', component: () => import('src/pages/ForSale.vue') },
      { path: '/for-lease/:slug', name: 'ForLease', component: () => import('src/pages/ForLease.vue') },
      { path: '/past-development/:slug', name: 'PastDevelopmentDetails', component: () => import('src/pages/PastDevelopmentDetails.vue') },
      { path: '/property/:slug', name: 'CurrentPropertyDetails', component: () => import('src/pages/CurrentPropertyDetails.vue') },
      { path: '/past-property/:slug', name: 'PastPropertyDetails', component: () => import('src/pages/PastPropertyDetails.vue') },
      { path: '/lease-property/:slug', name: 'LeasePropertyDetails', component: () => import('src/pages/LeasePropertyDetails.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
