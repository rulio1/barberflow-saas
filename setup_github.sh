#!/bin/bash

# GitHub Setup Script for BarberFlow

echo "🚀 Configurando conexão com GitHub para o BarberFlow..."

# Step 1: Authenticate with GitHub
echo "🔑 Autenticando com GitHub..."
gh auth login

# Step 2: Create repository
echo "📁 Criando repositório no GitHub..."
gh repo create barberflow-saas --public --source=. --remote=origin

# Step 3: Add all files and commit
echo "📝 Adicionando arquivos ao Git..."
git add .

echo "💾 Fazendo commit inicial..."
git commit -m "🚀 Configuração inicial do BarberFlow SaaS"

# Step 4: Push to GitHub
echo "🔄 Fazendo push para o GitHub..."
git push -u origin main

echo "✅ Configuração do GitHub concluída com sucesso!"
echo "📍 Repositório: https://github.com/$(gh api user --jq '.login')/barberflow-saas"