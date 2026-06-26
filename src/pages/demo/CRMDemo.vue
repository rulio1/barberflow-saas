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
                <p class="text-sm text-graphite-400">Demo: Gerenciamento de Clientes</p>
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
      <div class="relative z-10 w-full max-w-5xl mx-auto px-4">
        <div class="bg-graphite-800/90 backdrop-blur-sm rounded-2xl p-8 border border-graphite-700">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold mb-4">Demo: Gerenciamento de Clientes</h2>
            <p class="text-graphite-400">Sistema completo de CRM para barbearias</p>
          </div>

          <!-- Search and Filter -->
          <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600 mb-6">
            <div class="flex flex-col md:flex-row gap-4 items-center">
              <div class="flex-1">
                <label class="block text-sm font-medium mb-2">Buscar Cliente</label>
                <input type="text" v-model="searchQuery"
                       class="w-full bg-graphite-600 border border-graphite-500 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-glow-500"
                       placeholder="Digite nome, email ou telefone">
              </div>
              <div>
                <label class="block text-sm font-medium mb-2">Filtrar por</label>
                <select v-model="filterType"
                        class="bg-graphite-600 border border-graphite-500 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-glow-500">
                  <option value="all">Todos</option>
                  <option value="recent">Recentes</option>
                  <option value="frequent">Frequentes</option>
                  <option value="vip">VIP</option>
                </select>
              </div>
              <button @click="searchClients"
                      class="px-6 py-2 bg-amber-glow-500 text-white rounded-lg font-semibold hover:bg-amber-glow-600 transition-colors mt-6 md:mt-0">
                Buscar
              </button>
            </div>
          </div>

          <!-- Clients List -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <!-- Client Cards -->
            <div v-for="client in filteredClients" :key="client.id"
                 class="bg-graphite-700 rounded-xl p-6 border border-graphite-600 cursor-pointer hover:bg-graphite-600 transition-colors"
                 @click="selectClient(client)">
              <div class="flex items-start space-x-4">
                <div class="w-16 h-16 bg-amber-glow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="text-xl font-bold">{{ client.name.charAt(0) }}</span>
                </div>
                <div class="flex-1">
                  <h3 class="font-semibold text-lg">{{ client.name }}</h3>
                  <p class="text-graphite-400 text-sm">{{ client.email }}</p>
                  <p class="text-graphite-400 text-sm">{{ client.phone }}</p>
                  <div class="mt-3 flex space-x-2">
                    <span v-for="tag in client.tags" :key="tag"
                          class="px-2 py-1 text-xs bg-graphite-600 rounded-full">
                      {{ tag }}
                    </span>
                  </div>
                </div>
                <div class="text-right">
                  <p class="font-bold text-neon-green-400">{{ client.appointments }} agendamentos</p>
                  <p class="text-xs text-graphite-400">Última visita: {{ client.lastVisit }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Selected Client Details -->
          <div v-if="selectedClient" class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
            <div class="flex items-center justify-between mb-6">
              <h3 class="text-xl font-semibold">Detalhes do Cliente: {{ selectedClient.name }}</h3>
              <div class="flex space-x-2">
                <button class="px-4 py-2 bg-graphite-600 rounded-lg text-sm hover:bg-graphite-500 transition-colors">
                  Editar
                </button>
                <button class="px-4 py-2 bg-amber-glow-500 rounded-lg text-sm hover:bg-amber-glow-600 transition-colors">
                  Agendar Serviço
                </button>
              </div>
            </div>

            <!-- Client Info Tabs -->
            <div class="mb-6">
              <div class="flex space-x-4 border-b border-graphite-600">
                <button v-for="tab in tabs" :key="tab"
                        @click="activeTab = tab"
                        class="pb-2 px-2 border-b-2 transition-colors"
                        :class="{
                          'border-amber-glow-500 text-amber-glow-500': activeTab === tab,
                          'border-transparent text-graphite-400': activeTab !== tab
                        }">
                  {{ tab }}
                </button>
              </div>
            </div>

            <!-- Tab Content -->
            <div v-if="activeTab === 'Perfil'" class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p class="text-graphite-400 text-sm">Email</p>
                  <p>{{ selectedClient.email }}</p>
                </div>
                <div>
                  <p class="text-graphite-400 text-sm">Telefone</p>
                  <p>{{ selectedClient.phone }}</p>
                </div>
                <div>
                  <p class="text-graphite-400 text-sm">Data de Nascimento</p>
                  <p>{{ selectedClient.birthdate }}</p>
                </div>
                <div>
                  <p class="text-graphite-400 text-sm">Data de Cadastro</p>
                  <p>{{ selectedClient.joinDate }}</p>
                </div>
              </div>

              <div class="mt-4">
                <p class="text-graphite-400 text-sm">Preferências</p>
                <div class="flex flex-wrap gap-2 mt-2">
                  <span v-for="pref in selectedClient.preferences" :key="pref"
                        class="px-3 py-1 bg-graphite-600 rounded-full text-sm">
                    {{ pref }}
                  </span>
                </div>
              </div>

              <div class="mt-4">
                <p class="text-graphite-400 text-sm">Alergias/Observações</p>
                <p class="bg-graphite-600 p-3 rounded-lg mt-2">{{ selectedClient.notes }}</p>
              </div>
            </div>

            <div v-if="activeTab === 'Histórico'" class="space-y-4">
              <div v-for="appointment in selectedClient.appointmentHistory" :key="appointment.id"
                   class="bg-graphite-600 p-4 rounded-lg">
                <div class="flex items-center justify-between">
                  <div>
                    <p class="font-medium">{{ appointment.service }}</p>
                    <p class="text-graphite-400 text-sm">{{ appointment.date }} • {{ appointment.time }}</p>
                    <p class="text-graphite-400 text-sm">Com: {{ appointment.barber }}</p>
                  </div>
                  <div class="text-right">
                    <p class="font-bold text-neon-green-400">{{ appointment.price }}</p>
                    <span v-if="appointment.status === 'Completed'" class="text-xs bg-neon-green-500 px-2 py-1 rounded-full">
                      Concluído
                    </span>
                    <span v-else class="text-xs bg-amber-glow-500 px-2 py-1 rounded-full">
                      {{ appointment.status }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="activeTab === 'Fidelidade'" class="space-y-4">
              <div class="bg-graphite-600 p-4 rounded-lg">
                <p class="text-graphite-400 text-sm mb-2">Programa de Fidelidade</p>
                <div class="w-full bg-graphite-500 rounded-full h-4">
                  <div class="bg-neon-green-500 h-4 rounded-full" :style="{ width: selectedClient.loyaltyProgress + '%' }"></div>
                </div>
                <div class="flex justify-between text-sm mt-2">
                  <span>{{ selectedClient.loyaltyPoints }} pontos</span>
                  <span>{{ selectedClient.loyaltyProgress }}% para próximo benefício</span>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div class="bg-graphite-600 p-4 rounded-lg text-center">
                  <p class="text-graphite-400 text-sm">Total Gasto</p>
                  <p class="text-2xl font-bold text-neon-green-400">{{ selectedClient.totalSpent }}</p>
                </div>
                <div class="bg-graphite-600 p-4 rounded-lg text-center">
                  <p class="text-graphite-400 text-sm">Visitas</p>
                  <p class="text-2xl font-bold text-neon-green-400">{{ selectedClient.appointments }}</p>
                </div>
              </div>

              <div class="bg-graphite-600 p-4 rounded-lg">
                <p class="text-graphite-400 text-sm mb-2">Benefícios Disponíveis</p>
                <div v-if="selectedClient.availableRewards.length > 0" class="space-y-2">
                  <div v-for="reward in selectedClient.availableRewards" :key="reward"
                       class="flex items-center justify-between p-2 bg-graphite-500 rounded">
                    <span>{{ reward }}</span>
                    <button class="px-3 py-1 bg-amber-glow-500 rounded text-sm hover:bg-amber-glow-600 transition-colors">
                      Resgatar
                    </button>
                  </div>
                </div>
                <p v-else class="text-graphite-400">Nenhum benefício disponível no momento</p>
              </div>
            </div>
          </div>

          <!-- Add New Client Section -->
          <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600 mt-8">
            <h3 class="text-xl font-semibold mb-4">Adicionar Novo Cliente</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Nome completo"
                     class="bg-graphite-600 border border-graphite-500 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-glow-500">
              <input type="email" placeholder="Email"
                     class="bg-graphite-600 border border-graphite-500 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-glow-500">
              <input type="tel" placeholder="Telefone"
                     class="bg-graphite-600 border border-graphite-500 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-glow-500">
              <input type="date" placeholder="Data de Nascimento"
                     class="bg-graphite-600 border border-graphite-500 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-amber-glow-500">
            </div>
            <button class="mt-4 px-6 py-2 bg-neon-green-500 text-white rounded-lg font-semibold hover:bg-neon-green-600 transition-colors">
              Adicionar Cliente
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CRMDemo',
  data() {
    return {
      searchQuery: '',
      filterType: 'all',
      activeTab: 'Perfil',
      tabs: ['Perfil', 'Histórico', 'Fidelidade'],
      selectedClient: null,
      clients: [
        {
          id: 1,
          name: 'Carlos Silva',
          email: 'carlos@email.com',
          phone: '(11) 98765-4321',
          birthdate: '15/03/1985',
          joinDate: '10/01/2023',
          appointments: 12,
          lastVisit: '15/06/2026',
          tags: ['VIP', 'Frequente'],
          preferences: ['Corte curto', 'Barba bem feita', 'Sem bigode'],
          notes: 'Alergia a produtos com álcool. Prefere horários pela manhã.',
          loyaltyPoints: 120,
          loyaltyProgress: 80,
          totalSpent: 'R$ 1.250,00',
          availableRewards: ['Desconto de 20%', 'Corte grátis'],
          appointmentHistory: [
            {
              id: 1,
              service: 'Corte + Barba',
              date: '15/06/2026',
              time: '10:00',
              barber: 'Marcos',
              price: 'R$ 80,00',
              status: 'Completed'
            },
            {
              id: 2,
              service: 'Corte de Cabelo',
              date: '01/06/2026',
              time: '09:30',
              barber: 'Carlos',
              price: 'R$ 50,00',
              status: 'Completed'
            },
            {
              id: 3,
              service: 'Barba',
              date: '18/05/2026',
              time: '14:00',
              barber: 'Marcos',
              price: 'R$ 35,00',
              status: 'Completed'
            }
          ]
        },
        {
          id: 2,
          name: 'Marcos Oliveira',
          email: 'marcos@email.com',
          phone: '(11) 99999-8888',
          birthdate: '22/07/1990',
          joinDate: '05/03/2024',
          appointments: 8,
          lastVisit: '10/06/2026',
          tags: ['Novo'],
          preferences: ['Corte moderno', 'Degradê', 'Gel no cabelo'],
          notes: 'Sempre chega 10 minutos antes. Prefere barbeiros experientes.',
          loyaltyPoints: 80,
          loyaltyProgress: 55,
          totalSpent: 'R$ 750,00',
          availableRewards: ['Desconto de 10%'],
          appointmentHistory: [
            {
              id: 1,
              service: 'Corte de Cabelo',
              date: '10/06/2026',
              time: '11:00',
              barber: 'Lucas',
              price: 'R$ 50,00',
              status: 'Completed'
            },
            {
              id: 2,
              service: 'Corte + Barba',
              date: '25/05/2026',
              time: '15:30',
              barber: 'Carlos',
              price: 'R$ 80,00',
              status: 'Completed'
            }
          ]
        },
        {
          id: 3,
          name: 'Lucas Santos',
          email: 'lucas@email.com',
          phone: '(11) 98888-7777',
          birthdate: '12/11/1982',
          joinDate: '15/06/2023',
          appointments: 25,
          lastVisit: '18/06/2026',
          tags: ['VIP', 'Frequente', 'Premium'],
          preferences: ['Barba longa', 'Corte clássico', 'Óleo de barba'],
          notes: 'Cliente premium. Sempre agenda com antecedência. Prefere produtos orgânicos.',
          loyaltyPoints: 250,
          loyaltyProgress: 100,
          totalSpent: 'R$ 2.800,00',
          availableRewards: ['Corte grátis', 'Barba grátis', 'Desconto de 30%'],
          appointmentHistory: [
            {
              id: 1,
              service: 'Corte + Barba',
              date: '18/06/2026',
              time: '16:00',
              barber: 'Marcos',
              price: 'R$ 80,00',
              status: 'Completed'
            },
            {
              id: 2,
              service: 'Barba',
              date: '05/06/2026',
              time: '14:30',
              barber: 'Marcos',
              price: 'R$ 35,00',
              status: 'Completed'
            },
            {
              id: 3,
              service: 'Corte de Cabelo',
              date: '20/05/2026',
              time: '10:00',
              barber: 'Carlos',
              price: 'R$ 50,00',
              status: 'Completed'
            }
          ]
        },
        {
          id: 4,
          name: 'Pedro Almeida',
          email: 'pedro@email.com',
          phone: '(11) 97777-6666',
          birthdate: '03/09/1995',
          joinDate: '20/01/2024',
          appointments: 5,
          lastVisit: '08/06/2026',
          tags: ['Novo'],
          preferences: ['Corte curto', 'Sem barba'],
          notes: 'Primeira visita recentemente. Ainda descobrindo preferências.',
          loyaltyPoints: 50,
          loyaltyProgress: 35,
          totalSpent: 'R$ 300,00',
          availableRewards: [],
          appointmentHistory: [
            {
              id: 1,
              service: 'Corte de Cabelo',
              date: '08/06/2026',
              time: '12:00',
              barber: 'Lucas',
              price: 'R$ 50,00',
              status: 'Completed'
            },
            {
              id: 2,
              service: 'Corte de Cabelo',
              date: '25/05/2026',
              time: '11:30',
              barber: 'Carlos',
              price: 'R$ 50,00',
              status: 'Completed'
            }
          ]
        }
      ]
    }
  },
  computed: {
    filteredClients() {
      if (this.filterType === 'all') return this.clients;
      if (this.filterType === 'recent') {
        return this.clients.filter(client => {
          const daysSinceLastVisit = Math.abs(new Date() - new Date(`01/${client.lastVisit.split('/')[1]}/2026`)) / (1000 * 60 * 60 * 24);
          return daysSinceLastVisit <= 30;
        });
      }
      if (this.filterType === 'frequent') {
        return this.clients.filter(client => client.appointments >= 10);
      }
      if (this.filterType === 'vip') {
        return this.clients.filter(client => client.tags.includes('VIP'));
      }
      return this.clients;
    }
  },
  methods: {
    searchClients() {
      // Simple search implementation
      if (!this.searchQuery) return;
      // In a real app, this would filter the clients array
      console.log('Searching for:', this.searchQuery);
    },
    selectClient(client) {
      this.selectedClient = client;
      // Scroll to the selected client details
      setTimeout(() => {
        const element = document.getElementById('client-details');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
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