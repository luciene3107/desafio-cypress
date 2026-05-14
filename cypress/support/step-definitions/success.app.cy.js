const { Then } = require("cypress-cucumber-preprocessor/steps");
const validacaoAccount = require("../pages/success.page");


Then ('valido que o cadastro foi realizado com sucesso', () => {
    validacaoAccount.validacaoAccount()
})
