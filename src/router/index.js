import {
  createRouter,
  createWebHistory
} from '@ionic/vue-router';

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Pages/LoginPage.vue'),
  },
  {
    path: '/tabs/',
    component: () => import('@/views/Pages/TabsPage.vue'),
    children: [{
        path: '',
        redirect: '/tabs/news-feed'
      },
      {
        path: 'news-feed',
        component: () => import('@/views/Tabs/Tab1.vue')
      },
      {
        path: 'watch',
        component: () => import('@/views/Tabs/Tab2.vue')
      },
      {
        path: 'marketplace',
        component: () => import('@/views/Tabs/Tab3.vue')
      },
      {
        path: 'groups',
        component: () => import('@/views/Tabs/Tab3.vue')
      },
      {
        path: 'notifications',
        component: () => import('@/views/Tabs/Tab3.vue')
      },
      {
        path: 'menu',
        component: () => import('@/views/Tabs/Tab3.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router