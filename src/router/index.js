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
        component: () => import('@/views/Tabs/NewsFeedTab.vue')
      },
      {
        path: 'watch',
        component: () => import('@/views/Tabs/WatchTab.vue')
      },
      {
        path: 'marketplace',
        component: () => import('@/views/Tabs/MarketPlaceTab.vue')
      },
      {
        path: 'groups',
        component: () => import('@/views/Tabs/GroupsTab.vue')
      },
      {
        path: 'notifications',
        component: () => import('@/views/Tabs/NotficationsTab.vue')
      },
      {
        path: 'menu',
        component: () => import('@/views/Tabs/MenuTab.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router