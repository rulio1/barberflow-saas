<template>
  <div class="min-h-screen bg-graphite-950 text-graphite-50 font-sans">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
             alt="Professional barber shop interior"
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-graphite-950/70"></div>
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
                <p class="text-sm text-graphite-400">Agendamento Premium</p>
              </div>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="#services" class="text-graphite-200 hover:text-neon-green-400 transition-colors">Serviços</a>
              <a href="#barbers" class="text-graphite-200 hover:text-neon-green-400 transition-colors">Barbeiros</a>
              <a href="#about" class="text-graphite-200 hover:text-neon-green-400 transition-colors">Sobre</a>
              <a href="#contact" class="text-graphite-200 hover:text-neon-green-400 transition-colors">Contato</a>
            </div>
            <router-link to="/agendamento"
                         class="px-6 py-2 bg-neon-green-500 text-white rounded-lg font-semibold hover:bg-neon-green-600 transition-colors">
              Agendar Agora
            </router-link>
          </div>
        </div>
      </nav>

      <!-- Hero Content -->
      <div class="relative z-10 text-center px-4">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Experiência Premium de<br>
          <span class="text-neon-green-400">Barbearia</span>
        </h1>
        <p class="text-xl md:text-2xl text-graphite-300 mb-8 max-w-2xl mx-auto">
          Agende seu horário com os melhores profissionais<br>
          e desfrute de um atendimento exclusivo
        </p>
        <router-link to="/agendamento"
                     class="inline-block px-8 py-4 bg-amber-glow-500 text-white rounded-lg font-semibold text-lg hover:bg-amber-glow-600 transition-colors transform hover:scale-105">
          Agendar Horário
        </router-link>
      </div>

      <!-- Scroll Down Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div class="w-6 h-10 border-2 border-neon-green-400 rounded-full flex justify-center">
          <div class="w-1 h-3 bg-neon-green-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-graphite-900/30">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <span class="text-neon-green-400 font-medium text-sm uppercase tracking-wider">Nossos Serviços</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-4 mb-6">O que oferecemos</h2>
          <p class="text-graphite-400 max-w-2xl mx-auto">
            Serviços profissionais com produtos premium e técnicas avançadas para um resultado impecável.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Service Card 1 -->
          <div class="bg-graphite-800 rounded-xl p-8 hover:bg-graphite-700 transition-all duration-300 border border-graphite-700 hover:border-neon-green-500">
            <div class="w-16 h-16 bg-neon-green-500/20 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Corte de Cabelo</h3>
            <p class="text-graphite-400 mb-6">Cortes modernos e clássicos com acabamento premium e atenção aos detalhes.</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-amber-glow-400">R$ 50,00</span>
              <span class="text-sm text-graphite-500">30 min</span>
            </div>
          </div>

          <!-- Service Card 2 -->
          <div class="bg-graphite-800 rounded-xl p-8 hover:bg-graphite-700 transition-all duration-300 border border-graphite-700 hover:border-neon-green-500">
            <div class="w-16 h-16 bg-neon-green-500/20 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Barba Completa</h3>
            <p class="text-graphite-400 mb-6">Modelagem e tratamento de barba com produtos premium para um visual impecável.</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-amber-glow-400">R$ 40,00</span>
              <span class="text-sm text-graphite-500">25 min</span>
            </div>
          </div>

          <!-- Service Card 3 -->
          <div class="bg-graphite-800 rounded-xl p-8 hover:bg-graphite-700 transition-all duration-300 border border-graphite-700 hover:border-neon-green-500">
            <div class="w-16 h-16 bg-neon-green-500/20 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Corte + Barba</h3>
            <p class="text-graphite-400 mb-6">Pacote completo com corte de cabelo e modelagem de barba com desconto especial.</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-amber-glow-400">R$ 85,00</span>
              <span class="text-sm text-graphite-500">55 min</span>
            </div>
          </div>

          <!-- Service Card 4 -->
          <div class="bg-graphite-800 rounded-xl p-8 hover:bg-graphite-700 transition-all duration-300 border border-graphite-700 hover:border-neon-green-500">
            <div class="w-16 h-16 bg-neon-green-500/20 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Sobrancelha</h3>
            <p class="text-graphite-400 mb-6">Design e limpeza de sobrancelhas para um visual harmonioso e natural.</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-amber-glow-400">R$ 25,00</span>
              <span class="text-sm text-graphite-500">15 min</span>
            </div>
          </div>

          <!-- Service Card 5 -->
          <div class="bg-graphite-800 rounded-xl p-8 hover:bg-graphite-700 transition-all duration-300 border border-graphite-700 hover:border-neon-green-500">
            <div class="w-16 h-16 bg-neon-green-500/20 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Tratamento Capilar</h3>
            <p class="text-graphite-400 mb-6">Hidratação profunda e tratamento para cabelos saudáveis e brilhantes.</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-amber-glow-400">R$ 65,00</span>
              <span class="text-sm text-graphite-500">40 min</span>
            </div>
          </div>

          <!-- Service Card 6 -->
          <div class="bg-graphite-800 rounded-xl p-8 hover:bg-graphite-700 transition-all duration-300 border border-graphite-700 hover:border-neon-green-500">
            <div class="w-16 h-16 bg-neon-green-500/20 rounded-xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Corte Infantil</h3>
            <p class="text-graphite-400 mb-6">Corte especial para crianças com ambiente descontraído e atendimento cuidadoso.</p>
            <div class="flex justify-between items-center">
              <span class="text-2xl font-bold text-amber-glow-400">R$ 35,00</span>
              <span class="text-sm text-graphite-500">20 min</span>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link to="/agendamento"
                       class="inline-block px-8 py-3 bg-neon-green-500 text-white rounded-lg font-semibold hover:bg-neon-green-600 transition-colors">
            Agendar Serviço
          </router-link>
        </div>
      </div>
    </section>

    <!-- Barbers Section -->
    <section id="barbers" class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <span class="text-neon-green-400 font-medium text-sm uppercase tracking-wider">Nossa Equipe</span>
          <h2 class="text-3xl md:text-4xl font-bold mt-4 mb-6">Conheça nossos barbeiros</h2>
          <p class="text-graphite-400 max-w-2xl mx-auto">
            Profissionais altamente qualificados com anos de experiência e paixão pelo que fazem.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Barber 1 -->
          <div class="text-center">
            <div class="w-full h-80 rounded-xl overflow-hidden mb-6 group">
              <img src="https://randomuser.me/api/portraits/men/32.jpg"
                   alt="Carlos Silva - Especialista em fades"
                   class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            </div>
            <h3 class="text-xl font-semibold mb-2">Carlos Silva</h3>
            <p class="text-neon-green-400 text-sm font-medium mb-2">Especialista em fades</p>
            <p class="text-graphite-400 text-sm mb-4">10+ anos de experiência em cortes modernos e técnicas avançadas.</p>
            <div class="flex justify-center items-center">
              <span class="text-amber-glow-400 mr-1">★</span>
              <span class="text-sm">4.9</span>
            </div>
          </div>

          <!-- Barber 2 -->
          <div class="text-center">
            <div class="w-full h-80 rounded-xl overflow-hidden mb-6 group">
              <img src="https://randomuser.me/api/portraits/men/33.jpg"
                   alt="Marcos Oliveira - Barbas artísticas"
                   class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            </div>
            <h3 class="text-xl font-semibold mb-2">Marcos Oliveira</h3>
            <p class="text-neon-green-400 text-sm font-medium mb-2">Barbas artísticas</p>
            <p class="text-graphite-400 text-sm mb-4">Mestre em design de barba e estilos personalizados.</p>
            <div class="flex justify-center items-center">
              <span class="text-amber-glow-400 mr-1">★</span>
              <span class="text-sm">4.8</span>
            </div>
          </div>

          <!-- Barber 3 -->
          <div class="text-center">
            <div class="w-full h-80 rounded-xl overflow-hidden mb-6 group">
              <img src="https://randomuser.me/api/portraits/men/34.jpg"
                   alt="Rafael Souza - Cortes modernos"
                   class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            </div>
            <h3 class="text-xl font-semibold mb-2">Rafael Souza</h3>
            <p class="text-neon-green-400 text-sm font-medium mb-2">Cortes modernos</p>
            <p class="text-graphite-400 text-sm mb-4">Especialista em tendências atuais e estilos inovadores.</p>
            <div class="flex justify-center items-center">
              <span class="text-amber-glow-400 mr-1">★</span>
              <span class="text-sm">4.7</span>
            </div>
          </div>

          <!-- Barber 4 -->
          <div class="text-center">
            <div class="w-full h-80 rounded-xl overflow-hidden mb-6 group">
              <img src="https://randomuser.me/api/portraits/men/35.jpg"
                   alt="Lucas Pereira - Estilo clássico"
                   class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
            </div>
            <h3 class="text-xl font-semibold mb-2">Lucas Pereira</h3>
            <p class="text-neon-green-400 text-sm font-medium mb-2">Estilo clássico</p>
            <p class="text-graphite-400 text-sm mb-4">Expert em cortes tradicionais e técnicas refinadas.</p>
            <div class="flex justify-center items-center">
              <span class="text-amber-glow-400 mr-1">★</span>
              <span class="text-sm">4.9</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-graphite-900/30">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span class="text-neon-green-400 font-medium text-sm uppercase tracking-wider">Sobre Nós</span>
            <h2 class="text-3xl md:text-4xl font-bold mt-4 mb-6">BarberFlow - Excelência em Barbearia</h2>
            <p class="text-graphite-400 mb-6">
              Fundada em 2018, a BarberFlow nasceu com a missão de elevar a experiência de barbearia a um novo patamar.
              Combinamos técnicas tradicionais com inovação para oferecer serviços de alta qualidade.
            </p>
            <p class="text-graphite-400 mb-8">
              Nosso espaço foi cuidadosamente projetado para proporcionar conforto e relaxamento,
              com produtos premium e equipamentos de última geração.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div class="flex items-center">
                <div class="w-8 h-8 bg-neon-green-500 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span class="text-graphite-300">100% Satisfação Garantida</span>
              </div>
              <div class="flex items-center">
                <div class="w-8 h-8 bg-neon-green-500 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <span class="text-graphite-300">Produtos Premium</span>
              </div>
              <div class="flex items-center">
                <div class="w-8 h-8 bg-neon-green-500 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <span class="text-graphite-300">Localização Privilegiada</span>
              </div>
              <div class="flex items-center">
                <div class="w-8 h-8 bg-neon-green-500 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span class="text-graphite-300">Agendamento Flexível</span>
              </div>
            </div>
          </div>
          <div class="relative">
            <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                 alt="Interior da barbearia BarberFlow"
                 class="w-full h-96 object-cover rounded-xl">
            <div class="absolute inset-0 bg-neon-green-500/10 rounded-xl"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span class="text-neon-green-400 font-medium text-sm uppercase tracking-wider">Contato</span>
            <h2 class="text-3xl md:text-4xl font-bold mt-4 mb-6">Entre em contato</h2>
            <p class="text-graphite-400 mb-8">
              Estamos sempre prontos para atendê-lo. Entre em contato para agendamentos, dúvidas ou sugestões.
            </p>

            <div class="space-y-6">
              <div class="flex items-center">
                <div class="w-12 h-12 bg-neon-green-500/20 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold">Endereço</h3>
                  <p class="text-graphite-400">Rua das Barbas, 123 - Centro<br>São Paulo, SP</p>
                </div>
              </div>

              <div class="flex items-center">
                <div class="w-12 h-12 bg-neon-green-500/20 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold">Telefone</h3>
                  <p class="text-graphite-400">(11) 1234-5678<br>(11) 98765-4321</p>
                </div>
              </div>

              <div class="flex items-center">
                <div class="w-12 h-12 bg-neon-green-500/20 rounded-full flex items-center justify-center mr-4">
                  <svg class="w-6 h-6 text-neon-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold">Email</h3>
                  <p class="text-graphite-400">contato@barberflow.com<br>suporte@barberflow.com</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-graphite-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold mb-6">Horário de Funcionamento</h3>
            <div class="space-y-4">
              <div class="flex justify-between items-center py-3 border-b border-graphite-700">
                <span class="text-graphite-400">Segunda a Sexta</span>
                <span class="font-medium">09:00 - 19:00</span>
              </div>
              <div class="flex justify-between items-center py-3 border-b border-graphite-700">
                <span class="text-graphite-400">Sábado</span>
                <span class="font-medium">09:00 - 16:00</span>
              </div>
              <div class="flex justify-between items-center py-3">
                <span class="text-graphite-400">Domingo</span>
                <span class="font-medium text-amber-glow-400">Fechado</span>
              </div>
            </div>

            <div class="mt-8 text-center">
              <router-link to="/agendamento"
                           class="inline-block px-8 py-3 bg-amber-glow-500 text-white rounded-lg font-semibold hover:bg-amber-glow-600 transition-colors w-full">
                Agendar Horário
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-graphite-900 py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div class="flex items-center space-x-3 mb-4">
              <div class="w-10 h-10 bg-amber-glow-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold">B</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold">BarberFlow</h3>
                <p class="text-sm text-graphite-400">Agendamento Premium</p>
              </div>
            </div>
            <p class="text-graphite-400 text-sm">
              Transformando cortes de cabelo em experiências memoráveis desde 2018.
            </p>
          </div>

          <div>
            <h4 class="font-semibold mb-4">Links Rápidos</h4>
            <ul class="space-y-2">
              <li><a href="#services" class="text-graphite-400 hover:text-neon-green-400 transition-colors text-sm">Serviços</a></li>
              <li><a href="#barbers" class="text-graphite-400 hover:text-neon-green-400 transition-colors text-sm">Barbeiros</a></li>
              <li><a href="#about" class="text-graphite-400 hover:text-neon-green-400 transition-colors text-sm">Sobre</a></li>
              <li><a href="#contact" class="text-graphite-400 hover:text-neon-green-400 transition-colors text-sm">Contato</a></li>
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
          <p class="text-graphite-500 text-sm">© 2023 BarberFlow. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LandingPage'
}
</script>

<style scoped>
/* Animations */
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

/* Glassmorphism effect */
.glassmorphism {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
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