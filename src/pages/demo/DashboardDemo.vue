<template>
  <div class="min-h-screen bg-graphite-950 text-graphite-50 font-sans">
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
             alt="Professional barber shop interior"
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-graphite-950/80"></div>
      </div>

      <!-- Navigation -->
      <nav class="absolute top-0 left-0 right-0 z-50">
        <div class="container mx-auto px-4 py-6">
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div class="w-12 h-12 bg-amber-glow-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h1 class="text-xl font-semibold">BarberFlow</h1>
                <p class="text-sm text-graphite-400">Demo: Dashboard de Gerenciamento</p>
              </div>
            </div>
            <div class="flex space-x-3">
              <router-link to="/demo"
                           class="px-4 py-2 bg-neon-green-500 text-white rounded-lg font-semibold hover:bg-neon-green-600 transition-colors">
                Voltar para Demos
              </router-link>
            </div>
          </div>
        </div>
      </nav>

      <!-- Demo Content -->
      <div class="relative z-10 w-full max-w-6xl mx-auto px-4">
        <div class="bg-graphite-800/90 backdrop-blur-sm rounded-2xl p-8 border border-graphite-700">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold mb-4">Demo: Dashboard de Gerenciamento</h2>
            <p class="text-graphite-400">Painel de controle completo com métricas em tempo real</p>
          </div>

          <!-- Dashboard Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <!-- KPI Cards -->
            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-semibold">Agendamentos Hoje</h3>
                <div class="w-8 h-8 bg-amber-glow-500 rounded-full flex items-center justify-center">
                  <span class="text-sm">📅</span>
                </div>
              </div>
              <p class="text-3xl font-bold text-neon-green-400">12</p>
              <p class="text-graphite-400 text-sm mt-1">+3 vs ontem</p>
            </div>

            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-semibold">Receita Hoje</h3>
                <div class="w-8 h-8 bg-neon-green-500 rounded-full flex items-center justify-center">
                  <span class="text-sm">💰</span>
                </div>
              </div>
              <p class="text-3xl font-bold text-neon-green-400">R$ 1.250</p>
              <p class="text-graphite-400 text-sm mt-1">+15% vs ontem</p>
            </div>

            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-semibold">Clientes Ativos</h3>
                <div class="w-8 h-8 bg-amber-glow-500 rounded-full flex items-center justify-center">
                  <span class="text-sm">👥</span>
                </div>
              </div>
              <p class="text-3xl font-bold text-neon-green-400">47</p>
              <p class="text-graphite-400 text-sm mt-1">+2 novos hoje</p>
            </div>

            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-semibold">Taxa de Ocupação</h3>
                <div class="w-8 h-8 bg-neon-green-500 rounded-full flex items-center justify-center">
                  <span class="text-sm">📊</span>
                </div>
              </div>
              <p class="text-3xl font-bold text-neon-green-400">82%</p>
              <p class="text-graphite-400 text-sm mt-1">Ótima performance!</p>
            </div>
          </div>

          <!-- Charts Section -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Revenue Chart -->
            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <h3 class="text-xl font-semibold mb-4">Receita Mensal</h3>
              <div class="h-64 flex items-end space-x-2">
                <div v-for="(value, index) in revenueData" :key="index" class="flex flex-col items-center">
                  <div class="w-8 bg-neon-green-500 rounded-t" :style="{ height: value + 'px' }"></div>
                  <span class="text-xs text-graphite-400 mt-1">{{ months[index] }}</span>
                </div>
              </div>
              <div class="flex justify-between text-sm text-graphite-400 mt-2">
                <span>R$ 0</span>
                <span>R$ 5K</span>
                <span>R$ 10K</span>
                <span>R$ 15K</span>
              </div>
            </div>

            <!-- Appointments Chart -->
            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <h3 class="text-xl font-semibold mb-4">Agendamentos por Serviço</h3>
              <div class="space-y-4">
                <div v-for="service in servicesData" :key="service.name" class="flex items-center space-x-3">
                  <div class="w-4 h-4 rounded-full" :style="{ backgroundColor: service.color }"></div>
                  <span class="flex-1 text-sm">{{ service.name }}</span>
                  <span class="text-sm font-medium">{{ service.value }}%</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Recent Activity -->
          <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
            <h3 class="text-xl font-semibold mb-4">Atividade Recente</h3>
            <div class="space-y-4">
              <div v-for="activity in recentActivities" :key="activity.id" class="flex items-start space-x-3 p-3 hover:bg-graphite-600 rounded transition-colors">
                <div class="w-10 h-10 bg-amber-glow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="text-sm">{{ activity.icon }}</span>
                </div>
                <div class="flex-1">
                  <p class="font-medium">{{ activity.title }}</p>
                  <p class="text-graphite-400 text-sm">{{ activity.description }}</p>
                  <p class="text-graphite-500 text-xs mt-1">{{ activity.time }}</p>
                </div>
                <div class="text-right">
                  <p class="font-medium">{{ activity.amount }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <button class="bg-graphite-700 p-4 rounded-xl border border-graphite-600 hover:bg-graphite-600 transition-colors text-center">
              <div class="w-10 h-10 bg-amber-glow-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span>+</span>
              </div>
              <p class="font-medium">Novo Agendamento</p>
            </button>
            <button class="bg-graphite-700 p-4 rounded-xl border border-graphite-600 hover:bg-graphite-600 transition-colors text-center">
              <div class="w-10 h-10 bg-neon-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span>👥</span>
              </div>
              <p class="font-medium">Novo Cliente</p>
            </button>
            <button class="bg-graphite-700 p-4 rounded-xl border border-graphite-600 hover:bg-graphite-600 transition-colors text-center">
              <div class="w-10 h-10 bg-amber-glow-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span>💇</span>
              </div>
              <p class="font-medium">Novo Serviço</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DashboardDemo',
  data() {
    return {
      revenueData: [40, 65, 50, 80, 70, 90, 110, 100, 120, 130, 140, 150],
      months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
      servicesData: [
        { name: 'Corte de Cabelo', value: 45, color: '#F59E0B' },
        { name: 'Barba', value: 30, color: '#10B981' },
        { name: 'Corte + Barba', value: 20, color: '#8B5CF6' },
        { name: 'Sobrancelha', value: 5, color: '#EF4444' }
      ],
      recentActivities: [
        {
          id: 1,
          icon: '💇',
          title: 'Novo Agendamento',
          description: 'Carlos agendou Corte + Barba com Marcos',
          time: 'Há 10 minutos',
          amount: 'R$ 80,00'
        },
        {
          id: 2,
          icon: '👤',
          title: 'Novo Cliente',
          description: 'Lucas se cadastrou no sistema',
          time: 'Há 30 minutos',
          amount: 'R$ 0,00'
        },
        {
          id: 3,
          icon: '💰',
          title: 'Pagamento Recebido',
          description: 'Pagamento do serviço #1234 confirmado',
          time: 'Há 1 hora',
          amount: 'R$ 50,00'
        },
        {
          id: 4,
          icon: '✏️',
          title: 'Agendamento Editado',
          description: 'Marcos alterou horário do serviço #1235',
          time: 'Há 2 horas',
          amount: 'R$ 35,00'
        },
        {
          id: 5,
          icon: '📅',
          title: 'Novo Agendamento',
          description: 'Pedro agendou Corte de Cabelo com Carlos',
          time: 'Há 3 horas',
          amount: 'R$ 50,00'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #333333;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #4d4d4d;
}
</style>