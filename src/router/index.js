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
      path: '/cadastro-computador',
      name: 'cadastro-computador',
      component: () => import('../views/CadastroComputador.vue')
    },
    {
      path: '/cadastro-cliente',
      name: 'cadastro-cliente',
      component: () => import('../views/CadastroCliente.vue')
    },
  ]
})

export default router
