import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Me from '../views/Me.vue'
import AboutMe from '../views/AboutMe.vue'
import Login from '../views/Login.vue'
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Login
  },
  {
    path : '',
    name : 'customer' ,
    component: () => import('../views/CustomerView.vue') ,
    children : [
      {
        path: '/home',
        name: 'homepage',
        component: () => import('../views/Customer_Home.vue')
      },
      {
        path: '/shop',
        name: 'homepage',
        component: () => import('../views/ShopView.vue')
      },
      {
        path: '/shop/info',
        name: '',
        component: () => import('../views/InfoProduct.vue')
      }
    ]
  },
  {
    path: '',
    name: 'toolbar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Toolbar.vue') , 
    children : [
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
      },
      {
        path: '/grade',
        name: 'grade',
        component: () => import('../views/Grade.vue')
      },
      {
        path: '/simple',
        name: 'simple',
        component: () => import('../views/Simple.vue')
      },
      {
        path: '/apicon',
        name: 'apicon',
        component: () => import('../views/Apicon.vue')
      }
    ]
  },
  {
    path: '',
    name: 'menubar',
    component: () => import('../views/MenuBar.vue'),
    children: [
      {
        path: '/me',
        name: 'me',
        component: Me
      },
      {
        path: '/aboutme',
        name: 'aboutme',
        component: AboutMe
      }
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
