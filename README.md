# CRUD com Node.js, Express e PostgreSQL

Projeto completo de CRUD usando **Node.js**, **Express** e **PostgreSQL**, com front-end integrado simples feito em **HTML**, **CSS** (Bootstrap 5) e **JavaScript** puro.  
Permite criar, listar, editar e deletar usuários através de uma interface amigável e uma API RESTful.

---

## Funcionalidades

- API REST com Express  
- Integração com banco PostgreSQL  
- Criação automática da tabela `users` ao iniciar a aplicação  
- Front-end responsivo com Bootstrap 5  
- Operações CRUD para usuários: Criar, Ler, Atualizar e Deletar  

---

## Pré-requisitos

- Node.js (versão 14 ou superior recomendada)  
- PostgreSQL instalado e rodando  

---

## Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

2. Instale as dependências:
   ```bash
   npm install

3. Configure seu banco no arquivo .env (copie o .env.example e edite):
   ```bash
   DB_USER=seu_usuario_postgres
   DB_PASS=sua_senha_postgres
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=crud_db
   PORT=3000

4. Inicie o servidor:
   ```bash
   npm run dev

1. Abra o navegador: http://localhost:3000
