#!/bin/bash

# Vercel Setup Script for BarberFlow Backend

echo "☁️ Configurando Vercel para o BarberFlow..."

# Step 1: Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📥 Instalando Vercel CLI..."
    npm install -g vercel
fi

# Step 2: Login to Vercel
echo "🔑 Fazendo login no Vercel..."
vercel login

# Step 3: Navigate to backend and deploy
echo "🚀 Fazendo deploy do backend..."
cd barberflow/backend

# Step 4: Initialize Vercel project
echo "📦 Inicializando projeto Vercel..."
vercel

# Step 5: Set up environment variables
echo "🔧 Configurando variáveis de ambiente..."

# Generate a strong JWT secret
JWT_SECRET=$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")

echo "🔑 Gerado JWT_SECRET: $JWT_SECRET"

# Set environment variables (these will be prompted during vercel setup)
echo "⚠️  Você precisará configurar manualmente estas variáveis de ambiente no dashboard do Vercel:"
echo "📋 Variáveis necessárias:"
echo "DATABASE_URL=postgresql://user:password@host:port/database?schema=public"
echo "JWT_SECRET=$JWT_SECRET"
echo "JWT_EXPIRES_IN=7d"
echo "JWT_COOKIE_EXPIRES=7"
echo "PORT=3003"
echo "NODE_ENV=production"
echo "ALLOWED_ORIGINS=https://seu-dominio.com,https://admin.seu-dominio.com,https://app.seu-dominio.com"
echo "STRIPE_SECRET_KEY=sk_test_..."
echo "STRIPE_WEBHOOK_SECRET=whsec_..."

echo "✅ Configuração do Vercel concluída!"
echo "📍 Acesse https://vercel.com para configurar as variáveis de ambiente"