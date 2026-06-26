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
                <p class="text-sm text-graphite-400">Demo: Controle Financeiro</p>
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
            <h2 class="text-3xl font-bold mb-4">Demo: Controle Financeiro</h2>
            <p class="text-graphite-400">Gerenciamento completo das finanças da sua barbearia</p>
          </div>

          <!-- Date Filter -->
          <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600 mb-6">
            <div class="flex flex-col md:flex-row gap-4 items-center">
              <div>
                <label class="block text-sm font-medium mb-2">Período</label>
                <select v-model="selectedPeriod"
                        class="bg-graphite-600 border border-graphite-500 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-glow-500">
                  <option value="week">Esta Semana</option>
                  <option value="month">Este Mês</option>
                  <option value="quarter">Este Trimestre</option>
                  <option value="year">Este Ano</option>
                  <option value="custom">Personalizado</option>
                </select>
              </div>
              <div v-if="selectedPeriod === 'custom'" class="flex gap-2">
                <input type="date" v-model="startDate"
                       class="bg-graphite-600 border border-graphite-500 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-glow-500">
                <input type="date" v-model="endDate"
                       class="bg-graphite-600 border border-graphite-500 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-glow-500">
              </div>
              <button @click="updateFinancialData"
                      class="px-6 py-2 bg-amber-glow-500 text-white rounded-lg font-semibold hover:bg-amber-glow-600 transition-colors mt-4 md:mt-0">
                Atualizar
              </button>
            </div>
          </div>

          <!-- Financial Overview -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <!-- Revenue Card -->
            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-semibold">Receita Total</h3>
                <div class="w-8 h-8 bg-neon-green-500 rounded-full flex items-center justify-center">
                  <span class="text-sm">💰</span>
                </div>
              </div>
              <p class="text-3xl font-bold text-neon-green-400">{{ formatCurrency(totalRevenue) }}</p>
              <p class="text-graphite-400 text-sm mt-1">+{{ revenueGrowth }}% vs período anterior</p>
            </div>

            <!-- Expenses Card -->
            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-semibold">Despesas</h3>
                <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                  <span class="text-sm">💸</span>
                </div>
              </div>
              <p class="text-3xl font-bold text-red-400">{{ formatCurrency(totalExpenses) }}</p>
              <p class="text-graphite-400 text-sm mt-1">{{ expensesChange }}% vs período anterior</p>
            </div>

            <!-- Profit Card -->
            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-semibold">Lucro Líquido</h3>
                <div class="w-8 h-8 bg-neon-green-500 rounded-full flex items-center justify-center">
                  <span class="text-sm">📈</span>
                </div>
              </div>
              <p class="text-3xl font-bold text-neon-green-400">{{ formatCurrency(netProfit) }}</p>
              <p class="text-graphite-400 text-sm mt-1">{{ profitMargin }}% de margem</p>
            </div>

            <!-- Cash Flow Card -->
            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-semibold">Fluxo de Caixa</h3>
                <div class="w-8 h-8 bg-amber-glow-500 rounded-full flex items-center justify-center">
                  <span class="text-sm">💳</span>
                </div>
              </div>
              <p class="text-3xl font-bold" :class="cashFlow >= 0 ? 'text-neon-green-400' : 'text-red-400'">
                {{ formatCurrency(cashFlow) }}
              </p>
              <p class="text-graphite-400 text-sm mt-1">{{ cashFlowHealth }} saúde</p>
            </div>
          </div>

          <!-- Charts Section -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <!-- Revenue by Service Chart -->
            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <h3 class="text-xl font-semibold mb-4">Receita por Serviço</h3>
              <div class="space-y-4">
                <div v-for="service in revenueByService" :key="service.name" class="flex items-center space-x-3">
                  <div class="w-4 h-4 rounded-full" :style="{ backgroundColor: service.color }"></div>
                  <span class="flex-1 text-sm">{{ service.name }}</span>
                  <span class="text-sm font-medium">{{ formatCurrency(service.amount) }}</span>
                  <span class="text-sm text-graphite-400">{{ service.percentage }}%</span>
                </div>
              </div>
              <div class="mt-6 h-32 flex items-end space-x-1">
                <div v-for="service in revenueByService" :key="service.name" class="flex-1 flex flex-col items-center">
                  <div class="w-full bg-graphite-600 rounded-t" :style="{ height: service.percentage + '%' }"></div>
                </div>
              </div>
            </div>

            <!-- Expenses Breakdown Chart -->
            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <h3 class="text-xl font-semibold mb-4">Despesas por Categoria</h3>
              <div class="space-y-3">
                <div v-for="expense in expensesBreakdown" :key="expense.category" class="flex items-center space-x-3">
                  <div class="w-4 h-4 rounded-full" :style="{ backgroundColor: expense.color }"></div>
                  <span class="flex-1 text-sm">{{ expense.category }}</span>
                  <span class="text-sm font-medium">{{ formatCurrency(expense.amount) }}</span>
                </div>
              </div>
              <div class="mt-6 h-32 flex items-end space-x-1">
                <div v-for="expense in expensesBreakdown" :key="expense.category" class="flex-1 flex flex-col items-center">
                  <div class="w-full bg-graphite-600 rounded-t" :style="{ height: expense.percentage + '%' }"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Commissions Section -->
          <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600 mb-8">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-xl font-semibold">Comissões de Barbeiros</h3>
              <div class="flex space-x-2">
                <button class="px-4 py-2 bg-graphite-600 rounded-lg text-sm hover:bg-graphite-500 transition-colors">
                  Exportar
                </button>
                <button class="px-4 py-2 bg-amber-glow-500 rounded-lg text-sm hover:bg-amber-glow-600 transition-colors">
                  Gerar Relatórios
                </button>
              </div>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-graphite-600 text-left">
                    <th class="pb-2 text-graphite-400">Barbeiro</th>
                    <th class="pb-2 text-graphite-400">Serviços</th>
                    <th class="pb-2 text-graphite-400">Receita Gerada</th>
                    <th class="pb-2 text-graphite-400">Comissão (40%)</th>
                    <th class="pb-2 text-graphite-400">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="barber in barbersCommissions" :key="barber.id" class="border-b border-graphite-600 hover:bg-graphite-600 transition-colors">
                    <td class="py-3">
                      <div class="flex items-center space-x-2">
                        <div class="w-8 h-8 bg-amber-glow-500 rounded-full flex items-center justify-center">
                          <span class="text-sm">{{ barber.name.charAt(0) }}</span>
                        </div>
                        <span>{{ barber.name }}</span>
                      </div>
                    </td>
                    <td class="py-3">{{ barber.services }}</td>
                    <td class="py-3">{{ formatCurrency(barber.revenue) }}</td>
                    <td class="py-3 font-semibold text-neon-green-400">{{ formatCurrency(barber.commission) }}</td>
                    <td class="py-3">
                      <span class="px-2 py-1 rounded-full text-xs" :class="{
                        'bg-neon-green-500': barber.status === 'Pago',
                        'bg-amber-glow-500': barber.status === 'Pendente',
                        'bg-graphite-500': barber.status === 'Aguardando'
                      }">
                        {{ barber.status }}
                      </span>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr class="font-semibold">
                    <td class="py-3">Total</td>
                    <td class="py-3">{{ totalBarberServices }}</td>
                    <td class="py-3">{{ formatCurrency(totalBarberRevenue) }}</td>
                    <td class="py-3 text-neon-green-400">{{ formatCurrency(totalCommissions) }}</td>
                    <td class="py-3"></td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <!-- Financial Reports -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <!-- Income Statement -->
            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <h3 class="text-xl font-semibold mb-4">Demonstrativo de Resultados</h3>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span>Receita Bruta</span>
                  <span>{{ formatCurrency(totalRevenue) }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Despesas Operacionais</span>
                  <span>{{ formatCurrency(totalExpenses) }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Comissões</span>
                  <span>{{ formatCurrency(totalCommissions) }}</span>
                </div>
                <div class="flex justify-between font-semibold border-t border-graphite-600 pt-3 mt-3">
                  <span>Lucro Líquido</span>
                  <span :class="netProfit >= 0 ? 'text-neon-green-400' : 'text-red-400'">
                    {{ formatCurrency(netProfit) }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Cash Flow Statement -->
            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <h3 class="text-xl font-semibold mb-4">Fluxo de Caixa</h3>
              <div class="space-y-3">
                <div class="flex justify-between">
                  <span>Saldo Inicial</span>
                  <span>{{ formatCurrency(initialBalance) }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Entradas</span>
                  <span class="text-neon-green-400">+{{ formatCurrency(cashIn) }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Saídas</span>
                  <span class="text-red-400">-{{ formatCurrency(cashOut) }}</span>
                </div>
                <div class="flex justify-between font-semibold border-t border-graphite-600 pt-3 mt-3">
                  <span>Saldo Final</span>
                  <span>{{ formatCurrency(finalBalance) }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button class="bg-graphite-700 p-4 rounded-xl border border-graphite-600 hover:bg-graphite-600 transition-colors text-center">
              <div class="w-10 h-10 bg-neon-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span>📊</span>
              </div>
              <p class="font-medium">Gerar Relatório Mensal</p>
            </button>
            <button class="bg-graphite-700 p-4 rounded-xl border border-graphite-600 hover:bg-graphite-600 transition-colors text-center">
              <div class="w-10 h-10 bg-amber-glow-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span>💸</span>
              </div>
              <p class="font-medium">Registrar Despesa</p>
            </button>
            <button class="bg-graphite-700 p-4 rounded-xl border border-graphite-600 hover:bg-graphite-600 transition-colors text-center">
              <div class="w-10 h-10 bg-neon-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span>📈</span>
              </div>
              <p class="font-medium">Projeção Financeira</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FinancialDemo',
  data() {
    return {
      selectedPeriod: 'month',
      startDate: '2026-06-01',
      endDate: '2026-06-30',
      totalRevenue: 12500,
      totalExpenses: 4200,
      revenueGrowth: 15,
      expensesChange: -5,
      cashFlow: 8300,
      cashFlowHealth: 'Boa',
      revenueByService: [
        { name: 'Corte de Cabelo', amount: 5200, percentage: 45, color: '#F59E0B' },
        { name: 'Barba', amount: 3000, percentage: 30, color: '#10B981' },
        { name: 'Corte + Barba', amount: 2500, percentage: 20, color: '#8B5CF6' },
        { name: 'Sobrancelha', amount: 800, percentage: 5, color: '#EF4444' },
        { name: 'Outros', amount: 1000, percentage: 10, color: '#6B7280' }
      ],
      expensesBreakdown: [
        { category: 'Aluguel', amount: 1500, percentage: 35, color: '#EF4444' },
        { category: 'Produtos', amount: 800, percentage: 20, color: '#F59E0B' },
        { category: 'Serviços', amount: 600, percentage: 15, color: '#10B981' },
        { category: 'Marketing', amount: 400, percentage: 10, color: '#8B5CF6' },
        { category: 'Outros', amount: 900, percentage: 20, color: '#6B7280' }
      ],
      barbersCommissions: [
        { id: 1, name: 'Carlos', services: 25, revenue: 3200, commission: 1280, status: 'Pago' },
        { id: 2, name: 'Marcos', services: 20, revenue: 2800, commission: 1120, status: 'Pendente' },
        { id: 3, name: 'Lucas', services: 18, revenue: 2500, commission: 1000, status: 'Pago' },
        { id: 4, name: 'Pedro', services: 12, revenue: 1800, commission: 720, status: 'Aguardando' }
      ],
      initialBalance: 5000,
      cashIn: 12500,
      cashOut: 4200
    }
  },
  computed: {
    netProfit() {
      return this.totalRevenue - this.totalExpenses - this.totalCommissions;
    },
    profitMargin() {
      return ((this.netProfit / this.totalRevenue) * 100).toFixed(1);
    },
    totalBarberServices() {
      return this.barbersCommissions.reduce((sum, barber) => sum + barber.services, 0);
    },
    totalBarberRevenue() {
      return this.barbersCommissions.reduce((sum, barber) => sum + barber.revenue, 0);
    },
    totalCommissions() {
      return this.barbersCommissions.reduce((sum, barber) => sum + barber.commission, 0);
    },
    finalBalance() {
      return this.initialBalance + this.cashIn - this.cashOut;
    }
  },
  methods: {
    formatCurrency(value) {
      return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(value);
    },
    updateFinancialData() {
      // Simulate data update based on selected period
      console.log('Updating financial data for period:', this.selectedPeriod);
      if (this.selectedPeriod === 'week') {
        this.totalRevenue = 3200;
        this.totalExpenses = 1200;
      } else if (this.selectedPeriod === 'month') {
        this.totalRevenue = 12500;
        this.totalExpenses = 4200;
      } else if (this.selectedPeriod === 'quarter') {
        this.totalRevenue = 38000;
        this.totalExpenses = 12500;
      } else if (this.selectedPeriod === 'year') {
        this.totalRevenue = 150000;
        this.totalExpenses = 55000;
      }
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