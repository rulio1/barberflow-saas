<template>
  <div class="min-h-screen bg-graphite-950 text-graphite-50 font-sans">
    <!-- Contact Header -->
    <section class="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
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

      <!-- Contact Header Content -->
      <div class="relative z-10 text-center px-4">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">
          Entre em <span class="text-neon-green-400">Contato</span>
        </h1>
        <p class="text-xl text-graphite-300 max-w-2xl mx-auto">
          Estamos aqui para ajudar com qualquer dúvida ou solicitação
        </p>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div class="bg-graphite-800 rounded-xl p-8">
            <h2 class="text-2xl font-bold mb-6">Informações de Contato</h2>
            <p class="text-graphite-400 mb-8">
              Preencha o formulário ao lado ou entre em contato diretamente pelo WhatsApp.
            </p>

            <div class="space-y-6">
              <div class="flex items-start">
                <div class="w-12 h-12 bg-neon-green-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-6 h-6 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold">WhatsApp</h3>
                  <p class="text-graphite-400">
                    <a href="https://wa.me/5553997126656" class="text-neon-green-400 hover:text-neon-green-300 transition-colors">
                      (53) 99712-6656
                    </a>
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="w-12 h-12 bg-neon-green-500/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <svg class="w-6 h-6 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold">Email</h3>
                  <p class="text-graphite-400">
                    <a href="mailto:contato@barberflow.com" class="text-neon-green-400 hover:text-neon-green-300 transition-colors">
                      contato@barberflow.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <h3 class="font-semibold mb-4">Horário de Atendimento</h3>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-graphite-400">Segunda a Sexta:</span>
                  <span class="font-medium">08:00 - 18:00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-graphite-400">Sábado:</span>
                  <span class="font-medium">09:00 - 13:00</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-graphite-400">Domingo:</span>
                  <span class="font-medium text-amber-glow-400">Fechado</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-graphite-800 rounded-xl p-8">
            <h2 class="text-2xl font-bold mb-6">Envie uma Mensagem</h2>
            <form class="space-y-4">
              <div>
                <label for="name" class="block text-sm font-medium text-graphite-300 mb-2">Nome</label>
                <input type="text" id="name" name="name"
                       class="w-full px-4 py-3 bg-graphite-700 border border-graphite-600 rounded-lg text-graphite-50 focus:outline-none focus:border-neon-green-500 focus:ring-1 focus:ring-neon-green-500"
                       placeholder="Seu nome completo" required>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-graphite-300 mb-2">Email</label>
                <input type="email" id="email" name="email"
                       class="w-full px-4 py-3 bg-graphite-700 border border-graphite-600 rounded-lg text-graphite-50 focus:outline-none focus:border-neon-green-500 focus:ring-1 focus:ring-neon-green-500"
                       placeholder="seu@email.com" required>
              </div>

              <div>
                <label for="phone" class="block text-sm font-medium text-graphite-300 mb-2">Telefone (Opcional)</label>
                <input type="tel" id="phone" name="phone"
                       class="w-full px-4 py-3 bg-graphite-700 border border-graphite-600 rounded-lg text-graphite-50 focus:outline-none focus:border-neon-green-500 focus:ring-1 focus:ring-neon-green-500"
                       placeholder="(XX) XXXXX-XXXX">
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-graphite-300 mb-2">Assunto</label>
                <input type="text" id="subject" name="subject"
                       class="w-full px-4 py-3 bg-graphite-700 border border-graphite-600 rounded-lg text-graphite-50 focus:outline-none focus:border-neon-green-500 focus:ring-1 focus:ring-neon-green-500"
                       placeholder="Assunto da mensagem" required>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-graphite-300 mb-2">Mensagem</label>
                <textarea id="message" name="message" rows="5"
                          class="w-full px-4 py-3 bg-graphite-700 border border-graphite-600 rounded-lg text-graphite-50 focus:outline-none focus:border-neon-green-500 focus:ring-1 focus:ring-neon-green-500"
                          placeholder="Digite sua mensagem aqui..." required></textarea>
              </div>

              <div>
                <button type="submit"
                        class="w-full px-6 py-3 bg-amber-glow-500 text-white rounded-lg font-semibold hover:bg-amber-glow-600 transition-colors">
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-graphite-900 py-12 mt-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-10 h-10 bg-amber-glow-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold">B</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold">BarberFlow</h3>
                <p class="text-sm text-graphite-400">Plataforma SaaS para Barbearias</p>
              </div>
            </div>
            <p class="text-graphite-400 text-sm">
              A solução completa para gerenciar e crescer sua barbearia desde 2023.
            </p>
          </div>

          <div>
            <h4 class="font-semibold mb-4">Links Rápidos</h4>
            <ul class="space-y-2">
              <li><router-link to="/" class="text-graphite-400 hover:text-neon-green-400 transition-colors text-sm">Início</router-link></li>
              <li><router-link to="/login" class="text-graphite-400 hover:text-neon-green-400 transition-colors text-sm">Login</router-link></li>
              <li><router-link to="/register" class="text-graphite-400 hover:text-neon-green-400 transition-colors text-sm">Cadastro</router-link></li>
              <li><router-link to="/demo" class="text-graphite-400 hover:text-neon-green-400 transition-colors text-sm">Demo</router-link></li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold mb-4">Siga-nos</h4>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-graphite-800 rounded-full flex items-center justify-center hover:bg-neon-green-500 transition-colors">
                <svg class="w-5 h-5 text-graphite-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-graphite-800 rounded-full flex items-center justify-center hover:bg-neon-green-500 transition-colors">
                <svg class="w-5 h-5 text-graphite-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-graphite-800 rounded-full flex items-center justify-center hover:bg-neon-green-500 transition-colors">
                <svg class="w-5 h-5 text-graphite-400 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="border-t border-graphite-800 pt-8 text-center">
          <p class="text-graphite-500 text-sm">© 2026 BarberFlow. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ContactPage'
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
