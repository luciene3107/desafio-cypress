#utf-8
#language: pt

Funcionalidade: Cadastro de usuário via API
  Cenário: Criar usuário via API com dados dinâmicos
    Dado que possuo dados de usuário válidos gerados dinamicamente
    Quando cadastro o usuário via API
    Então valido o retorno de criação do usuário via API

  Cenário: Criar usuário via API e logar via UI
    Dado que possuo dados de usuário válidos gerados dinamicamente
    E cadastro o usuário via API
    E que acesso o portal Automation Exercise
    E clicar no link Signup
    Quando realizo login com o usuário cadastrado
    Então visualizo a opção de logout e o nome do usuário logado
