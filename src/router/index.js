import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home.vue'
// import { UserLayout,BasicLayout,RouteView,PageView} from '@/layouts'
import { BasicLayout,PageView } from '@/layouts'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: BasicLayout,
    children: [
      {
        path: 'about1',
        name: 'About1',  
        component: () => import('@/views/Home.vue')
      },
      {
        path: '/about',
        component: PageView,
        children: [
          {
            path: 'about2',
            name: 'About2',  
            component: () => import('@/views/Home.vue')
          },
          {
            path: 'about3',
            name: 'About3',  
            component: () => import('@/views/Home.vue')
          }
        ]
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
