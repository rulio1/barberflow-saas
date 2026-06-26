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
                <p class="text-sm text-graphite-400">Demo: Agendamento Online</p>
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
      <div class="relative z-10 w-full max-w-4xl mx-auto px-4">
        <div class="bg-graphite-800/90 backdrop-blur-sm rounded-2xl p-8 border border-graphite-700">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold mb-4">Demo: Agendamento Online</h2>
            <p class="text-graphite-400">Experimente nosso sistema de agendamento 24/7</p>
          </div>

          <!-- Demo Scheduling Interface -->
          <div class="space-y-6">
            <!-- Service Selection -->
            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <h3 class="text-xl font-semibold mb-4">1. Selecione o Serviço</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-graphite-600 p-4 rounded-lg cursor-pointer hover:bg-graphite-500 transition-colors"
                     @click="selectService('Corte de Cabelo')">
                  <h4 class="font-medium">Corte de Cabelo</h4>
                  <p class="text-graphite-400">R$ 50,00 • 30 min</p>
                </div>
                <div class="bg-graphite-600 p-4 rounded-lg cursor-pointer hover:bg-graphite-500 transition-colors"
                     @click="selectService('Barba')">
                  <h4 class="font-medium">Barba</h4>
                  <p class="text-graphite-400">R$ 35,00 • 20 min</p>
                </div>
                <div class="bg-graphite-600 p-4 rounded-lg cursor-pointer hover:bg-graphite-500 transition-colors"
                     @click="selectService('Corte + Barba')">
                  <h4 class="font-medium">Corte + Barba</h4>
                  <p class="text-graphite-400">R$ 80,00 • 50 min</p>
                </div>
                <div class="bg-graphite-600 p-4 rounded-lg cursor-pointer hover:bg-graphite-500 transition-colors"
                     @click="selectService('Sobrancelha')">
                  <h4 class="font-medium">Sobrancelha</h4>
                  <p class="text-graphite-400">R$ 20,00 • 15 min</p>
                </div>
              </div>
              <div v-if="selectedService" class="mt-4 p-3 bg-graphite-600 rounded-lg">
                <p class="text-neon-green-400">Selecionado: {{ selectedService }}</p>
              </div>
            </div>

            <!-- Barber Selection -->
            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <h3 class="text-xl font-semibold mb-4">2. Escolha o Barbeiro</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div v-for="barber in barbers" :key="barber.id"
                     class="bg-graphite-600 p-4 rounded-lg cursor-pointer hover:bg-graphite-500 transition-colors"
                     @click="selectBarber(barber)">
                  <div class="w-12 h-12 bg-amber-glow-500 rounded-full mb-2 mx-auto"></div>
                  <h4 class="font-medium text-center">{{ barber.name }}</h4>
                  <p class="text-graphite-400 text-center text-sm">{{ barber.specialty }}</p>
                </div>
              </div>
              <div v-if="selectedBarber" class="mt-4 p-3 bg-graphite-600 rounded-lg">
                <p class="text-neon-green-400">Selecionado: {{ selectedBarber.name }}</p>
              </div>
            </div>

            <!-- Date and Time Selection -->
            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <h3 class="text-xl font-semibold mb-4">3. Escolha Data e Hora</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Calendar -->
                <div>
                  <h4 class="font-medium mb-3">Selecione uma data:</h4>
                  <div class="grid grid-cols-7 gap-1 text-center">
                    <div v-for="day in ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']" :key="day"
                         class="p-2 font-medium text-graphite-400">
                      {{ day }}
                    </div>
                    <div v-for="n in 30" :key="n"
                         class="p-2 cursor-pointer hover:bg-graphite-600 rounded transition-colors"
                         :class="{ 'bg-amber-glow-500 text-white': selectedDate === n }"
                         @click="selectDate(n)">
                      {{ n }}
                    </div>
                  </div>
                </div>

                <!-- Time Slots -->
                <div>
                  <h4 class="font-medium mb-3">Horários disponíveis:</h4>
                  <div class="grid grid-cols-2 gap-2">
                    <div v-for="time in availableTimes" :key="time"
                         class="p-2 text-center cursor-pointer hover:bg-graphite-600 rounded transition-colors"
                         :class="{ 'bg-amber-glow-500 text-white': selectedTime === time }"
                         @click="selectTime(time)">
                      {{ time }}
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="selectedDate && selectedTime" class="mt-4 p-3 bg-graphite-600 rounded-lg">
                <p class="text-neon-green-400">Agendado para: {{ selectedDate }}/06/2026 às {{ selectedTime }}</p>
              </div>
            </div>

            <!-- Confirmation -->
            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600 text-center">
              <h3 class="text-xl font-semibold mb-4">4. Confirme seu Agendamento</h3>
              <div v-if="selectedService && selectedBarber && selectedDate && selectedTime" class="mb-6">
                <div class="space-y-2 text-left">
                  <p><strong>Serviço:</strong> {{ selectedService }}</p>
                  <p><strong>Barbeiro:</strong> {{ selectedBarber.name }}</p>
                  <p><strong>Data:</strong> {{ selectedDate }}/06/2026</p>
                  <p><strong>Hora:</strong> {{ selectedTime }}</p>
                </div>
                <button @click="confirmAppointment"
                        class="mt-4 px-8 py-3 bg-amber-glow-500 text-white rounded-lg font-semibold hover:bg-amber-glow-600 transition-colors">
                  Confirmar Agendamento
                </button>
              </div>
              <div v-else class="text-graphite-400">
                <p>Por favor, preencha todas as informações acima para confirmar seu agendamento.</p>
              </div>
            </div>
          </div>

          <!-- Success Modal -->
          <div v-if="showSuccess" class="fixed inset-0 bg-graphite-950/90 flex items-center justify-center z-50">
            <div class="bg-graphite-800 p-8 rounded-2xl border border-graphite-700 max-w-md">
              <div class="text-center">
                <div class="w-16 h-16 bg-neon-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl">✓</span>
                </div>
                <h3 class="text-2xl font-bold mb-2">Agendamento Confirmado!</h3>
                <p class="text-graphite-400 mb-6">Seu agendamento foi realizado com sucesso.</p>
                <button @click="showSuccess = false"
                        class="px-6 py-2 bg-amber-glow-500 text-white rounded-lg font-semibold hover:bg-amber-glow-600 transition-colors">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'SchedulingDemo',
  data() {
    return {
      selectedService: null,
      selectedBarber: null,
      selectedDate: null,
      selectedTime: null,
      showSuccess: false,
      barbers: [
        { id: 1, name: 'Carlos', specialty: 'Especialista em cortes' },
        { id: 2, name: 'Marcos', specialty: 'Barba e design' },
        { id: 3, name: 'Lucas', specialty: 'Estilo moderno' }
      ],
      availableTimes: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00']
    }
  },
  methods: {
    selectService(service) {
      this.selectedService = service;
    },
    selectBarber(barber) {
      this.selectedBarber = barber;
    },
    selectDate(date) {
      this.selectedDate = date;
    },
    selectTime(time) {
      this.selectedTime = time;
    },
    confirmAppointment() {
      this.showSuccess = true;
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