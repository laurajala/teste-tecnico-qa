# ✅ Critérios de Aceite

Este documento apresenta os critérios de aceite definidos para as funcionalidades contempladas no desafio.

Os critérios estão descritos utilizando a sintaxe **BDD (Behavior-Driven Development)**:

> **Dado** um contexto  
> **Quando** uma ação é realizada  
> **Então** um resultado esperado deve ocorrer

Cada conjunto de critérios está relacionado às histórias de usuário documentadas em [`historia-do-usuario.md`](./historia-do-usuario.md).

---

# 👤 HU01 — Cadastro de Usuário

## CA01 — Cadastro realizado com sucesso

```gherkin
Dado que o visitante esteja na tela de cadastro
E preencha corretamente todos os campos obrigatórios
Quando confirmar o cadastro
Então o sistema deve criar a conta com sucesso
```

## CA02 — Campos obrigatórios não preenchidos

```gherkin
Dado que o visitante esteja na tela de cadastro
E deixe um ou mais campos obrigatórios sem preenchimento
Quando tentar concluir o cadastro
Então o sistema não deve permitir a criação da conta
E deve sinalizar os campos que precisam ser preenchidos
```

## CA03 — Dados inválidos

```gherkin
Dado que o visitante esteja na tela de cadastro
E informe dados em formato inválido
Quando tentar concluir o cadastro
Então o sistema não deve criar a conta
E deve informar que existem dados inválidos
```

---

# 🔐 HU02 — Login

## CA04 — Login realizado com sucesso

```gherkin
Dado que o usuário possua uma conta cadastrada
E esteja na tela de login
Quando informar credenciais válidas
Então o sistema deve permitir o acesso à plataforma
```

## CA05 — Login com credenciais inválidas

```gherkin
Dado que o usuário esteja na tela de login
Quando informar credenciais inválidas
Então o sistema não deve permitir o acesso à plataforma
E deve informar que não foi possível realizar a autenticação
```

## CA06 — Campos de login obrigatórios

```gherkin
Dado que o usuário esteja na tela de login
E deixe um ou mais campos obrigatórios sem preenchimento
Quando tentar realizar o login
Então o sistema não deve permitir a autenticação
E deve sinalizar os campos obrigatórios
```

---

# 🛒 HU03 — Carrinho de Compras

## CA07 — Adicionar produto ao carrinho

```gherkin
Dado que o usuário esteja autenticado
E exista um produto disponível
Quando adicionar o produto ao carrinho
Então o produto selecionado deve ser exibido no carrinho
```

## CA08 — Manter produto adicionado

```gherkin
Dado que o usuário tenha adicionado um produto ao carrinho
Quando acessar o carrinho
Então o produto selecionado deve estar presente
```

## CA09 — Informações do produto no carrinho

```gherkin
Dado que exista um produto adicionado ao carrinho
Quando o usuário visualizar o carrinho
Então o sistema deve apresentar as informações correspondentes ao produto selecionado
```

---

# 🔗 Rastreabilidade

| História | Funcionalidade | Critérios |
| --- | --- | --- |
| **HU01** | Cadastro de usuário | CA01, CA02, CA03 |
| **HU02** | Login | CA04, CA05, CA06 |
| **HU03** | Carrinho de compras | CA07, CA08, CA09 |

---

## 🧪 Cobertura definida

Os critérios contemplam diferentes perspectivas de validação:

- ✅ Fluxos positivos
- ❌ Fluxos negativos
- 📝 Validação de campos obrigatórios
- 🔐 Validação de autenticação
- 🛒 Validação do comportamento do carrinho
- 🔎 Validação das respostas da aplicação

Os critérios definidos neste documento servem como base para elaboração e rastreabilidade dos [`casos-de-teste.md`](./casos-de-teste.md).
