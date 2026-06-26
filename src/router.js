import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './pages/LandingPage.vue'
import ClientScheduling from './pages/ClientScheduling.vue'
import LoginPage from './pages/LoginPage.vue'
import RegisterPage from './pages/RegisterPage.vue'
import DemoPage from './pages/DemoPage.vue'
import ContactPage from './pages/ContactPage.vue'

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
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/demo',
    name: 'Demo',
    component: DemoPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router