<template>
  <div class="min-h-screen bg-graphite-950 text-graphite-50 font-sans">
    <!-- Register Section -->
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

      <!-- Register Form -->
      <div class="relative z-10 w-full max-w-2xl mx-auto px-4">
        <div class="bg-graphite-800/90 backdrop-blur-sm rounded-2xl p-8 border border-graphite-700">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold mb-4">Cadastre sua Barbearia</h2>
            <p class="text-graphite-400">Comece seu teste grátis de 14 dias. Sem cartão de crédito necessário.</p>
          </div>

          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for="name" class="block text-sm font-medium mb-2">Nome da Barbearia</label>
                <input type="text" id="name" name="name"
                       class="w-full px-4 py-3 bg-graphite-700 border border-graphite-600 rounded-lg focus:border-neon-green-500 focus:outline-none focus:ring-2 focus:ring-neon-green-500/20 transition-colors"
                       placeholder="Ex: Premium Cuts">
              </div>
              <div>
                <label for="email" class="block text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" name="email"
                       class="w-full px-4 py-3 bg-graphite-700 border border-graphite-600 rounded-lg focus:border-neon-green-500 focus:outline-none focus:ring-2 focus:ring-neon-green-500/20 transition-colors"
                       placeholder="seu@email.com">
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for="phone" class="block text-sm font-medium mb-2">Telefone</label>
                <input type="tel" id="phone" name="phone"
                       class="w-full px-4 py-3 bg-graphite-700 border border-graphite-600 rounded-lg focus:border-neon-green-500 focus:outline-none focus:ring-2 focus:ring-neon-green-500/20 transition-colors"
                       placeholder="(XX) XXXXX-XXXX">
              </div>
              <div>
                <label for="password" class="block text-sm font-medium mb-2">Senha</label>
                <input type="password" id="password" name="password"
                       class="w-full px-4 py-3 bg-graphite-700 border border-graphite-600 rounded-lg focus:border-neon-green-500 focus:outline-none focus:ring-2 focus:ring-neon-green-500/20 transition-colors"
                       placeholder="••••••••">
              </div>
            </div>

            <div>
              <label for="address" class="block text-sm font-medium mb-2">Endereço</label>
              <input type="text" id="address" name="address"
                     class="w-full px-4 py-3 bg-graphite-700 border border-graphite-600 rounded-lg focus:border-neon-green-500 focus:outline-none focus:ring-2 focus:ring-neon-green-500/20 transition-colors"
                     placeholder="Rua, número, bairro, cidade">
            </div>

            <div>
              <label for="plan" class="block text-sm font-medium mb-2">Plano</label>
              <select id="plan" name="plan"
                      class="w-full px-4 py-3 bg-graphite-700 border border-graphite-600 rounded-lg focus:border-neon-green-500 focus:outline-none focus:ring-2 focus:ring-neon-green-500/20 transition-colors">
                <option value="basic">Básico - R$99/mês</option>
                <option value="pro" selected>Profissional - R$199/mês</option>
                <option value="enterprise">Enterprise - R$399/mês</option>
              </select>
            </div>

            <div class="flex items-center">
              <input type="checkbox" id="terms" name="terms"
                     class="w-4 h-4 text-neon-green-500 bg-graphite-700 border-graphite-600 rounded focus:ring-neon-green-500">
              <label for="terms" class="ml-2 text-sm text-graphite-400">
                Eu aceito os <a href="#" class="text-neon-green-400 hover:underline">Termos de Serviço</a> e <a href="#" class="text-neon-green-400 hover:underline">Política de Privacidade</a>
              </label>
            </div>

            <button type="submit"
                    class="w-full px-6 py-4 bg-amber-glow-500 text-white rounded-lg font-semibold text-lg hover:bg-amber-glow-600 transition-colors transform hover:scale-105">
              Começar Teste Grátis
            </button>

            <p class="text-center text-sm text-graphite-400">
              Já tem uma conta? <router-link to="/login" class="text-neon-green-400 hover:underline font-medium">Entre aqui</router-link>
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage'
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