<template>
  <div class="min-h-screen bg-graphite-900 text-graphite-50">
    <!-- Dashboard Header -->
    <header class="bg-graphite-800 border-b border-graphite-700">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4">
            <div class="w-12 h-12 bg-amber-glow-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">B</span>
            </div>
            <div>
              <h1 class="text-xl font-semibold">{{ barbershopName }}</h1>
              <p class="text-sm text-graphite-400">Painel de Controle</p>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <button @click="logout" class="px-4 py-2 bg-graphite-700 hover:bg-graphite-600 rounded-lg transition-colors">
              Sair
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
            <nav class="space-y-4">
              <router-link
                to="/dashboard"
                class="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-graphite-700 transition-colors"
                :class="{ 'bg-graphite-700': activeTab === 'dashboard' }"
                @click="activeTab = 'dashboard'"
              >
                <svg class="w-5 h-5 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span>Dashboard</span>
              </router-link>

              <router-link
                to="/dashboard/services"
                class="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-graphite-700 transition-colors"
                :class="{ 'bg-graphite-700': activeTab === 'services' }"
                @click="activeTab = 'services'"
              >
                <svg class="w-5 h-5 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4m6 6v10m0-2a2 2 0 100-4m0 4a2 2 0 100-4m0 4v2m0-6V4"></path>
                </svg>
                <span>Serviços</span>
              </router-link>

              <router-link
                to="/dashboard/barbers"
                class="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-graphite-700 transition-colors"
                :class="{ 'bg-graphite-700': activeTab === 'barbers' }"
                @click="activeTab = 'barbers'"
              >
                <svg class="w-5 h-5 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <span>Barbeiros</span>
              </router-link>

              <router-link
                to="/dashboard/schedules"
                class="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-graphite-700 transition-colors"
                :class="{ 'bg-graphite-700': activeTab === 'schedules' }"
                @click="activeTab = 'schedules'"
              >
                <svg class="w-5 h-5 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span>Agendamentos</span>
              </router-link>

              <router-link
                to="/dashboard/subscription"
                class="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-graphite-700 transition-colors"
                :class="{ 'bg-graphite-700': activeTab === 'subscription' }"
                @click="activeTab = 'subscription'"
              >
                <svg class="w-5 h-5 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Assinatura</span>
              </router-link>

              <router-link
                to="/dashboard/settings"
                class="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-graphite-700 transition-colors"
                :class="{ 'bg-graphite-700': activeTab === 'settings' }"
                @click="activeTab = 'settings'"
              >
                <svg class="w-5 h-5 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>Configurações</span>
              </router-link>
            </nav>
          </div>
        </div>

        <!-- Main Content Area -->
        <div class="lg:col-span-3">
          <!-- Dashboard Overview -->
          <div v-if="activeTab === 'dashboard'" class="space-y-6">
            <!-- Loading and Error States -->
            <div v-if="loading" class="text-center py-8">
              <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-green-500 mx-auto mb-4"></div>
              <p class="text-graphite-400">Carregando dados...</p>
            </div>

            <div v-if="error" class="bg-red-500/20 border border-red-500 rounded-xl p-4 text-red-400">
              {{ error }}
              <button @click="error = null" class="ml-4 text-red-300 hover:text-red-200">×</button>
            </div>

            <div v-if="!loading && !error">
              <!-- Expanded Stats Cards -->
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Today's Appointments -->
                <div class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
                  <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-neon-green-500/20 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="text-graphite-400 text-sm">Agendamentos Hoje</p>
                      <p class="text-2xl font-bold">{{ stats.todayAppointments }}</p>
                    </div>
                  </div>
                </div>

                <!-- Active Clients -->
                <div class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
                  <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-amber-glow-500/20 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-amber-glow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="text-graphite-400 text-sm">Clientes Ativos</p>
                      <p class="text-2xl font-bold">{{ stats.activeClients }}</p>
                    </div>
                  </div>
                </div>

                <!-- Monthly Revenue -->
                <div class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
                  <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-neon-green-500/20 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="text-graphite-400 text-sm">Receita Mensal</p>
                      <p class="text-2xl font-bold">R$ {{ stats.monthlyRevenue }}</p>
                    </div>
                  </div>
                </div>

                <!-- Weekly Appointments -->
                <div class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
                  <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-neon-green-500/20 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="text-graphite-400 text-sm">Agendamentos Semana</p>
                      <p class="text-2xl font-bold">{{ stats.weeklyAppointments }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Additional Stats Row -->
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
                  <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-amber-glow-500/20 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-amber-glow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="text-graphite-400 text-sm">Pendentes</p>
                      <p class="text-2xl font-bold">{{ stats.pendingAppointments }}</p>
                    </div>
                  </div>
                </div>

                <div class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
                  <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-neon-green-500/20 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="text-graphite-400 text-sm">Completos</p>
                      <p class="text-2xl font-bold">{{ stats.completedAppointments }}</p>
                    </div>
                  </div>
                </div>

                <div class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
                  <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="text-graphite-400 text-sm">Taxa Cancelamento</p>
                      <p class="text-2xl font-bold">{{ stats.cancellationRate }}%</p>
                    </div>
                  </div>
                </div>

                <div class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
                  <div class="flex items-center space-x-3">
                    <div class="w-12 h-12 bg-graphite-600 rounded-full flex items-center justify-center">
                      <svg class="w-6 h-6 text-graphite-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p class="text-graphite-400 text-sm">Serviços</p>
                      <p class="text-2xl font-bold">{{ services.length }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Financial Metrics from FinancialDemo -->
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <!-- Net Profit -->
                <div class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
                  <div class="flex items-center justify-between mb-2">
                    <h3 class="text-lg font-semibold">Lucro Líquido</h3>
                    <div class="w-8 h-8 bg-neon-green-500 rounded-full flex items-center justify-center">
                      <span class="text-sm">📈</span>
                    </div>
                  </div>
                  <p class="text-3xl font-bold text-neon-green-400">R$ {{ stats.netProfit || '0,00' }}</p>
                  <p class="text-graphite-400 text-sm mt-1">{{ stats.profitMargin || '0' }}% de margem</p>
                </div>

                <!-- Cash Flow -->
                <div class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
                  <div class="flex items-center justify-between mb-2">
                    <h3 class="text-lg font-semibold">Fluxo de Caixa</h3>
                    <div class="w-8 h-8 bg-amber-glow-500 rounded-full flex items-center justify-center">
                      <span class="text-sm">💳</span>
                    </div>
                  </div>
                  <p class="text-3xl font-bold" :class="stats.cashFlow >= 0 ? 'text-neon-green-400' : 'text-red-400'">
                    R$ {{ stats.cashFlow || '0,00' }}
                  </p>
                  <p class="text-graphite-400 text-sm mt-1">{{ stats.cashFlowHealth || 'Estável' }} saúde</p>
                </div>

                <!-- Expenses -->
                <div class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
                  <div class="flex items-center justify-between mb-2">
                    <h3 class="text-lg font-semibold">Despesas</h3>
                    <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span class="text-sm">💸</span>
                    </div>
                  </div>
                  <p class="text-3xl font-bold text-red-400">R$ {{ stats.totalExpenses || '0,00' }}</p>
                  <p class="text-graphite-400 text-sm mt-1">{{ stats.expensesChange || '0' }}% vs mês anterior</p>
                </div>

                <!-- Revenue Growth -->
                <div class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
                  <div class="flex items-center justify-between mb-2">
                    <h3 class="text-lg font-semibold">Crescimento</h3>
                    <div class="w-8 h-8 bg-neon-green-500 rounded-full flex items-center justify-center">
                      <span class="text-sm">📊</span>
                    </div>
                  </div>
                  <p class="text-3xl font-bold text-neon-green-400">+{{ stats.revenueGrowth || '0' }}%</p>
                  <p class="text-graphite-400 text-sm mt-1">vs mês anterior</p>
                </div>
              </div>

              <!-- Quick Actions -->
              <div class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
                <h3 class="text-lg font-semibold mb-4">Ações Rápidas</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <button @click="activeTab = 'services'" class="bg-neon-green-500 hover:bg-neon-green-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <span>Gerenciar Serviços</span>
                  </button>
                  <button @click="activeTab = 'barbers'" class="bg-amber-glow-500 hover:bg-amber-glow-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                    </svg>
                    <span>Gerenciar Barbeiros</span>
                  </button>
                  <button @click="activeTab = 'schedules'" class="bg-graphite-700 hover:bg-graphite-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center space-x-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span>Gerenciar Agendamentos</span>
                  </button>
                </div>
              </div>

              <!-- Charts Section -->
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <!-- Weekly Appointments Chart -->
                <div class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
                  <h3 class="text-lg font-semibold mb-4">Agendamentos Semanais</h3>
                  <div class="h-64 flex items-end space-x-2">
                    <div v-for="(count, index) in chartData.weeklyAppointments" :key="index" class="flex flex-col items-center flex-1">
                      <div class="bg-neon-green-500 rounded-t-lg transition-all duration-300" :style="{ height: `${count * 10}px`, minHeight: '20px' }"></div>
                      <span class="text-xs text-graphite-400 mt-2">{{ ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'][index] }}</span>
                    </div>
                  </div>
                </div>

                <!-- Service Distribution Chart -->
                <div class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
                  <h3 class="text-lg font-semibold mb-4">Serviços Mais Populares</h3>
                  <div class="space-y-3">
                    <div v-for="(service, index) in chartData.serviceDistribution" :key="index" class="flex items-center space-x-3">
                      <div class="w-4 h-4 rounded-full" :class="{
                        'bg-neon-green-500': index === 0,
                        'bg-amber-glow-500': index === 1,
                        'bg-graphite-500': index === 2,
                        'bg-graphite-400': index === 3,
                        'bg-graphite-300': index === 4
                      }"></div>
                      <div class="flex-1">
                        <p class="text-sm">{{ service.name }}</p>
                      </div>
                      <span class="text-sm font-medium">{{ service.count }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Recent Appointments with Actions -->
              <div class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="text-lg font-semibold">Próximos Agendamentos</h3>
                  <button @click="exportAppointments" class="px-3 py-1 bg-graphite-700 hover:bg-graphite-600 rounded-lg text-sm transition-colors">
                    Exportar CSV
                  </button>
                </div>

                <div v-if="recentAppointments.length === 0" class="text-center py-8 text-graphite-400">
                  <p>Nenhum agendamento próximo encontrado</p>
                  <button @click="activeTab = 'schedules'" class="mt-4 px-4 py-2 bg-neon-green-500 hover:bg-neon-green-600 rounded-lg text-sm">
                    Criar Agendamento
                  </button>
                </div>

                <div v-else class="space-y-4">
                  <div v-for="(appointment, index) in recentAppointments" :key="index" class="flex items-center justify-between p-4 bg-graphite-700 rounded-lg">
                    <div class="flex items-center space-x-3">
                      <div class="w-10 h-10 bg-graphite-600 rounded-full flex items-center justify-center">
                        <span class="text-white text-sm">{{ formatTime(appointment.date) }}</span>
                      </div>
                      <div>
                        <p class="font-medium">{{ appointment.customerName }}</p>
                        <p class="text-sm text-graphite-400">{{ getServiceName(appointment.serviceId) }}</p>
                        <p class="text-xs text-graphite-500">{{ getBarberName(appointment.barberId) }}</p>
                      </div>
                    </div>
                    <div class="flex items-center space-x-3">
                      <span class="text-xs px-2 py-1 rounded-full" :class="getStatusColor(appointment.status)">
                        {{ appointment.status }}
                      </span>
                      <div class="flex space-x-1">
                        <button @click="updateAppointmentStatus(appointment.id, 'confirmed')" title="Confirmar" class="p-1 text-neon-green-400 hover:bg-neon-green-500/20 rounded">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </button>
                        <button @click="updateAppointmentStatus(appointment.id, 'completed')" title="Completar" class="p-1 text-graphite-400 hover:bg-graphite-600 rounded">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        </button>
                        <button @click="deleteAppointment(appointment.id)" title="Cancelar" class="p-1 text-red-400 hover:bg-red-500/20 rounded">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Services Management -->
          <div v-if="activeTab === 'services'" class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold">Gerenciamento de Serviços</h3>
              <button @click="activeTab = 'dashboard'" class="text-graphite-400 hover:text-graphite-300">
                ← Voltar
              </button>
            </div>

            <!-- Service Creation Form -->
            <div class="bg-graphite-700 rounded-lg p-4 mb-6">
              <h4 class="font-medium mb-4">Adicionar Novo Serviço</h4>
              <form @submit.prevent="createService" class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium mb-1">Nome do Serviço</label>
                    <input v-model="newService.name" type="text" required class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg focus:outline-none focus:border-neon-green-500" placeholder="Ex: Corte de Cabelo">
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1">Preço (R$)</label>
                    <input v-model="newService.price" type="number" step="0.01" required class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg focus:outline-none focus:border-neon-green-500" placeholder="Ex: 50.00">
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium mb-1">Duração (minutos)</label>
                    <input v-model="newService.duration" type="number" required class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg focus:outline-none focus:border-neon-green-500" placeholder="Ex: 30">
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1">Mostrar no Menu</label>
                    <select v-model="newService.showInMenu" class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg focus:outline-none focus:border-neon-green-500">
                      <option :value="true">Sim</option>
                      <option :value="false">Não</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">Descrição</label>
                  <textarea v-model="newService.description" rows="3" class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg focus:outline-none focus:border-neon-green-500" placeholder="Descrição detalhada do serviço"></textarea>
                </div>
                <button type="submit" :disabled="loading" class="bg-neon-green-500 hover:bg-neon-green-600 text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50">
                  {{ loading ? 'Salvando...' : 'Adicionar Serviço' }}
                </button>
              </form>
            </div>

            <!-- Services List -->
            <div class="space-y-4">
              <div v-if="services.length === 0" class="text-center py-8 text-graphite-400">
                <p>Nenhum serviço cadastrado ainda</p>
              </div>

              <div v-for="service in services" :key="service.id" class="bg-graphite-700 rounded-lg p-4 flex items-center justify-between">
                <div class="flex-1">
                  <h4 class="font-medium">{{ service.name }}</h4>
                  <p class="text-sm text-graphite-400">{{ formatCurrency(service.price) }} • {{ service.duration }} min</p>
                  <p class="text-xs text-graphite-500 mt-1">{{ service.description }}</p>
                </div>
                <div class="flex items-center space-x-2">
                  <span class="text-xs px-2 py-1 rounded-full" :class="service.showInMenu ? 'bg-neon-green-500/20 text-neon-green-400' : 'bg-graphite-600 text-graphite-400'">
                    {{ service.showInMenu ? 'Visível' : 'Oculto' }}
                  </span>
                  <button @click="deleteService(service.id)" title="Excluir" class="p-1 text-red-400 hover:bg-red-500/20 rounded">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Barbers Management -->
          <div v-if="activeTab === 'barbers'" class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold">Gerenciamento de Barbeiros</h3>
              <button @click="activeTab = 'dashboard'" class="text-graphite-400 hover:text-graphite-300">
                ← Voltar
              </button>
            </div>

            <!-- Barber Creation Form -->
            <div class="bg-graphite-700 rounded-lg p-4 mb-6">
              <h4 class="font-medium mb-4">Adicionar Novo Barbeiro</h4>
              <form @submit.prevent="createBarber" class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium mb-1">Nome Completo</label>
                    <input v-model="newBarber.name" type="text" required class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg focus:outline-none focus:border-neon-green-500" placeholder="Ex: João Silva">
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1">Email</label>
                    <input v-model="newBarber.email" type="email" required class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg focus:outline-none focus:border-neon-green-500" placeholder="Ex: joao@email.com">
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium mb-1">Telefone</label>
                    <input v-model="newBarber.phone" type="tel" required class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg focus:outline-none focus:border-neon-green-500" placeholder="Ex: (11) 99999-9999">
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1">Especialização</label>
                    <input v-model="newBarber.specialization" type="text" class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg focus:outline-none focus:border-neon-green-500" placeholder="Ex: Cortes masculinos, barbas">
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">Horário de Trabalho</label>
                  <input v-model="newBarber.workingHours" type="text" required class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg focus:outline-none focus:border-neon-green-500" placeholder="Ex: 09:00-18:00">
                </div>
                <button type="submit" :disabled="loading" class="bg-amber-glow-500 hover:bg-amber-glow-600 text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50">
                  {{ loading ? 'Salvando...' : 'Adicionar Barbeiro' }}
                </button>
              </form>
            </div>

            <!-- Barbers List -->
            <div class="space-y-4">
              <div v-if="barbers.length === 0" class="text-center py-8 text-graphite-400">
                <p>Nenhum barbeiro cadastrado ainda</p>
              </div>

              <div v-for="barber in barbers" :key="barber.id" class="bg-graphite-700 rounded-lg p-4 flex items-center justify-between">
                <div class="flex-1">
                  <h4 class="font-medium">{{ barber.name }}</h4>
                  <p class="text-sm text-graphite-400">{{ barber.email }} • {{ barber.phone }}</p>
                  <p class="text-xs text-graphite-500 mt-1">{{ barber.specialization }} • {{ barber.workingHours }}</p>
                </div>
                <div class="flex items-center space-x-2">
                  <button @click="deleteBarber(barber.id)" title="Excluir" class="p-1 text-red-400 hover:bg-red-500/20 rounded">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Schedules Management -->
          <div v-if="activeTab === 'schedules'" class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold">Gerenciamento de Agendamentos</h3>
              <button @click="activeTab = 'dashboard'" class="text-graphite-400 hover:text-graphite-300">
                ← Voltar
              </button>
            </div>

            <!-- Appointment Filters -->
            <div class="bg-graphite-700 rounded-lg p-4 mb-6">
              <h4 class="font-medium mb-4">Filtros</h4>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label class="block text-sm font-medium mb-1">Status</label>
                  <select v-model="appointmentFilters.status" class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg focus:outline-none focus:border-neon-green-500">
                    <option value="all">Todos</option>
                    <option value="pending">Pendentes</option>
                    <option value="confirmed">Confirmados</option>
                    <option value="completed">Completos</option>
                    <option value="cancelled">Cancelados</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">Período</label>
                  <select v-model="appointmentFilters.dateRange" class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg focus:outline-none focus:border-neon-green-500">
                    <option value="today">Hoje</option>
                    <option value="week">Esta Semana</option>
                    <option value="month">Este Mês</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">Barbeiro</label>
                  <select v-model="appointmentFilters.barberId" class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg focus:outline-none focus:border-neon-green-500">
                    <option value="all">Todos</option>
                    <option v-for="barber in barbers" :key="barber.id" :value="barber.id">{{ barber.name }}</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Appointment Creation Form -->
            <div class="bg-graphite-700 rounded-lg p-4 mb-6">
              <h4 class="font-medium mb-4">Novo Agendamento</h4>
              <form @submit.prevent="createAppointment" class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label class="block text-sm font-medium mb-1">Data</label>
                    <input v-model="newAppointment.date" type="date" required class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg focus:outline-none focus:border-neon-green-500">
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1">Hora</label>
                    <select v-model="newAppointment.time" required class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg focus:outline-none focus:border-neon-green-500">
                      <option value="">Selecione um horário</option>
                      <option v-for="time in getAvailableTimes(newAppointment.date, newAppointment.serviceId, newAppointment.barberId)" :key="time" :value="time">{{ time }}</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1">Serviço</label>
                    <select v-model="newAppointment.serviceId" required @change="newAppointment.time = ''" class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg focus:outline-none focus:border-neon-green-500">
                      <option value="">Selecione um serviço</option>
                      <option v-for="service in services" :key="service.id" :value="service.id">{{ service.name }} ({{ service.duration }} min)</option>
                    </select>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium mb-1">Barbeiro</label>
                    <select v-model="newAppointment.barberId" class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg focus:outline-none focus:border-neon-green-500">
                      <option value="">Qualquer barbeiro</option>
                      <option v-for="barber in barbers" :key="barber.id" :value="barber.id">{{ barber.name }}</option>
                    </select>
                  </div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-medium mb-1">Nome do Cliente</label>
                    <input v-model="newAppointment.customerName" type="text" required class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg focus:outline-none focus:border-neon-green-500" placeholder="Nome completo">
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1">Telefone</label>
                    <input v-model="newAppointment.customerPhone" type="tel" required class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg focus:outline-none focus:border-neon-green-500" placeholder="(XX) XXXXX-XXXX">
                  </div>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1">Observações</label>
                  <textarea v-model="newAppointment.notes" rows="2" class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg focus:outline-none focus:border-neon-green-500" placeholder="Informações adicionais"></textarea>
                </div>
                <button type="submit" :disabled="loading" class="bg-graphite-600 hover:bg-graphite-500 text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50">
                  {{ loading ? 'Agendando...' : 'Criar Agendamento' }}
                </button>
              </form>
            </div>

            <!-- Appointments List -->
            <div class="space-y-4">
              <div v-if="filterAppointments().length === 0" class="text-center py-8 text-graphite-400">
                <p>Nenhum agendamento encontrado com os filtros atuais</p>
              </div>

              <div v-for="appointment in filterAppointments()" :key="appointment.id" class="bg-graphite-700 rounded-lg p-4">
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <div class="flex items-center space-x-3 mb-2">
                      <div class="w-8 h-8 bg-graphite-600 rounded-full flex items-center justify-center">
                        <span class="text-xs">{{ formatTime(appointment.date) }}</span>
                      </div>
                      <div>
                        <h4 class="font-medium">{{ appointment.customerName }}</h4>
                        <p class="text-sm text-graphite-400">{{ getServiceName(appointment.serviceId) }} • {{ getBarberName(appointment.barberId) }}</p>
                      </div>
                    </div>
                    <p class="text-xs text-graphite-500 mb-2">
                      {{ formatDate(appointment.date) }} • {{ appointment.customerPhone }}
                    </p>
                    <p v-if="appointment.notes" class="text-xs text-graphite-400 italic">Notas: {{ appointment.notes }}</p>
                  </div>
                  <div class="flex flex-col items-end space-y-2">
                    <span class="text-xs px-2 py-1 rounded-full" :class="getStatusColor(appointment.status)">
                      {{ appointment.status }}
                    </span>
                    <div class="flex space-x-1">
                      <button v-if="appointment.status !== 'confirmed'" @click="updateAppointmentStatus(appointment.id, 'confirmed')" title="Confirmar" class="p-1 text-neon-green-400 hover:bg-neon-green-500/20 rounded">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </button>
                      <button v-if="appointment.status !== 'completed'" @click="updateAppointmentStatus(appointment.id, 'completed')" title="Completar" class="p-1 text-graphite-400 hover:bg-graphite-600 rounded">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </button>
                      <button v-if="appointment.status !== 'cancelled'" @click="deleteAppointment(appointment.id)" title="Cancelar" class="p-1 text-red-400 hover:bg-red-500/20 rounded">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Subscription Management -->
          <div v-if="activeTab === 'subscription'" class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold">Gerenciamento de Assinatura</h3>
              <button @click="activeTab = 'dashboard'" class="text-graphite-400 hover:text-graphite-300">
                ← Voltar
              </button>
            </div>

            <!-- Current Subscription Info -->
            <div class="bg-graphite-700 rounded-lg p-4 mb-6">
              <h4 class="font-medium mb-4">Sua Assinatura Atual</h4>
              <div v-if="loading" class="text-center py-4">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-neon-green-500 mx-auto mb-2"></div>
                <p class="text-graphite-400">Carregando informações da assinatura...</p>
              </div>
              <div v-else>
                <div class="flex items-center justify-between">
                  <div>
                    <p class="text-sm text-graphite-400 mb-1">Plano Atual</p>
                    <p class="text-xl font-bold">{{ barbershopData?.plan || 'BASIC' }}</p>
                  </div>
                  <div class="text-right">
                    <p class="text-sm text-graphite-400 mb-1">Status</p>
                    <span class="text-xs px-3 py-1 rounded-full bg-neon-green-500/20 text-neon-green-400">
                      {{ barbershopData?.planEndsAt ? 'ATIVO' : 'GRATUITO' }}
                    </span>
                  </div>
                </div>

                <div v-if="barbershopData?.planEndsAt" class="mt-4">
                  <p class="text-sm text-graphite-400 mb-1">Próxima Renovaçāo</p>
                  <p class="font-medium">{{ formatDate(barbershopData.planEndsAt) }}</p>
                </div>
              </div>
            </div>

            <!-- Available Plans -->
            <div class="bg-graphite-700 rounded-lg p-4 mb-6">
              <h4 class="font-medium mb-4">Nossos Planos</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <!-- Plan cards will be loaded here -->
                <div v-for="plan in subscriptionPlans" :key="plan.id" class="bg-graphite-800 rounded-lg p-4 border border-graphite-600 relative">
                  <div class="flex items-center justify-between mb-2">
                    <h5 class="font-medium">{{ plan.name }}</h5>
                    <span class="text-lg font-bold">R$ {{ plan.price.toFixed(2) }}</span>
                  </div>
                  <p class="text-xs text-graphite-400 mb-3">{{ plan.interval === 'month' ? '/mês' : `/${plan.interval}` }}</p>

                  <ul class="text-xs text-graphite-400 space-y-1 mb-4">
                    <li v-for="(feature, index) in getPlanFeatures(plan)" :key="index" class="flex items-start">
                      <svg class="w-3 h-3 text-neon-green-400 mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                      <span>{{ feature }}</span>
                    </li>
                  </ul>

                  <button
                    @click="selectPlan(plan)"
                    class="w-full bg-neon-green-500 hover:bg-neon-green-600 text-white py-2 rounded-lg text-sm transition-colors"
                    :disabled="barbershopData?.plan === plan.slug"
                  >
                    {{ barbershopData?.plan === plan.slug ? 'Plano Atual' : 'Escolher Plano' }}
                  </button>
                </div>
              </div>
            </div>

            <!-- Subscription Actions -->
            <div v-if="barbershopData?.plan !== 'BASIC' && barbershopData?.planEndsAt" class="bg-graphite-700 rounded-lg p-4">
              <h4 class="font-medium mb-4">Ações da Assinatura</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  @click="cancelSubscription"
                  class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors text-sm"
                  :disabled="loading"
                >
                  {{ loading ? 'Cancelando...' : 'Cancelar Assinatura' }}
                </button>
                <button
                  @click="viewInvoices"
                  class="bg-graphite-600 hover:bg-graphite-500 text-white py-2 px-4 rounded-lg transition-colors text-sm"
                >
                  Ver Faturas
                </button>
              </div>
            </div>
          </div>

          <!-- Settings -->
          <div v-if="activeTab === 'settings'" class="bg-graphite-800 rounded-xl p-6 border border-graphite-700">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-lg font-semibold">Configurações da Barbearia</h3>
              <button @click="activeTab = 'dashboard'" class="text-graphite-400 hover:text-graphite-300">
                ← Voltar
              </button>
            </div>

            <div v-if="barbershopData" class="space-y-6">
              <div class="bg-graphite-700 rounded-lg p-4">
                <h4 class="font-medium mb-4">Informações da Barbearia</h4>
                <div class="space-y-3">
                  <div>
                    <label class="block text-sm font-medium mb-1">Nome</label>
                    <input :value="barbershopData.name" disabled class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg cursor-not-allowed">
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1">Email</label>
                    <input :value="barbershopData.email" disabled class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg cursor-not-allowed">
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1">Telefone</label>
                    <input :value="barbershopData.phone" disabled class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg cursor-not-allowed">
                  </div>
                  <div>
                    <label class="block text-sm font-medium mb-1">Endereço</label>
                    <input :value="barbershopData.address" disabled class="w-full px-3 py-2 bg-graphite-600 border border-graphite-500 rounded-lg cursor-not-allowed">
                  </div>
                </div>
              </div>

              <div class="bg-graphite-700 rounded-lg p-4">
                <h4 class="font-medium mb-4">Estatísticas Gerais</h4>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div class="text-center">
                    <p class="text-2xl font-bold">{{ allSchedules.length }}</p>
                    <p class="text-sm text-graphite-400">Total Agendamentos</p>
                  </div>
                  <div class="text-center">
                    <p class="text-2xl font-bold">{{ services.length }}</p>
                    <p class="text-sm text-graphite-400">Serviços Oferecidos</p>
                  </div>
                  <div class="text-center">
                    <p class="text-2xl font-bold">{{ barbers.length }}</p>
                    <p class="text-sm text-graphite-400">Barbeiros</p>
                  </div>
                  <div class="text-center">
                    <p class="text-2xl font-bold">{{ stats.activeClients }}</p>
                    <p class="text-sm text-graphite-400">Clientes Únicos</p>
                  </div>
                </div>
              </div>

              <div class="bg-graphite-700 rounded-lg p-4">
                <h4 class="font-medium mb-4">Exportar Dados</h4>
                <div class="flex flex-wrap gap-3">
                  <button @click="exportAppointments" class="px-4 py-2 bg-graphite-600 hover:bg-graphite-500 rounded-lg transition-colors">
                    Exportar Agendamentos (CSV)
                  </button>
                </div>
              </div>
            </div>

            <div v-else class="text-center py-8 text-graphite-400">
              <p>Carregando informações da barbearia...</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Modal System - Consistent across the app -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-graphite-800 rounded-xl p-6 border border-graphite-700 max-w-md w-full">
        <div class="flex justify-between items-start mb-4">
          <h3 class="text-lg font-semibold">{{ modalTitle }}</h3>
          <button @click="closeModal" class="text-graphite-400 hover:text-graphite-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div class="mb-6">
          <p class="text-graphite-300">{{ modalMessage }}</p>

          <!-- Coupon Input for subscription modal -->
          <div v-if="modalType === 'subscribe' && selectedPlan" class="mt-4">
            <label class="block text-sm font-medium mb-2">Cupom de Desconto (opcional)</label>
            <input
              v-model="couponCode"
              id="coupon-input"
              type="text"
              placeholder="Digite seu cupom"
              class="w-full px-3 py-2 bg-graphite-700 border border-graphite-600 rounded-lg focus:outline-none focus:border-neon-green-500"
            >
          </div>
        </div>

        <div class="flex justify-end space-x-3">
          <button
            @click="closeModal"
            class="px-4 py-2 bg-graphite-700 hover:bg-graphite-600 rounded-lg transition-colors"
          >
            {{ modalCancelText }}
          </button>
          <button
            @click="executeModalAction"
            class="px-4 py-2 bg-neon-green-500 hover:bg-neon-green-600 text-white rounded-lg transition-colors"
            :disabled="loading"
          >
            {{ loading ? 'Processando...' : modalConfirmText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BarbershopDashboard',
  data() {
    return {
      activeTab: 'dashboard',
      barbershopName: 'Carregando...',
      barbershopData: null,
      stats: {
        todayAppointments: 0,
        activeClients: 0,
        monthlyRevenue: '0,00',
        weeklyAppointments: 0,
        pendingAppointments: 0,
        completedAppointments: 0,
        cancellationRate: 0,
        netProfit: 0,
        cashFlow: 0,
        totalExpenses: 0,
        revenueGrowth: 0,
        profitMargin: 0,
        cashFlowHealth: 'Estável'
      },
      recentAppointments: [],
      services: [],
      barbers: [],
      allSchedules: [],
      customers: [],
      loading: false,
      error: null,
      // New form states
      newService: {
        name: '',
        description: '',
        price: '',
        duration: 30,
        showInMenu: true
      },
      newBarber: {
        name: '',
        email: '',
        phone: '',
        specialization: '',
        workingHours: '09:00-18:00'
      },
      newAppointment: {
        date: this.getCurrentDate(),
        time: '',
        serviceId: '',
        barberId: '',
        customerName: '',
        customerPhone: '',
        notes: ''
      },
      // Filter states
      appointmentFilters: {
        status: 'all',
        dateRange: 'today',
        barberId: 'all'
      },
      // Chart data
      chartData: {
        weeklyAppointments: [0, 0, 0, 0, 0, 0, 0],
        monthlyRevenue: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        serviceDistribution: []
      },
         // Subscription data
         subscriptionPlans: [],
         selectedPlan: null,
         couponCode: '',
         showCouponInput: false,
         // Modal system
         showModal: false,
         modalType: null, // 'subscribe', 'confirm', 'cancel', etc.
         modalTitle: '',
         modalMessage: '',
         modalConfirmText: 'Confirmar',
         modalCancelText: 'Cancelar',
         modalConfirmAction: null,
         modalCancelAction: null
    }
  },
  mounted() {
    this.initializeDashboard();
  },
  methods: {
    async initializeDashboard() {
      this.loading = true;
      this.error = null;

      try {
        // Check if user is logged in
        const token = localStorage.getItem('token');
        if (!token) {
          this.$router.push('/login');
          return;
        }

        // Load barbershop data
        await this.loadBarbershopData();

        // Load subscription plans
        await this.loadSubscriptionPlans();

        // Load data based on active tab
        await this.loadDashboardData();

        // Set up periodic data refresh
        this.setupAutoRefresh();

      } catch (error) {
        console.error('Error initializing dashboard:', error);
        this.error = 'Falha ao carregar dados do painel. Por favor, tente novamente.';
      } finally {
        this.loading = false;
      }
    },

    async loadBarbershopData() {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3004/api/barbershops/me', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Falha ao carregar dados da barbearia');
        }

        const data = await response.json();
        this.barbershopData = data.data.barbershop;
        this.barbershopName = this.barbershopData.name;

        // Store in localStorage for quick access
        localStorage.setItem('barbershop', JSON.stringify(this.barbershopData));

      } catch (error) {
        console.error('Error loading barbershop data:', error);
        // Fallback to localStorage data if API fails
        const barbershop = JSON.parse(localStorage.getItem('barbershop'));
        if (barbershop) {
          this.barbershopName = barbershop.name;
          this.barbershopData = barbershop;
        }
      }
    },

    async loadDashboardData() {
      try {
        const token = localStorage.getItem('token');

        // Load services
        await this.loadServices();

        // Load barbers
        await this.loadBarbers();

        // Load schedules
        await this.loadSchedules();

        // Calculate statistics
        this.calculateStatistics();

        // Load chart data
        await this.loadChartData();

      } catch (error) {
        console.error('Error loading dashboard data:', error);
        this.error = 'Falha ao carregar dados do painel.';
      }
    },

    async loadServices() {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3004/api/services?barbershopId=${this.barbershopData.id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          this.services = data.data.services || [];
        }
      } catch (error) {
        console.error('Error loading services:', error);
      }
    },

    async loadBarbers() {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:3004/api/barbers?barbershopId=${this.barbershopData.id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          this.barbers = data.data.barbers || [];
        }
      } catch (error) {
        console.error('Error loading barbers:', error);
      }
    },

    async loadSchedules() {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3004/api/schedules', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          this.allSchedules = data.data.schedules || [];

          // Filter recent appointments (next 7 days)
          const today = new Date();
          const nextWeek = new Date();
          nextWeek.setDate(today.getDate() + 7);

          this.recentAppointments = this.allSchedules
            .filter(schedule => {
              const scheduleDate = new Date(schedule.date);
              return scheduleDate >= today && scheduleDate <= nextWeek;
            })
            .sort((a, b) => new Date(a.date) - new Date(b.date))
            .slice(0, 5);
        }
      } catch (error) {
        console.error('Error loading schedules:', error);
      }
    },

    calculateStatistics() {
      if (!this.allSchedules.length) return;

      const today = new Date();
      const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay()); // Start of week (Sunday)

      // Filter appointments
      const todayAppointments = this.allSchedules.filter(schedule => {
        const scheduleDate = new Date(schedule.date);
        return scheduleDate.toDateString() === today.toDateString() &&
               schedule.status !== 'cancelled';
      });

      const weekAppointments = this.allSchedules.filter(schedule => {
        const scheduleDate = new Date(schedule.date);
        return scheduleDate >= startOfWeek && scheduleDate <= today &&
               schedule.status !== 'cancelled';
      });

      const monthAppointments = this.allSchedules.filter(schedule => {
        const scheduleDate = new Date(schedule.date);
        return scheduleDate >= startOfMonth && scheduleDate <= today;
      });

      const pendingAppointments = this.allSchedules.filter(s =>
        s.status === 'pending'
      );

      const completedAppointments = this.allSchedules.filter(s =>
        s.status === 'completed'
      );

      const cancelledAppointments = this.allSchedules.filter(s =>
        s.status === 'cancelled'
      );

      // Calculate revenue (from completed appointments this month)
      const monthlyRevenue = monthAppointments
        .filter(s => s.status === 'completed')
        .reduce((total, appointment) => {
          const service = this.services.find(s => s.id === appointment.serviceId);
          return total + (service ? service.price : 0);
        }, 0);

      // Calculate unique customers
      const uniqueCustomers = new Set();
      this.allSchedules.forEach(schedule => {
        if (schedule.customerPhone) {
          uniqueCustomers.add(schedule.customerPhone);
        }
      });

      // Calculate financial metrics (mock data for now - in real app would come from backend)
      const fixedExpenses = 1500; // Aluguel, serviços, etc.
      const variableExpenses = monthlyRevenue * 0.3; // 30% de custos variáveis
      const totalExpenses = fixedExpenses + variableExpenses;
      const netProfit = monthlyRevenue - totalExpenses;
      const profitMargin = monthlyRevenue > 0 ? (netProfit / monthlyRevenue) * 100 : 0;
      const cashFlow = netProfit + (Math.random() * 1000 - 500); // Simulated cash flow
      const revenueGrowth = Math.min(15 + Math.random() * 10, 30); // 15-25% growth
      const cashFlowHealth = cashFlow > 0 ? 'Boa' : cashFlow > -1000 ? 'Estável' : 'Preocupante';

      // Update stats
      this.stats = {
        todayAppointments: todayAppointments.length,
        weeklyAppointments: weekAppointments.length,
        activeClients: uniqueCustomers.size,
        monthlyRevenue: monthlyRevenue.toFixed(2).replace('.', ','),
        pendingAppointments: pendingAppointments.length,
        completedAppointments: completedAppointments.length,
        cancellationRate: this.allSchedules.length > 0
          ? Math.round((cancelledAppointments.length / this.allSchedules.length) * 100)
          : 0,
        netProfit: Math.max(0, netProfit).toFixed(2).replace('.', ','),
        cashFlow: Math.round(cashFlow).toFixed(2).replace('.', ','),
        totalExpenses: totalExpenses.toFixed(2).replace('.', ','),
        revenueGrowth: Math.round(revenueGrowth),
        profitMargin: Math.round(profitMargin),
        cashFlowHealth: cashFlowHealth
      };
    },

    async loadChartData() {
      // Weekly appointments chart
      const weeklyData = Array(7).fill(0);
      const today = new Date();

      for (let i = 0; i < 7; i++) {
        const day = new Date(today);
        day.setDate(today.getDate() - (6 - i)); // Last 7 days

        const dayAppointments = this.allSchedules.filter(schedule => {
          const scheduleDate = new Date(schedule.date);
          return scheduleDate.toDateString() === day.toDateString() &&
                 schedule.status !== 'cancelled';
        });

        weeklyData[i] = dayAppointments.length;
      }

      this.chartData.weeklyAppointments = weeklyData;

      // Service distribution
      const serviceCounts = {};
      this.allSchedules.forEach(schedule => {
        const service = this.services.find(s => s.id === schedule.serviceId);
        if (service) {
          serviceCounts[service.name] = (serviceCounts[service.name] || 0) + 1;
        }
      });

      this.chartData.serviceDistribution = Object.entries(serviceCounts)
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
        .slice(0, 5);
    },

    getCurrentDate() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },

    formatCurrency(value) {
      return `R$ ${value.toString().replace('.', ',')}`;
    },

    formatDate(dateString) {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },

    formatTime(dateString) {
      const date = new Date(dateString);
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${hours}:${minutes}`;
    },

    getStatusColor(status) {
      const colors = {
        confirmed: 'bg-neon-green-500/20 text-neon-green-400',
        pending: 'bg-amber-glow-500/20 text-amber-glow-400',
        completed: 'bg-graphite-600 text-graphite-400',
        cancelled: 'bg-red-500/20 text-red-400'
      };
      return colors[status] || 'bg-graphite-600 text-graphite-400';
    },

    getServiceName(serviceId) {
      const service = this.services.find(s => s.id === serviceId);
      return service ? service.name : 'Serviço não encontrado';
    },

    getBarberName(barberId) {
      if (!barberId) return 'Qualquer barbeiro';
      const barber = this.barbers.find(b => b.id === barberId);
      return barber ? barber.name : 'Barbeiro não encontrado';
    },

    getAvailableTimes(date, serviceId, barberId) {
      // This would normally call the backend API for available times
      // For now, return a mock set of times
      const times = [];
      for (let i = 9; i <= 17; i++) {
        times.push(`${String(i).padStart(2, '0')}:00`);
        times.push(`${String(i).padStart(2, '0')}:30`);
      }
      return times;
    },

    setupAutoRefresh() {
      // Refresh data every 5 minutes
      setInterval(() => {
        if (this.activeTab === 'dashboard') {
          this.loadSchedules();
          this.calculateStatistics();
        }
      }, 300000); // 5 minutes
    },

    // Service Management Methods
    async createService() {
      try {
        this.loading = true;
        const token = localStorage.getItem('token');

        const response = await fetch('http://localhost:3004/api/services', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...this.newService,
            barberShopId: this.barbershopData.id,
            price: parseFloat(this.newService.price)
          })
        });

        if (response.ok) {
          await this.loadServices();
          this.newService = {
            name: '',
            description: '',
            price: '',
            duration: 30,
            showInMenu: true
          };
          this.$emit('show-notification', 'Serviço criado com sucesso!', 'success');
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Falha ao criar serviço');
        }
      } catch (error) {
        console.error('Error creating service:', error);
        this.$emit('show-notification', error.message || 'Falha ao criar serviço', 'error');
      } finally {
        this.loading = false;
      }
    },

    async deleteService(serviceId) {
      try {
        if (!confirm('Tem certeza que deseja excluir este serviço?')) return;

        this.loading = true;
        const token = localStorage.getItem('token');

        const response = await fetch(`http://localhost:3004/api/services/${serviceId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          await this.loadServices();
          this.$emit('show-notification', 'Serviço excluído com sucesso!', 'success');
        } else {
          throw new Error('Falha ao excluir serviço');
        }
      } catch (error) {
        console.error('Error deleting service:', error);
        this.$emit('show-notification', error.message || 'Falha ao excluir serviço', 'error');
      } finally {
        this.loading = false;
      }
    },

    // Barber Management Methods
    async createBarber() {
      try {
        this.loading = true;
        const token = localStorage.getItem('token');

        const response = await fetch('http://localhost:3004/api/barbers', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ...this.newBarber,
            barberShopId: this.barbershopData.id
          })
        });

        if (response.ok) {
          await this.loadBarbers();
          this.newBarber = {
            name: '',
            email: '',
            phone: '',
            specialization: '',
            workingHours: '09:00-18:00'
          };
          this.$emit('show-notification', 'Barbeiro adicionado com sucesso!', 'success');
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Falha ao adicionar barbeiro');
        }
      } catch (error) {
        console.error('Error creating barber:', error);
        this.$emit('show-notification', error.message || 'Falha ao adicionar barbeiro', 'error');
      } finally {
        this.loading = false;
      }
    },

    async deleteBarber(barberId) {
      try {
        if (!confirm('Tem certeza que deseja excluir este barbeiro?')) return;

        this.loading = true;
        const token = localStorage.getItem('token');

        const response = await fetch(`http://localhost:3004/api/barbers/${barberId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          await this.loadBarbers();
          this.$emit('show-notification', 'Barbeiro excluído com sucesso!', 'success');
        } else {
          throw new Error('Falha ao excluir barbeiro');
        }
      } catch (error) {
        console.error('Error deleting barber:', error);
        this.$emit('show-notification', error.message || 'Falha ao excluir barbeiro', 'error');
      } finally {
        this.loading = false;
      }
    },

    // Appointment Management Methods
    async createAppointment() {
      try {
        this.loading = true;
        const token = localStorage.getItem('token');

        // Combine date and time
        const [year, month, day] = this.newAppointment.date.split('-');
        const [hours, minutes] = this.newAppointment.time.split(':');
        const dateTime = new Date(year, month - 1, day, hours, minutes);

        const response = await fetch('http://localhost:3004/api/schedules', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            date: dateTime.toISOString(),
            serviceId: this.newAppointment.serviceId,
            barberId: this.newAppointment.barberId || null,
            customerName: this.newAppointment.customerName,
            customerPhone: this.newAppointment.customerPhone,
            notes: this.newAppointment.notes,
            status: 'confirmed'
          })
        });

        if (response.ok) {
          await this.loadSchedules();
          this.newAppointment = {
            date: this.getCurrentDate(),
            time: '',
            serviceId: '',
            barberId: '',
            customerName: '',
            customerPhone: '',
            notes: ''
          };
          this.$emit('show-notification', 'Agendamento criado com sucesso!', 'success');
        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Falha ao criar agendamento');
        }
      } catch (error) {
        console.error('Error creating appointment:', error);
        this.$emit('show-notification', error.message || 'Falha ao criar agendamento', 'error');
      } finally {
        this.loading = false;
      }
    },

    async updateAppointmentStatus(appointmentId, newStatus) {
      try {
        const token = localStorage.getItem('token');

        const response = await fetch(`http://localhost:3004/api/schedules/${appointmentId}`, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            status: newStatus
          })
        });

        if (response.ok) {
          await this.loadSchedules();
          this.$emit('show-notification', `Agendamento marcado como ${newStatus}`, 'success');
        } else {
          throw new Error('Falha ao atualizar agendamento');
        }
      } catch (error) {
        console.error('Error updating appointment:', error);
        this.$emit('show-notification', error.message || 'Falha ao atualizar agendamento', 'error');
      }
    },

    async deleteAppointment(appointmentId) {
      try {
        if (!confirm('Tem certeza que deseja cancelar este agendamento?')) return;

        this.loading = true;
        const token = localStorage.getItem('token');

        const response = await fetch(`http://localhost:3004/api/schedules/${appointmentId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          await this.loadSchedules();
          this.$emit('show-notification', 'Agendamento cancelado com sucesso!', 'success');
        } else {
          throw new Error('Falha ao cancelar agendamento');
        }
      } catch (error) {
        console.error('Error deleting appointment:', error);
        this.$emit('show-notification', error.message || 'Falha ao cancelar agendamento', 'error');
      } finally {
        this.loading = false;
      }
    },

    // Filter methods
    filterAppointments() {
      let filtered = [...this.allSchedules];

      // Filter by status
      if (this.appointmentFilters.status !== 'all') {
        filtered = filtered.filter(s => s.status === this.appointmentFilters.status);
      }

      // Filter by date range
      const today = new Date();
      if (this.appointmentFilters.dateRange === 'today') {
        filtered = filtered.filter(s => {
          const scheduleDate = new Date(s.date);
          return scheduleDate.toDateString() === today.toDateString();
        });
      } else if (this.appointmentFilters.dateRange === 'week') {
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay());
        filtered = filtered.filter(s => {
          const scheduleDate = new Date(s.date);
          return scheduleDate >= startOfWeek && scheduleDate <= today;
        });
      } else if (this.appointmentFilters.dateRange === 'month') {
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        filtered = filtered.filter(s => {
          const scheduleDate = new Date(s.date);
          return scheduleDate >= startOfMonth && scheduleDate <= today;
        });
      }

      // Filter by barber
      if (this.appointmentFilters.barberId !== 'all') {
        filtered = filtered.filter(s => s.barberId === this.appointmentFilters.barberId);
      }

      return filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
    },

    // Export methods
    exportAppointments() {
      const filtered = this.filterAppointments();
      const csvData = [
        ['Data', 'Hora', 'Cliente', 'Telefone', 'Serviço', 'Barbeiro', 'Status'],
        ...filtered.map(s => {
          const service = this.services.find(svc => svc.id === s.serviceId);
          const barber = this.barbers.find(b => b.id === s.barberId);
          return [
            this.formatDate(s.date),
            this.formatTime(s.date),
            s.customerName,
            s.customerPhone,
            service ? service.name : 'N/A',
            barber ? barber.name : 'N/A',
            s.status
          ];
        })
      ];

      const csvContent = csvData.map(row => row.join(',')).join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = `agendamentos-${this.getCurrentDate()}.csv`;
      link.click();

      URL.revokeObjectURL(url);
    },

    // Subscription Management Methods
    getPlanFeatures(plan) {
      try {
        return JSON.parse(plan.features);
      } catch (e) {
        return [];
      }
    },

    async loadSubscriptionPlans() {
      try {
        const response = await fetch('http://localhost:3004/api/subscriptions/plans');
        if (response.ok) {
          const data = await response.json();
          this.subscriptionPlans = data.data.plans;
        }
      } catch (error) {
        console.error('Error loading subscription plans:', error);
      }
    },

    closeModal() {
      this.showModal = false;
      this.selectedPlan = null;
      this.couponCode = '';
      this.modalType = null;
      this.modalTitle = '';
      this.modalMessage = '';
      this.modalConfirmAction = null;
      this.modalCancelAction = null;
    },

    executeModalAction() {
      if (this.modalConfirmAction && typeof this.modalConfirmAction === 'function') {
        this.modalConfirmAction();
      }
      this.closeModal();
    },

    async loadCurrentSubscription() {
      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3004/api/subscriptions/my-subscription', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          return data.data.subscription;
        }
        return null;
      } catch (error) {
        console.error('Error loading current subscription:', error);
        return null;
      }
    },

    selectPlan(plan) {
      this.selectedPlan = plan;
      this.couponCode = ''; // Reset coupon code

      // Show modal for subscription confirmation
      this.showModal = true;
      this.modalType = 'subscribe';
      this.modalTitle = `Confirmar Assinatura - ${plan.name}`;
      this.modalMessage = `Você está prestes a assinar o plano ${plan.name} por R$ ${plan.price.toFixed(2)}/mês. Deseja continuar?`;
      this.modalConfirmText = 'Assinar Plano';
      this.modalCancelText = 'Cancelar';
      this.modalConfirmAction = this.subscribeToPlan;
      this.modalCancelAction = this.closeModal;
    },

    async subscribeToPlan() {
      try {
        if (!this.selectedPlan) {
          this.$emit('show-notification', 'Por favor, selecione um plano primeiro', 'error');
          return;
        }

        this.loading = true;

        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:3004/api/subscriptions/subscribe', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            planId: this.selectedPlan.id,
            paymentMethod: 'credit_card',
            couponCode: this.couponCode || undefined
          })
        });

        if (response.ok) {
          const data = await response.json();
          this.$emit('show-notification', `Assinatura realizada com sucesso! Plano: ${this.selectedPlan.name}`, 'success');

          // Update barbershop data
          this.barbershopData.plan = this.selectedPlan.slug;
          this.barbershopData.planEndsAt = new Date();
          this.barbershopData.planEndsAt.setMonth(this.barbershopData.planEndsAt.getMonth() + 1);

          // Reset form
          this.selectedPlan = null;
          this.couponCode = '';
          this.showCouponInput = false;

        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Falha ao realizar assinatura');
        }
      } catch (error) {
        console.error('Error subscribing:', error);
        this.$emit('show-notification', error.message || 'Falha ao realizar assinatura', 'error');
      } finally {
        this.loading = false;
      }
    },

    async cancelSubscription() {
      try {
        if (!confirm('Tem certeza que deseja cancelar sua assinatura? Você perderá acesso aos recursos premium.')) {
          return;
        }

        this.loading = true;
        const token = localStorage.getItem('token');

        const response = await fetch('http://localhost:3004/api/subscriptions/cancel-subscription', {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          this.$emit('show-notification', 'Assinatura cancelada com sucesso', 'success');

          // Update local data
          this.barbershopData.plan = 'BASIC';
          this.barbershopData.planEndsAt = null;

        } else {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Falha ao cancelar assinatura');
        }
      } catch (error) {
        console.error('Error canceling subscription:', error);
        this.$emit('show-notification', error.message || 'Falha ao cancelar assinatura', 'error');
      } finally {
        this.loading = false;
      }
    },

    viewInvoices() {
      this.$emit('show-notification', 'Funcionalidade de faturas em desenvolvimento', 'info');
    },

    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('barbershop');
      // Force a full page reload to ensure clean state
      window.location.href = '/';
    }
  }
}
</script>

<style scoped>
/* Add any specific styles here */
</style>