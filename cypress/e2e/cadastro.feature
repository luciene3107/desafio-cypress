#utf-8
#language: pt

Funcionalidade: Cadastrar novo usuário
    Cenário: Cadastrar novo usuário
        Dado que acesso o portal Automation Exercise
        Quando clicar no link Signup
        E preencher nome e email e clicar no botão Signup
        E preencher Enter Account Information
        E preencher Address Information e clicar no botão Create Account
        Então valido que o cadastro foi realizado com sucesso

    Cenário: Fluxo de Compra
        Dado que acesso o portal Automation Exercise
        Quando clicar no link Signup
        E realizo login com o usuário cadastrado
        E visualizo os detalhes do produto Men Tshirt
        E adiciono o produto no carrinho
        E clico no link do carrinho
        E valido nome, preço unitário e o total devem corresponder ao valor anotado
        E adiciono o numero do cartão e clico no botão Pay and Confirm Order
        Então valido que o pedido foi realizado com sucesso




