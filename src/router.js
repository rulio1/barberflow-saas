import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './pages/LandingPage.vue'
import ClientScheduling from './pages/ClientScheduling.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LandingPage
  },
  {
    path: '/agendamento',
    name: 'ClientScheduling',
    component: ClientScheduling
  },
  {
    path: '/:barbershopName',
    name: 'BarbershopScheduling',
    component: ClientScheduling
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router