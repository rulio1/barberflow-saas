<template>
  <div class="min-h-screen bg-graphite-950 text-graphite-50 font-sans">
    <!-- Demo Section -->
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
                <p class="text-sm text-graphite-400">SaaS para Barbearias</p>
              </div>
            </div>
            <div class="flex space-x-3">
              <router-link to="/login"
                           class="px-4 py-2 text-graphite-200 hover:text-neon-green-400 transition-colors">
                Entrar
              </router-link>
              <router-link to="/register"
                           class="px-6 py-2 bg-neon-green-500 text-white rounded-lg font-semibold hover:bg-neon-green-600 transition-colors">
                Cadastre sua Barbearia
              </router-link>
            </div>
          </div>
        </div>
      </nav>

      <!-- Demo Content -->
      <div class="relative z-10 w-full max-w-4xl mx-auto px-4">
        <div class="bg-graphite-800/90 backdrop-blur-sm rounded-2xl p-8 border border-graphite-700">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold mb-4">Demo Interativa do BarberFlow</h2>
            <p class="text-graphite-400">Explore os recursos da nossa plataforma sem necessidade de cadastro</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <!-- Demo Feature 1 -->
            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <h3 class="text-xl font-semibold mb-4">📅 Agendamento Online</h3>
              <p class="text-graphite-400 mb-4">Veja como seus clientes podem agendar serviços 24/7 com nosso sistema intuitivo.</p>
              <button class="px-4 py-2 bg-amber-glow-500 text-white rounded-lg font-medium hover:bg-amber-glow-600 transition-colors">
                Ver Demo de Agendamento
              </button>
            </div>

            <!-- Demo Feature 2 -->
            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <h3 class="text-xl font-semibold mb-4">📊 Dashboard de Gerenciamento</h3>
              <p class="text-graphite-400 mb-4">Explore nosso painel de controle com relatórios e analytics em tempo real.</p>
              <button class="px-4 py-2 bg-amber-glow-500 text-white rounded-lg font-medium hover:bg-amber-glow-600 transition-colors">
                Ver Demo de Dashboard
              </button>
            </div>

            <!-- Demo Feature 3 -->
            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <h3 class="text-xl font-semibold mb-4">💇‍♂️ Gerenciamento de Clientes</h3>
              <p class="text-graphite-400 mb-4">Descubra como gerenciar o histórico e preferências dos seus clientes.</p>
              <button class="px-4 py-2 bg-amber-glow-500 text-white rounded-lg font-medium hover:bg-amber-glow-600 transition-colors">
                Ver Demo de CRM
              </button>
            </div>

            <!-- Demo Feature 4 -->
            <div class="bg-graphite-700 rounded-xl p-6 border border-graphite-600">
              <h3 class="text-xl font-semibold mb-4">💰 Controle Financeiro</h3>
              <p class="text-graphite-400 mb-4">Veja como acompanhar receitas, despesas e comissões de barbeiros.</p>
              <button class="px-4 py-2 bg-amber-glow-500 text-white rounded-lg font-medium hover:bg-amber-glow-600 transition-colors">
                Ver Demo Financeiro
              </button>
            </div>
          </div>

          <div class="text-center">
            <p class="text-graphite-400 mb-4">Pronto para experimentar o BarberFlow na sua barbearia?</p>
            <router-link to="/register"
                         class="inline-block px-8 py-4 bg-amber-glow-500 text-white rounded-lg font-semibold text-lg hover:bg-amber-glow-600 transition-colors transform hover:scale-105">
              Começar Teste Grátis
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DemoPage'
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