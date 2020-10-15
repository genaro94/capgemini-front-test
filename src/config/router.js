import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import Debit from '@/components/transaction/Debit'
import Withdraw from '@/components/transaction/Withdraw'
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
    path: '/transaction/deposits',
    component: Debit,
    meta: {requiredAuth: true}
  },

  {
    name: 'withdraw',
    path: '/transaction/withdraws',
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