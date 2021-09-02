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
    component: () => import('@/views/Pages/Login.vue'),
  },
  {
    path: '/tabs/',
    component: () => import('@/views/Pages/Tabs.vue'),
    children: [{
        path: '',
        redirect: '/tabs/tab1'
      },
      {
        path: 'tab1',
        component: () => import('@/views/Tabs/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tabs/Tab2.vue')
      },
      {
        path: 'tab3',
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