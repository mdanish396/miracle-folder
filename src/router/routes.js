const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/about-miracle-land', name: 'AboutMiracle', component: () => import('src/pages/AboutMiracle.vue') },
      { path: '/awards', component: () => import('src/pages/AwardsPage.vue') },
      { path: '/past-development', component: () => import('src/pages/PastDevelopmentDetails.vue') },
      { path: '/announcement', component: () => import('src/pages/AnnouncementPage.vue') },
      { path: '/investor-centre', component: () => import('src/pages/InvestorCentrePage.vue') },
      { path: '/reports', component: () => import('src/pages/ReportsPage.vue') },
      { path: '/news', component: () => import('src/pages/NewsPage.vue') },
      { path: '/career', component: () => import('src/pages/CareerPage.vue') },
      { path: '/careers', component: () => import('src/pages/CareerDetails.vue') },
      { path: '/news-details/:slug', name: 'NewsDetails', component: () => import('src/pages/NewsDetails.vue') },
      { path: '/contact', component: () => import('src/pages/ContactUs.vue') },
      { path: '/developments', component: () => import('src/pages/DevelopmentPage.vue') },
      { path: '/developments/:slug', name: 'Developments', component: () => import('src/pages/ForSale.vue') },
      { path: '/for-lease/:slug', name: 'ForLease', component: () => import('src/pages/ForLease.vue') },
      { path: '/past-developments/:slug', name: 'PastDevelopmentDetails', component: () => import('src/pages/PastDevelopmentDetails.vue') },
      { path: '/developments/property/:slug', name: 'CurrentPropertyDetails', component: () => import('src/pages/CurrentPropertyDetails.vue') },
      { path: '/past-property/:slug', name: 'PastPropertyDetails', component: () => import('src/pages/PastPropertyDetails.vue') },
      { path: '/lease-property/:slug', name: 'LeasePropertyDetails', component: () => import('src/pages/LeasePropertyDetails.vue') },
      { path: '/500', component: () => import('pages/ServerError.vue') }
    ]
  },
  {

    path: '/:catchAll(.*)*',
    component: () => import('pages/PageNotFound.vue')
  }
]

export default routes
