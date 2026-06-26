<template>
  <div class="min-h-screen bg-graphite-950 text-graphite-50 font-sans">
    <!-- Header with barbershop info -->
    <header class="bg-graphite-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="w-12 h-12 bg-amber-glow-500 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">B</span>
            </div>
            <div>
              <h1 class="text-xl font-semibold">BarberFlow</h1>
              <p class="text-sm text-graphite-400">Agendamento Premium</p>
            </div>
          </div>
          <button class="p-2 rounded-full bg-graphite-800 hover:bg-graphite-700 transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main class="container mx-auto px-4 py-8">
      <!-- Progress indicator -->
      <div class="mb-8">
        <div class="flex items-center justify-center space-x-8">
          <div class="flex flex-col items-center">
            <div class="w-8 h-8 rounded-full bg-neon-green-500 flex items-center justify-center text-white font-semibold text-sm mb-2">1</div>
            <span class="text-sm font-medium">Serviço</span>
          </div>
          <div class="h-1 w-16 bg-graphite-700 rounded-full"></div>
          <div class="flex flex-col items-center">
            <div class="w-8 h-8 rounded-full bg-graphite-700 flex items-center justify-center text-graphite-400 font-semibold text-sm mb-2">2</div>
            <span class="text-sm text-graphite-400">Barbeiro</span>
          </div>
          <div class="h-1 w-16 bg-graphite-700 rounded-full"></div>
          <div class="flex flex-col items-center">
            <div class="w-8 h-8 rounded-full bg-graphite-700 flex items-center justify-center text-graphite-400 font-semibold text-sm mb-2">3</div>
            <span class="text-sm text-graphite-400">Horário</span>
          </div>
          <div class="h-1 w-16 bg-graphite-700 rounded-full"></div>
          <div class="flex flex-col items-center">
            <div class="w-8 h-8 rounded-full bg-graphite-700 flex items-center justify-center text-graphite-400 font-semibold text-sm mb-2">4</div>
            <span class="text-sm text-graphite-400">Confirmação</span>
          </div>
        </div>
      </div>

      <!-- Step 1: Service Selection -->
      <section v-if="currentStep === 1" class="animate-slide-up">
        <h2 class="text-2xl font-bold mb-6 text-center">Escolha seu serviço</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Service Card -->
          <div
            v-for="service in services"
            :key="service.id"
            @click="selectService(service)"
            class="bg-graphite-800 rounded-xl p-6 cursor-pointer hover:bg-graphite-700 transition-all duration-300 border-2"
            :class="selectedService?.id === service.id ? 'border-neon-green-500' : 'border-transparent'"
          >
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-lg font-semibold">{{ service.name }}</h3>
              <span class="bg-graphite-700 text-graphite-300 px-3 py-1 rounded-full text-sm">{{ service.duration }} min</span>
            </div>
            <p class="text-graphite-400 mb-4">{{ service.description }}</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-amber-glow-400">R$ {{ service.price }}</span>
              <button class="w-8 h-8 rounded-full bg-graphite-700 flex items-center justify-center hover:bg-graphite-600 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="mt-8 flex justify-end">
          <button
            @click="nextStep"
            :disabled="!selectedService"
            class="px-8 py-3 bg-neon-green-500 text-white rounded-lg font-semibold hover:bg-neon-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuar
          </button>
        </div>
      </section>

      <!-- Step 2: Barber Selection -->
      <section v-if="currentStep === 2" class="animate-slide-up">
        <h2 class="text-2xl font-bold mb-6 text-center">Escolha seu barbeiro</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <!-- Barber Card -->
          <div
            v-for="barber in barbers"
            :key="barber.id"
            @click="selectBarber(barber)"
            class="flex flex-col items-center p-4 cursor-pointer transition-all duration-300"
            :class="selectedBarber?.id === barber.id ? 'bg-graphite-800 rounded-xl' : ''"
          >
            <div class="w-20 h-20 rounded-full bg-graphite-700 mb-3 overflow-hidden border-2"
                 :class="selectedBarber?.id === barber.id ? 'border-neon-green-500' : 'border-transparent'">
              <img :src="barber.avatar" :alt="barber.name" class="w-full h-full object-cover">
            </div>
            <h3 class="font-semibold mb-1">{{ barber.name }}</h3>
            <p class="text-sm text-graphite-400 mb-2">{{ barber.specialty }}</p>
            <div class="flex items-center">
              <span class="text-amber-glow-400 mr-1">★</span>
              <span class="text-sm">{{ barber.rating }}</span>
            </div>
          </div>
        </div>
        <div class="mt-8 flex justify-between">
          <button
            @click="prevStep"
            class="px-6 py-3 bg-graphite-700 text-white rounded-lg font-semibold hover:bg-graphite-600 transition-colors"
          >
            Voltar
          </button>
          <button
            @click="nextStep"
            :disabled="!selectedBarber"
            class="px-8 py-3 bg-neon-green-500 text-white rounded-lg font-semibold hover:bg-neon-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuar
          </button>
        </div>
      </section>

      <!-- Step 3: Date/Time Selection -->
      <section v-if="currentStep === 3" class="animate-slide-up">
        <h2 class="text-2xl font-bold mb-6 text-center">Escolha data e horário</h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Calendar -->
          <div class="lg:col-span-1">
            <div class="bg-graphite-800 rounded-xl p-4">
              <div class="flex justify-between items-center mb-4">
                <button @click="prevMonth" class="p-2 hover:bg-graphite-700 rounded-full transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>
                <h3 class="font-semibold">{{ currentMonth }}</h3>
                <button @click="nextMonth" class="p-2 hover:bg-graphite-700 rounded-full transition-colors">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
              <div class="grid grid-cols-7 gap-1 text-center">
                <div v-for="day in ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']" :key="day" class="text-sm text-graphite-400 py-2">{{ day }}</div>
                <div v-for="day in daysInMonth" :key="day" @click="selectDate(day)" class="p-2 rounded-full cursor-pointer transition-colors"
                     :class="[
                       selectedDate === day ? 'bg-neon-green-500 text-white' : 'hover:bg-graphite-700',
                       isPastDate(day) ? 'text-graphite-600 cursor-not-allowed' : ''
                     ]">
                  {{ day }}
                </div>
              </div>
            </div>
          </div>

          <!-- Time Slots -->
          <div class="lg:col-span-2">
            <div class="bg-graphite-800 rounded-xl p-4">
              <h3 class="font-semibold mb-4">Horários disponíveis</h3>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
                <button
                  v-for="time in availableTimes"
                  :key="time"
                  @click="selectTime(time)"
                  class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  :class="[
                    selectedTime === time ? 'bg-neon-green-500 text-white' : 'bg-graphite-700 text-graphite-300 hover:bg-graphite-600',
                    isTimeBooked(time) ? 'bg-graphite-800 text-graphite-500 cursor-not-allowed' : ''
                  ]"
                  :disabled="isTimeBooked(time)"
                >
                  {{ time }}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-8 flex justify-between">
          <button
            @click="prevStep"
            class="px-6 py-3 bg-graphite-700 text-white rounded-lg font-semibold hover:bg-graphite-600 transition-colors"
          >
            Voltar
          </button>
          <button
            @click="nextStep"
            :disabled="!selectedDate || !selectedTime"
            class="px-8 py-3 bg-neon-green-500 text-white rounded-lg font-semibold hover:bg-neon-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuar
          </button>
        </div>
      </section>

      <!-- Step 4: Confirmation -->
      <section v-if="currentStep === 4" class="animate-slide-up max-w-md mx-auto">
        <div class="bg-graphite-800 rounded-xl p-6 glassmorphism">
          <h2 class="text-2xl font-bold mb-6 text-center">Confirme seu agendamento</h2>

          <div class="space-y-4 mb-6">
            <div class="flex justify-between items-center py-3 border-b border-graphite-700">
              <span class="text-graphite-400">Serviço:</span>
              <span class="font-medium">{{ selectedService?.name }}</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-graphite-700">
              <span class="text-graphite-400">Barbeiro:</span>
              <span class="font-medium">{{ selectedBarber?.name }}</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-graphite-700">
              <span class="text-graphite-400">Data:</span>
              <span class="font-medium">{{ formatDate(selectedDate) }}</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-graphite-700">
              <span class="text-graphite-400">Horário:</span>
              <span class="font-medium">{{ selectedTime }}</span>
            </div>
            <div class="flex justify-between items-center py-3 border-b border-graphite-700">
              <span class="text-graphite-400">Duração:</span>
              <span class="font-medium">{{ selectedService?.duration }} minutos</span>
            </div>
            <div class="flex justify-between items-center py-3">
              <span class="text-graphite-400">Valor:</span>
              <span class="text-2xl font-bold text-amber-glow-400">R$ {{ selectedService?.price }}</span>
            </div>
          </div>

          <form @submit.prevent="confirmAppointment" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium mb-1">Seu nome</label>
              <input
                type="text"
                id="name"
                v-model="customerName"
                required
                class="w-full px-4 py-2 bg-graphite-700 border border-graphite-600 rounded-lg focus-glow focus:border-neon-green-500 transition-colors"
                placeholder="Digite seu nome completo"
              >
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium mb-1">Telefone</label>
              <input
                type="tel"
                id="phone"
                v-model="customerPhone"
                required
                class="w-full px-4 py-2 bg-graphite-700 border border-graphite-600 rounded-lg focus-glow focus:border-neon-green-500 transition-colors"
                placeholder="(XX) XXXXX-XXXX"
              >
            </div>
            <div>
              <label for="email" class="block text-sm font-medium mb-1">Email (opcional)</label>
              <input
                type="email"
                id="email"
                v-model="customerEmail"
                class="w-full px-4 py-2 bg-graphite-700 border border-graphite-600 rounded-lg focus-glow focus:border-neon-green-500 transition-colors"
                placeholder="seu@email.com"
              >
            </div>

            <button
              type="submit"
              class="w-full py-3 bg-neon-green-500 text-white rounded-lg font-semibold hover:bg-neon-green-600 transition-colors mt-6"
            >
              Confirmar Agendamento
            </button>
          </form>
        </div>
      </section>
    </main>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 bg-graphite-950/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div class="bg-graphite-800 rounded-xl p-8 max-w-sm w-full mx-4 text-center glassmorphism">
        <div class="w-16 h-16 bg-neon-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 class="text-xl font-bold mb-2">Agendamento confirmado!</h3>
        <p class="text-graphite-400 mb-6">Seu horário foi reservado com sucesso.</p>
        <button
          @click="showSuccessModal = false"
          class="w-full py-3 bg-neon-green-500 text-white rounded-lg font-semibold hover:bg-neon-green-600 transition-colors"
        >
          Voltar ao início
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientScheduling',
  data() {
    return {
      currentStep: 1,
      selectedService: null,
      selectedBarber: null,
      selectedDate: null,
      selectedTime: null,
      customerName: '',
      customerPhone: '',
      customerEmail: '',
      showSuccessModal: false,

      // Mock data
      services: [
        {
          id: 1,
          name: 'Corte de Cabelo',
          description: 'Corte moderno com acabamento premium',
          price: '50,00',
          duration: 30
        },
        {
          id: 2,
          name: 'Barba Completa',
          description: 'Barba modelada com produtos premium',
          price: '40,00',
          duration: 25
        },
        {
          id: 3,
          name: 'Corte + Barba',
          description: 'Pacote completo com corte e barba',
          price: '85,00',
          duration: 55
        },
        {
          id: 4,
          name: 'Sobrancelha',
          description: 'Design e limpeza de sobrancelhas',
          price: '25,00',
          duration: 15
        },
        {
          id: 5,
          name: 'Tratamento Capilar',
          description: 'Hidratação e tratamento profissional',
          price: '65,00',
          duration: 40
        },
        {
          id: 6,
          name: 'Corte Infantil',
          description: 'Corte especial para crianças',
          price: '35,00',
          duration: 20
        }
      ],

      barbers: [
        {
          id: 1,
          name: 'Carlos Silva',
          specialty: 'Especialista em fades',
          rating: 4.9,
          avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
        },
        {
          id: 2,
          name: 'Marcos Oliveira',
          specialty: 'Barbas artísticas',
          rating: 4.8,
          avatar: 'https://randomuser.me/api/portraits/men/33.jpg'
        },
        {
          id: 3,
          name: 'Rafael Souza',
          specialty: 'Cortes modernos',
          rating: 4.7,
          avatar: 'https://randomuser.me/api/portraits/men/34.jpg'
        },
        {
          id: 4,
          name: 'Lucas Pereira',
          specialty: 'Estilo clássico',
          rating: 4.9,
          avatar: 'https://randomuser.me/api/portraits/men/35.jpg'
        }
      ],

      // Calendar data
      currentMonthIndex: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      bookedTimes: ['09:00', '10:30', '14:00'] // Mock booked times
    }
  },

  computed: {
    currentMonth() {
      const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
      return `${months[this.currentMonthIndex]} ${this.currentYear}`
    },

    daysInMonth() {
      const days = []
      const date = new Date(this.currentYear, this.currentMonthIndex + 1, 0)
      const totalDays = date.getDate()

      for (let i = 1; i <= totalDays; i++) {
        days.push(i)
      }

      return days
    },

    availableTimes() {
      const times = []
      for (let i = 9; i <= 18; i++) {
        times.push(`${i}:00`)
        times.push(`${i}:30`)
      }
      return times
    }
  },

  methods: {
    selectService(service) {
      this.selectedService = service
    },

    selectBarber(barber) {
      this.selectedBarber = barber
    },

    selectDate(day) {
      if (!this.isPastDate(day)) {
        this.selectedDate = day
      }
    },

    selectTime(time) {
      if (!this.isTimeBooked(time)) {
        this.selectedTime = time
      }
    },

    nextStep() {
      if (this.currentStep < 4) {
        this.currentStep++
      }
    },

    prevStep() {
      if (this.currentStep > 1) {
        this.currentStep--
      }
    },

    isPastDate(day) {
      const today = new Date()
      const selected = new Date(this.currentYear, this.currentMonthIndex, day)
      return selected < today.setHours(0, 0, 0, 0)
    },

    isTimeBooked(time) {
      return this.bookedTimes.includes(time)
    },

    formatDate(day) {
      if (!day) return ''
      const date = new Date(this.currentYear, this.currentMonthIndex, day)
      return date.toLocaleDateString('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    },

    prevMonth() {
      if (this.currentMonthIndex > 0) {
        this.currentMonthIndex--
      } else {
        this.currentMonthIndex = 11
        this.currentYear--
      }
    },

    nextMonth() {
      if (this.currentMonthIndex < 11) {
        this.currentMonthIndex++
      } else {
        this.currentMonthIndex = 0
        this.currentYear++
      }
    },

    async confirmAppointment() {
      // Simulate API call
      return new Promise(resolve => {
        setTimeout(() => {
          console.log('Appointment confirmed:', {
            service: this.selectedService,
            barber: this.selectedBarber,
            date: this.selectedDate,
            time: this.selectedTime,
            customer: {
              name: this.customerName,
              phone: this.customerPhone,
              email: this.customerEmail
            }
          })
          this.showSuccessModal = true
          resolve()
        }, 1500)
      })
    }
  }
}
</script>

<style scoped>
/* Animations */
.animate-slide-up {
  animation: slideUp 0.3s ease-out;
}

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