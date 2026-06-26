# 🚀 Guia Rápido de Configuração - BarberFlow SaaS

Este guia irá ajudá-lo a configurar o GitHub, Vercel e o backend do BarberFlow em poucos passos.

## 📋 Pré-requisitos

- [GitHub CLI](https://cli.github.com/) instalado (`gh`)
- [Vercel CLI](https://vercel.com/docs/cli) instalado (`vercel`)
- [Node.js](https://nodejs.org/) v18+
- [PostgreSQL](https://www.postgresql.org/) ou [Supabase](https://supabase.com/)

## 🐙 Passo 1: Configuração do GitHub

### 1.1. Execute o script de configuração do GitHub

```bash
./setup_github.sh
```

Este script irá:
1. Autenticar você no GitHub
2. Criar um repositório chamado `barberflow-saas`
3. Fazer commit e push de todo o código

### 1.2. Verifique a conexão

```bash
git remote -v
gh repo view
```

## ☁️ Passo 2: Configuração do Vercel

### 2.1. Execute o script de configuração do Vercel

```bash
./setup_vercel.sh
```

Este script irá:
1. Instalar o Vercel CLI (se necessário)
2. Fazer login na sua conta Vercel
3. Iniciar o processo de deploy do backend
4. Gerar um JWT_SECRET seguro

### 2.2. Configure as variáveis de ambiente

No dashboard do Vercel, vá para **Settings → Environment Variables** e adicione:

#### 🔐 Variáveis Obrigatórias

```
DATABASE_URL=postgresql://user:password@host:port/database?schema=public
JWT_SECRET=seu-secret-gerado-pelo-script
JWT_EXPIRES_IN=7d
JWT_COOKIE_EXPIRES=7
PORT=3003
NODE_ENV=production
ALLOWED_ORIGINS=https://seu-dominio.com,https://admin.seu-dominio.com,https://app.seu-dominio.com
```

#### 💳 Variáveis Opcionais (Stripe)

```
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

#### ✉️ Variáveis de Email (Opcional)

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-de-app
EMAIL_FROM=noreply@barberflow.com
```

## 🔧 Passo 3: Configuração do Banco de Dados

### 3.1. Opção 1: PostgreSQL Local

```bash
# Instale o PostgreSQL
brew install postgresql

# Inicie o serviço
brew services start postgresql

# Crie o banco de dados
createdb barberflow

# Execute as migrações
cd barberflow/backend
npx prisma migrate dev
```

### 3.2. Opção 2: Supabase (Recomendado)

1. Acesse [Supabase](https://supabase.com) e crie uma conta
2. Crie um novo projeto
3. Anote as credenciais do banco de dados
4. Configure a variável `DATABASE_URL`:

```
DATABASE_URL=postgresql://postgres:[SUA-SENHA]@db.[SEU-PROJETO].supabase.co:5432/postgres
```

### 3.3. Opção 3: Vercel Postgres

```bash
# Crie um banco de dados Vercel Postgres
vercel postgres create barberflow-db

# Obtenha a URL de conexão
vercel postgres connect barberflow-db

# Configure a variável de ambiente
vercel env add DATABASE_URL
```

## 🧪 Passo 4: Teste Local

### 4.1. Inicie o backend

```bash
cd barberflow/backend
npm install
npm run dev
```

### 4.2. Teste os endpoints

```bash
# Teste de saúde
curl http://localhost:3003/api/health

# Teste de registro
curl -X POST http://localhost:3003/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Minha Barbearia",
    "email": "teste@barberflow.com",
    "password": "senha123",
    "phone": "11987654321",
    "address": "Rua Exemplo, 123"
  }'

# Teste de login
curl -X POST http://localhost:3003/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "teste@barberflow.com",
    "password": "senha123"
  }'
```

## 🌐 Passo 5: Configuração de Domínio

Recomendamos a seguinte estrutura:

- **Landing Page**: `https://barberflow.com`
- **Admin Panel**: `https://admin.barberflow.com`
- **Client PWA**: `https://app.barberflow.com`
- **API Backend**: `https://api.barberflow.com`

## 🔄 Passo 6: CI/CD (Opcional)

Crie um arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy BarberFlow

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: cd backend && npm install
      - run: cd backend && npm run prisma:generate
      - run: cd backend && vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```

## ✅ Checklist de Configuração

- [ ] GitHub: Repositório criado e código enviado
- [ ] Vercel: Projeto configurado e variáveis de ambiente definidas
- [ ] Banco de Dados: PostgreSQL/Supabase configurado
- [ ] Backend: Testado localmente e deploy feito
- [ ] Domínios: Configurados no Vercel
- [ ] CI/CD: GitHub Actions configurado (opcional)

## 🆘 Solução de Problemas

### Problema: API não responde

```bash
# Verifique os logs
vercel logs

# Teste localmente
cd backend && npm run dev
```

### Problema: Erro de conexão com banco de dados

1. Verifique a URL do banco de dados
2. Teste a conexão manualmente:
```bash
psql postgresql://user:password@host:port/database
```

### Problema: Autenticação falha

1. Verifique o segredo JWT
2. Teste o endpoint de login:
```bash
curl -X POST http://localhost:3003/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "teste@barberflow.com", "password": "senha123"}'
```

## 📚 Recursos Adicionais

- [Documentação do Vercel](https://vercel.com/docs)
- [Documentação do Prisma](https://www.prisma.io/docs)
- [Documentação do Express](https://expressjs.com/)
- [Documentação do JWT](https://jwt.io/)

🎉 Parabéns! Seu BarberFlow SaaS está pronto para ser deployado!