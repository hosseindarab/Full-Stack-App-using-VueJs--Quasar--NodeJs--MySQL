import Home from "../layouts/MainLayout.vue"

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/to-do-list', component: () => import('pages/ToDoList.vue') },
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
