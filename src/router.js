import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './pages/LandingPage.vue'
import ClientScheduling from './pages/ClientScheduling.vue'
import LoginPage from './pages/LoginPage.vue'
import RegisterPage from './pages/RegisterPage.vue'
import DemoPage from './pages/DemoPage.vue'
import ContactPage from './pages/ContactPage.vue'
import BarbershopDashboard from './pages/BarbershopDashboard.vue'
import SchedulingDemo from './pages/demo/SchedulingDemo.vue'
import DashboardDemo from './pages/demo/DashboardDemo.vue'
import CRMDemo from './pages/demo/CRMDemo.vue'
import FinancialDemo from './pages/demo/FinancialDemo.vue'

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
    path: '/demo/agendamento',
    name: 'SchedulingDemo',
    component: SchedulingDemo
  },
  {
    path: '/demo/dashboard',
    name: 'DashboardDemo',
    component: DashboardDemo
  },
  {
    path: '/demo/crm',
    name: 'CRMDemo',
    component: CRMDemo
  },
  {
    path: '/demo/financeiro',
    name: 'FinancialDemo',
    component: FinancialDemo
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: BarbershopDashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard/services',
    name: 'DashboardServices',
    component: BarbershopDashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard/barbers',
    name: 'DashboardBarbers',
    component: BarbershopDashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard/schedules',
    name: 'DashboardSchedules',
    component: BarbershopDashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard/settings',
    name: 'DashboardSettings',
    component: BarbershopDashboard,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router