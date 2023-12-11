
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', meta: { transition: 'fade' }, component: () => import('pages/IndexPage.vue') },
      { path: 'about', meta: { transition: 'fade' }, component: () => import('pages/AboutPage.vue') },
      { path: 'service', meta: { transition: 'fade' }, component: () => import('pages/ServicePage.vue') },
      { path: 'contact', meta: { transition: 'fade' }, component: () => import('pages/ContactPage.vue') },
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
