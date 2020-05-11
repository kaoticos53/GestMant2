import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/js/components/Home'
import About from '@/js/components/About'
import UsersIndex from '@/js/components/UsersIndex'
import UsersEdit from '@/js/components/UsersEdit'
import UsersCreate from '@/js/components/UsersCreate'
import NotFound from '@/js/components/NotFound'
import login from '@/js/components/login'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/users',
    name: 'users.index',
    component: UsersIndex
  },
  {
    path: '/users/:id/edit',
    name: 'users.edit',
    component: UsersEdit
  },
  {
    path: '/users/create',
    name: 'users.create',
    component: UsersCreate
  },
  {
    path: '/404',
    name: '404',
    component: NotFound
  }, {
    path: '*',
    redirect: '/404'
  }
  ]
})

export default router
