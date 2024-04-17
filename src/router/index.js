import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "about" */ '../views/RegisterView.vue')
  },
  {
    path: '/create-order/:productId',
    name: 'createOrder',
    component: () => import(/* webpackChunkName: "about" */ '../views/OrderProductView.vue')
  },
  {
    path: '',
    name: 'navbar',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/HomeStoreView.vue'),
    children: [
      {
        path: '/store',
        name: 'store',
        component: () => import(/* webpackChunkName: "about" */ '../views/StoreView.vue')
      },
      {
        path: '/store-management',
        name: 'storeManagement',
        // MyStoreManageView
        component: () => import(/* webpackChunkName: "about" */ '../views/MyStoreManageView.vue')
      }
      
    ],
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
