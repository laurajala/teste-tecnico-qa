<div align="center">

# 🧪 Teste Técnico QA

### Quality Assurance • Cypress • E2E Testing • CI/CD

Projeto de Quality Assurance desenvolvido para demonstrar a aplicação prática de **análise de requisitos, documentação de testes, testes funcionais, automação E2E e integração contínua**.

<br>

![Cypress](https://img.shields.io/badge/Cypress-14.0-17202C?style=for-the-badge&logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Test_Automation-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)

</div>

---

## 🎯 Sobre o projeto

Este projeto foi desenvolvido como parte de um **desafio técnico de Quality Assurance**.

A aplicação utilizada para os testes foi o **Automation Exercise**, plataforma pública destinada à prática de testes e automação web.

O projeto contempla diferentes etapas do processo de qualidade:

**Requisitos → Critérios de Aceite → Casos de Teste → Execução → Automação → CI/CD**

O objetivo não foi apenas desenvolver scripts automatizados, mas estruturar uma abordagem de QA envolvendo **planejamento, documentação, rastreabilidade e validação automatizada**.

---

## 🌐 Aplicação utilizada

Os testes são executados sobre:

**Automation Exercise**

https://automationexercise.com

A URL da aplicação está centralizada no arquivo `cypress.config.js` por meio da propriedade `baseUrl`.

---

## 🔄 Fluxo de QA aplicado

**1️⃣ Análise das funcionalidades**

⬇️

**2️⃣ Definição das histórias de usuário**

⬇️

**3️⃣ Criação dos critérios de aceite**

⬇️

**4️⃣ Elaboração dos casos de teste**

⬇️

**5️⃣ Definição de cenários positivos e negativos**

⬇️

**6️⃣ Automação dos cenários selecionados**

⬇️

**7️⃣ Execução automatizada**

⬇️

**8️⃣ Validação através de CI/CD**

---

## 📖 Histórias de Usuário

Foram documentadas histórias relacionadas aos principais fluxos analisados:

| ID | Funcionalidade |
| --- | --- |
| **HU01** | Cadastro de usuário |
| **HU02** | Login |
| **HU03** | Carrinho de compras |

📄 [Consultar histórias de usuário](./docs/historia-do-usuario.md)

---

## ✅ Critérios de Aceite

Os critérios de aceite foram estruturados utilizando sintaxe **BDD — Given / When / Then**, facilitando a definição do comportamento esperado da aplicação.

Foram considerados cenários relacionados a:

- Cadastro válido
- Campos obrigatórios
- Dados inválidos
- Login válido
- Credenciais inválidas
- Autenticação
- Adição de produto ao carrinho
- Permanência do produto
- Informações apresentadas no carrinho

📄 [Consultar critérios de aceite](./docs/criterios-de-aceite.md)

---

## 🧪 Casos de Teste

Foram documentados **9 casos de teste**, contemplando fluxos positivos, negativos e validações complementares.

### Cobertura documentada

| Categoria | Quantidade |
| --- | ---: |
| Casos de teste | **9** |
| Testes positivos | **4** |
| Testes negativos | **3** |
| Validações complementares | **2** |

Os casos possuem:

- Pré-condições
- Passos de execução
- Resultado esperado
- Prioridade
- Tipo de teste
- Rastreabilidade com história de usuário
- Rastreabilidade com critério de aceite

📄 [Consultar casos de teste](./docs/casos-de-teste.md)

---

## 🔗 Rastreabilidade

A documentação foi organizada para manter a relação entre requisito, comportamento esperado e validação.

```text
História do Usuário
        ↓
Critério de Aceite
        ↓
Caso de Teste
        ↓
Automação selecionada
```

Exemplo:

```text
HU03 — Carrinho de Compras
        ↓
CA07 — Adicionar produto
        ↓
CT07 — Adicionar produto ao carrinho
        ↓
carrinho.cy.js
```

---

## 🤖 Automação com Cypress

A automação foi desenvolvida utilizando **Cypress + JavaScript**.

Atualmente o projeto possui dois testes automatizados.

### 🏠 Smoke Test — Home

Arquivo:

`cypress/e2e/home.cy.js`

Valida se a página inicial da aplicação pode ser acessada corretamente e se um elemento esperado está visível.

### 🛒 E2E — Carrinho de Compras

Arquivo:

`cypress/e2e/carrinho.cy.js`

O cenário automatizado valida o fluxo de:

```text
Acessar aplicação
      ↓
Acessar produtos
      ↓
Selecionar produto
      ↓
Adicionar ao carrinho
      ↓
Acessar carrinho
      ↓
Validar produto adicionado
```

A validação verifica especificamente se o produto selecionado está presente no carrinho.

---

## 📊 Cobertura automatizada

É importante diferenciar a documentação dos testes da cobertura atualmente automatizada.

| Cenário | Tipo | Automação |
| --- | --- | --- |
| Acesso à página inicial | Smoke | ✅ Automatizado |
| Adicionar produto ao carrinho | E2E / Funcional | ✅ Automatizado |
| Cadastro | Funcional | 📋 Documentado |
| Login | Funcional | 📋 Documentado |
| Demais cenários do carrinho | Funcional | 📋 Documentado |

> A automação contempla cenários selecionados do projeto, enquanto os demais permanecem documentados como parte da estratégia de testes.

---

## ⚙️ Integração Contínua — CI/CD

O projeto possui uma pipeline configurada utilizando **GitHub Actions**.

A cada:

- `push` realizado na branch `main`
- `pull_request` direcionado para a branch `main`

a pipeline executa automaticamente os testes Cypress.

### Fluxo da pipeline

```text
Commit / Pull Request
        ↓
GitHub Actions
        ↓
Checkout do projeto
        ↓
Configuração do Node.js
        ↓
Instalação das dependências
        ↓
Execução dos testes Cypress
        ↓
Resultado da execução
```

Workflow:

`.github/workflows/pipeline.yml`

---

## ✅ Status da automação

Os testes automatizados são executados através da pipeline do GitHub Actions.

```text
home.cy.js       ✅ PASS
carrinho.cy.js   ✅ PASS
```

Isso permite detectar automaticamente possíveis regressões nos cenários automatizados a cada nova alteração enviada ao repositório.

---

## 🗂️ Estrutura do projeto

```text
teste-tecnico-qa/
│
├── .github/
│   └── workflows/
│       └── pipeline.yml
│
├── cypress/
│   ├── e2e/
│   │   ├── carrinho.cy.js
│   │   └── home.cy.js
│   │
│   └── support/
│       └── e2e.js
│
├── docs/
│   ├── casos-de-teste.md
│   ├── criterios-de-aceite.md
│   ├── estimativa.md
│   └── historia-do-usuario.md
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🛠️ Tecnologias e ferramentas

<div align="center">

<img src="https://img.shields.io/badge/Cypress-Testes_E2E-17202C?style=for-the-badge&logo=cypress&logoColor=white">

<img src="https://img.shields.io/badge/JavaScript-Automação-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

<img src="https://img.shields.io/badge/Node.js-Runtime-339933?style=for-the-badge&logo=nodedotjs&logoColor=white">

<img src="https://img.shields.io/badge/GitHub_Actions-CI/CD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white">

<img src="https://img.shields.io/badge/Git-Versionamento-F05032?style=for-the-badge&logo=git&logoColor=white">

<img src="https://img.shields.io/badge/GitHub-Repositório-181717?style=for-the-badge&logo=github&logoColor=white">

</div>

---

## ▶️ Executando o projeto

### Pré-requisitos

- Node.js
- npm

### Clone o repositório

```bash
git clone https://github.com/laurajala/teste-tecnico-qa.git
```

### Acesse o projeto

```bash
cd teste-tecnico-qa
```

### Instale as dependências

```bash
npm install
```

### Abra o Cypress

```bash
npm run cy:open
```

### Execute os testes em modo headless

```bash
npm run cy:run
```

ou:

```bash
npm test
```

---

## ⏱️ Estimativa do desafio

O planejamento inicial considerou aproximadamente **4 horas e 30 minutos** para análise, documentação, automação, configuração da pipeline e revisão da entrega.

📄 [Consultar estimativa de esforço](./docs/estimativa.md)

---

## 💡 Competências demonstradas

`Quality Assurance` • `Manual Testing` • `Functional Testing`

`Test Design` • `Test Cases` • `BDD` • `Acceptance Criteria`

`Positive Testing` • `Negative Testing` • `Smoke Testing`

`Cypress` • `JavaScript` • `E2E Testing`

`Git` • `GitHub` • `CI/CD` • `GitHub Actions`

`Test Documentation` • `Requirements Traceability`

---

## 🚀 Possíveis evoluções

Como próximos passos, o projeto pode evoluir com:

- Ampliação da cobertura automatizada
- Automação dos cenários de login
- Automação do fluxo de cadastro
- Criação de comandos reutilizáveis
- Uso de fixtures para massa de testes
- Evidências automáticas de execução
- Relatórios de testes
- Novos cenários de regressão

---

## 👩‍💻 Autora

<div align="center">

### Laura Ajala

**Quality Assurance Engineer**

Testes Funcionais • Automação • APIs • Banco de Dados

<br>

<a href="https://www.linkedin.com/in/laura-ajala/">
<img src="https://img.shields.io/badge/LinkedIn-Laura_Ajala-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white">
</a>

<a href="https://github.com/laurajala">
<img src="https://img.shields.io/badge/GitHub-laurajala-181717?style=for-the-badge&logo=github&logoColor=white">
</a>

</div>

---

<div align="center">

### 🧪 Quality is built, tested and continuously improved.

**Obrigada pela visita! 🚀**

</div>
