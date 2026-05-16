# Desafio Cypress - Automation Exercise

Projeto de automação de testes Web e API desenvolvido com Cypress, Cucumber e Page Object Model para validar fluxos do e-commerce [Automation Exercise](https://www.automationexercise.com).

## Objetivo

Automatizar cenários de cadastro, login, compra e criação de usuário via API, aplicando boas práticas de organização, separação de responsabilidades e uso de dados dinâmicos.

## Tecnologias

- Cypress
- Cucumber BDD
- JavaScript
- Page Object Model
- Faker

## Sistema Alvo

```text
https://www.automationexercise.com
```

## Cenários Automatizados

### Web UI

Arquivo:

```text
cypress/e2e/cadastro.feature
```

Cenários cobertos:

- Cadastro de novo usuário pela interface
- Login com usuário cadastrado
- Localização do produto `Men Tshirt`
- Acesso aos detalhes do produto
- Captura de nome e preço do produto
- Inclusão do produto no carrinho
- Validação dos dados do produto no carrinho
- Fluxo de pagamento e validação de pedido realizado com sucesso

### API

Arquivo:

```text
cypress/e2e/back-end/cadastro-API.feature
```

Cenários cobertos:

- Criação de usuário via API usando o endpoint `/api/createAccount`
- Validação do `responseCode` 201
- Validação da mensagem `User created!`
- Validação da estrutura da resposta
- Integração API + UI: criação de usuário via API e login pela interface

## Estrutura do Projeto

```text
cypress/
  e2e/
    cadastro.feature
    back-end/
      cadastro-API.feature
  support/
    pages/
      API/
        cadastro-API.page.js
      *.page.js
    step-definitions/
      cadastro.app.cy.js
      fluxoCompra.app.cy.js
      login.app.cy.js
      cadastro-api/
        cadastro-api.app.cy.js
    commands.js
    e2e.js
cypress.config.js
package.json
```

## Arquitetura

- As features ficam em `cypress/e2e`, escritas em Gherkin.
- Os steps ficam em `cypress/support/step-definitions`.
- As ações da interface ficam separadas em Page Objects dentro de `cypress/support/pages`.
- A lógica da requisição de cadastro via API fica isolada em `cypress/support/pages/API/cadastro-API.page.js`.
- Os dados de teste são gerados dinamicamente com Faker em `cypress.config.js`.

## Pré-requisitos

- Node.js instalado
- npm instalado

## Instalação

```bash
npm install
```

## Como Executar

Abrir o Cypress em modo interativo:

```bash
npx cypress open
```

Executar todos os testes em modo headless:

```bash
npx cypress run
```

Executar somente a feature Web:

```bash
npx cypress run --spec "cypress/e2e/cadastro.feature"
```

Executar somente a feature de API:

```bash
npx cypress run --spec "cypress/e2e/back-end/cadastro-API.feature"
```

## Dados Dinâmicos

Os dados usados nos testes são gerados dinamicamente com Faker, incluindo:

- nome
- email
- senha
- endereço
- telefone
- dados de nascimento
- dados de cartão para o fluxo de pagamento

Isso evita reutilização de emails e reduz dependência de massa fixa.

