import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/ordem-servico',
      name: 'ordem-servico',
      component: () => import('../views/OrdemServico.vue')
    },
    {
      path: '/cadastro-ordem-servico',
      name: 'cadastro-ordem-servico',
      component: () => import('../views/CadastroOrdemServico.vue')
    },
  ]
})

export default router
