<template>
  <div class="min-h-screen bg-graphite-950 text-graphite-50 font-sans">
    <!-- Login Section -->
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

      <!-- Login Form -->
      <div class="relative z-10 w-full max-w-md mx-auto px-4">
        <div class="bg-graphite-800/90 backdrop-blur-sm rounded-2xl p-8 border border-graphite-700">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold mb-4">Bem-vindo de volta</h2>
            <p class="text-graphite-400">Acesse sua conta para gerenciar sua barbearia</p>
          </div>

          <form class="space-y-6">
            <div>
              <label for="email" class="block text-sm font-medium mb-2">Email</label>
              <input type="email" id="email" name="email"
                     class="w-full px-4 py-3 bg-graphite-700 border border-graphite-600 rounded-lg focus:border-neon-green-500 focus:outline-none focus:ring-2 focus:ring-neon-green-500/20 transition-colors"
                     placeholder="seu@email.com">
            </div>

            <div>
              <label for="password" class="block text-sm font-medium mb-2">Senha</label>
              <input type="password" id="password" name="password"
                     class="w-full px-4 py-3 bg-graphite-700 border border-graphite-600 rounded-lg focus:border-neon-green-500 focus:outline-none focus:ring-2 focus:ring-neon-green-500/20 transition-colors"
                     placeholder="••••••••">
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input type="checkbox" id="remember" name="remember"
                       class="w-4 h-4 text-neon-green-500 bg-graphite-700 border-graphite-600 rounded focus:ring-neon-green-500">
                <label for="remember" class="ml-2 text-sm text-graphite-400">Lembrar de mim</label>
              </div>
              <a href="#" class="text-sm text-neon-green-400 hover:underline">Esqueceu a senha?</a>
            </div>

            <button type="submit"
                    class="w-full px-6 py-4 bg-amber-glow-500 text-white rounded-lg font-semibold text-lg hover:bg-amber-glow-600 transition-colors transform hover:scale-105">
              Entrar
            </button>

            <div class="text-center text-sm text-graphite-400">
              Não tem uma conta? <router-link to="/register" class="text-neon-green-400 hover:underline font-medium">Cadastre-se</router-link>
            </div>
          </form>

          <div class="mt-8 text-center">
            <p class="text-sm text-graphite-500 mb-4">OU CONTINUE COM</p>
            <div class="flex justify-center space-x-4">
              <button class="w-12 h-12 bg-graphite-700 rounded-full flex items-center justify-center hover:bg-graphite-600 transition-colors">
                <svg class="w-6 h-6 text-graphite-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </button>
              <button class="w-12 h-12 bg-graphite-700 rounded-full flex items-center justify-center hover:bg-graphite-600 transition-colors">
                <svg class="w-6 h-6 text-graphite-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LoginPage'
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