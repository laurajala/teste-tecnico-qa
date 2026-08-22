# 📖 Histórias do Usuário

Este documento apresenta as histórias de usuário utilizadas como base para o planejamento e execução dos testes do projeto.

As histórias foram estruturadas seguindo o formato:

> **Como** [tipo de usuário],  
> **quero** [ação ou funcionalidade],  
> **para** [benefício ou objetivo].

---

## 👤 HU01 — Cadastro de Usuário

### História

> **Como** visitante da plataforma,  
> **quero** realizar meu cadastro,  
> **para** criar uma conta e acessar as funcionalidades disponíveis para usuários cadastrados.

### Objetivo

Permitir que novos usuários criem uma conta na plataforma por meio do preenchimento das informações necessárias para cadastro.

### Fluxo principal

1. O visitante acessa a opção de cadastro.
2. O sistema apresenta o formulário de criação de conta.
3. O visitante informa os dados solicitados.
4. O visitante confirma o cadastro.
5. O sistema valida as informações.
6. O cadastro é concluído quando os dados são válidos.

---

## 🔐 HU02 — Login

### História

> **Como** usuário cadastrado,  
> **quero** acessar minha conta utilizando minhas credenciais,  
> **para** utilizar as funcionalidades disponíveis para usuários autenticados.

### Objetivo

Permitir que usuários previamente cadastrados realizem autenticação na plataforma.

### Fluxo principal

1. O usuário acessa a página de login.
2. Informa suas credenciais.
3. Solicita o acesso.
4. O sistema valida as informações fornecidas.
5. Quando as credenciais são válidas, o acesso à conta é realizado.

---

## 🛒 HU03 — Carrinho de Compras

### História

> **Como** usuário autenticado,  
> **quero** adicionar produtos ao carrinho de compras,  
> **para** organizar os itens que pretendo adquirir.

### Objetivo

Permitir que o usuário selecione produtos disponíveis na plataforma e os adicione ao carrinho para uma possível compra.

### Fluxo principal

1. O usuário acessa os produtos disponíveis.
2. Seleciona um produto.
3. Solicita a inclusão do produto no carrinho.
4. O sistema adiciona o item.
5. O carrinho é atualizado com o produto selecionado.

---

## 🔗 Rastreabilidade

As histórias deste documento servem como referência para os demais artefatos de qualidade do projeto:

- **HU01** → Cadastro de usuário
- **HU02** → Login
- **HU03** → Carrinho de compras

Os respectivos critérios de aceite estão documentados em [`criterios-de-aceite.md`](./criterios-de-aceite.md), e os cenários de validação estão documentados em [`casos-de-teste.md`](./casos-de-teste.md).

---

> 🧪 **QA:** as histórias de usuário representam a necessidade do usuário e servem como ponto de partida para definição dos critérios de aceite e elaboração dos cenários de teste.
