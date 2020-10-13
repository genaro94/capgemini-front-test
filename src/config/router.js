import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import Debit from '@/components/admin/Debit'
import Withdraw from '@/components/admin/Withdraw'
import Auth from '@/components/auth/Auth'

Vue.use(VueRouter)

const routes = [
  {
    name: 'home',
    path: '/home',
    component: Home,
    meta: {requiredAuth: true}
  },

  {
    name: 'deposit',
    path: '/admin/deposits',
    component: Debit,
    meta: {requiredAuth: true}
  },

  {
    name: 'withdraw',
    path: '/admin/withdraws',
    component: Withdraw,
    meta: {requiredAuth: true}
  }, 

  {
    name: 'auth',
    path: '/',
    component: Auth
  }, 
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  
  const json = localStorage.getItem('__knowledge_user')
  if(to.matched.some(record => record.meta.requiredAuth)){
      const user = JSON.parse(json)
      user ? next() : next({path: '/'})
  }else {
    next()
  }
})

export default router