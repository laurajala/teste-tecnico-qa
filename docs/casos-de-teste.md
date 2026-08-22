# 🧪 Casos de Teste

Este documento apresenta os casos de teste elaborados para validar as funcionalidades de **Cadastro**, **Login** e **Carrinho de Compras**.

Os testes foram derivados das histórias de usuário e dos critérios de aceite definidos para o projeto.

---

# 👤 Cadastro de Usuário

## CT01 — Cadastro realizado com sucesso

**História:** HU01  
**Critério de aceite:** CA01  
**Tipo:** Funcional / Positivo  
**Prioridade:** Alta

### Pré-condições

- Usuário não deve possuir cadastro com os dados utilizados no teste.
- Aplicação deve estar disponível.
- Usuário deve estar na página inicial.

### Passos

1. Acessar a aplicação.
2. Clicar em **Signup / Login**.
3. Informar nome e e-mail válidos.
4. Prosseguir com o cadastro.
5. Preencher os campos obrigatórios.
6. Confirmar a criação da conta.

### Resultado esperado

A conta deve ser criada com sucesso e o sistema deve apresentar a confirmação do cadastro.

---

## CT02 — Cadastro com campos obrigatórios não preenchidos

**História:** HU01  
**Critério de aceite:** CA02  
**Tipo:** Funcional / Negativo  
**Prioridade:** Alta

### Pré-condições

- Aplicação deve estar disponível.
- Usuário deve estar na tela de cadastro.

### Passos

1. Acessar o formulário de cadastro.
2. Deixar um ou mais campos obrigatórios sem preenchimento.
3. Tentar concluir o cadastro.

### Resultado esperado

O sistema não deve concluir o cadastro e deve sinalizar os campos obrigatórios que precisam ser preenchidos.

---

## CT03 — Cadastro com dados inválidos

**História:** HU01  
**Critério de aceite:** CA03  
**Tipo:** Funcional / Negativo  
**Prioridade:** Média

### Pré-condições

- Aplicação deve estar disponível.
- Usuário deve estar na tela de cadastro.

### Passos

1. Acessar o formulário de cadastro.
2. Preencher os campos utilizando dados em formato inválido.
3. Tentar concluir o cadastro.

### Resultado esperado

O sistema não deve concluir o cadastro e deve apresentar a validação correspondente aos dados inválidos.

---

# 🔐 Login

## CT04 — Login com credenciais válidas

**História:** HU02  
**Critério de aceite:** CA04  
**Tipo:** Funcional / Positivo  
**Prioridade:** Alta

### Pré-condições

- Usuário deve possuir uma conta válida cadastrada.
- Aplicação deve estar disponível.

### Passos

1. Acessar a aplicação.
2. Clicar em **Signup / Login**.
3. Informar um e-mail cadastrado.
4. Informar a senha correspondente.
5. Clicar em **Login**.

### Resultado esperado

O usuário deve ser autenticado e obter acesso à área destinada aos usuários logados.

---

## CT05 — Login com credenciais inválidas

**História:** HU02  
**Critério de aceite:** CA05  
**Tipo:** Funcional / Negativo  
**Prioridade:** Alta

### Pré-condições

- Aplicação deve estar disponível.
- Usuário deve estar na tela de login.

### Passos

1. Informar credenciais inválidas.
2. Clicar em **Login**.

### Resultado esperado

O sistema não deve autenticar o usuário e deve apresentar uma mensagem indicando que não foi possível realizar o login.

---

## CT06 — Login sem preenchimento dos campos obrigatórios

**História:** HU02  
**Critério de aceite:** CA06  
**Tipo:** Funcional / Negativo  
**Prioridade:** Alta

### Pré-condições

- Aplicação deve estar disponível.
- Usuário deve estar na tela de login.

### Passos

1. Manter um ou mais campos obrigatórios sem preenchimento.
2. Clicar em **Login**.

### Resultado esperado

O sistema não deve realizar a autenticação e deve impedir o envio enquanto os dados obrigatórios não forem informados.

---

# 🛒 Carrinho de Compras

## CT07 — Adicionar produto ao carrinho

**História:** HU03  
**Critério de aceite:** CA07  
**Tipo:** Funcional / Positivo  
**Prioridade:** Alta

### Pré-condições

- Aplicação deve estar disponível.
- Usuário deve estar autenticado.
- Deve existir pelo menos um produto disponível.

### Passos

1. Acessar a área de produtos.
2. Selecionar um produto disponível.
3. Clicar em **Add to cart**.
4. Acessar o carrinho.

### Resultado esperado

O produto selecionado deve ser exibido no carrinho.

---

## CT08 — Validar permanência do produto no carrinho

**História:** HU03  
**Critério de aceite:** CA08  
**Tipo:** Funcional / Positivo  
**Prioridade:** Média

### Pré-condições

- Usuário deve estar autenticado.
- Deve existir um produto previamente adicionado ao carrinho.

### Passos

1. Adicionar um produto ao carrinho.
2. Continuar navegando pela aplicação.
3. Acessar novamente o carrinho.

### Resultado esperado

O produto anteriormente adicionado deve continuar presente no carrinho.

---

## CT09 — Validar informações do produto no carrinho

**História:** HU03  
**Critério de aceite:** CA09  
**Tipo:** Funcional / Positivo  
**Prioridade:** Alta

### Pré-condições

- Usuário deve estar autenticado.
- Deve existir um produto disponível.

### Passos

1. Selecionar um produto.
2. Adicionar o produto ao carrinho.
3. Acessar o carrinho.
4. Conferir as informações apresentadas para o item.

### Resultado esperado

O produto apresentado no carrinho deve corresponder ao produto selecionado pelo usuário.

---

# 🔗 Matriz de Rastreabilidade

| História | Critério | Caso de Teste | Cenário | Prioridade |
| --- | --- | --- | --- | --- |
| HU01 | CA01 | CT01 | Cadastro válido | 🔴 Alta |
| HU01 | CA02 | CT02 | Campos obrigatórios | 🔴 Alta |
| HU01 | CA03 | CT03 | Dados inválidos | 🟡 Média |
| HU02 | CA04 | CT04 | Login válido | 🔴 Alta |
| HU02 | CA05 | CT05 | Credenciais inválidas | 🔴 Alta |
| HU02 | CA06 | CT06 | Campos obrigatórios | 🔴 Alta |
| HU03 | CA07 | CT07 | Adicionar produto | 🔴 Alta |
| HU03 | CA08 | CT08 | Permanência no carrinho | 🟡 Média |
| HU03 | CA09 | CT09 | Informações do produto | 🔴 Alta |

---

## 📊 Resumo da cobertura

**Total de casos de teste:** 9

- ✅ Testes positivos: 4
- ❌ Testes negativos: 3
- 🧪 Validações complementares: 2
- 🔴 Prioridade alta: 7
- 🟡 Prioridade média: 2

### Funcionalidades cobertas

- 👤 Cadastro de usuário
- 🔐 Autenticação
- 🛒 Carrinho de compras
- 📝 Campos obrigatórios
- ❌ Tratamento de dados inválidos
- 🔎 Validação das informações apresentadas

---

> 💡 Os casos de teste foram elaborados a partir das histórias de usuário e critérios de aceite, mantendo a rastreabilidade entre **requisito → critério → validação**.
