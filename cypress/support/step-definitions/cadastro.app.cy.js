const { Given, Then, And } = require("cypress-cucumber-preprocessor/steps");
const portalPage = require("../pages/portal.page");
const enterAccountInformation = require("../pages/enterAccountInformation.page");
const addressInformationPage = require("../pages/addressInformation.page");
const formCreatePage = require("../pages/formCreate.page");
const validacaoAccount = require("../pages/success.page");


Given('que acesso o portal Automation Exercise', () => {
    cy.visit('/')
})

And('clicar no link Signup', () => {
   portalPage.acessarSignup()
})

And('preencher nome e email e clicar no botão Signup', () => {
    formCreatePage.preencherFormulario()
})

And ('preencher Enter Account Information', () => {
    enterAccountInformation.enterAccountInformation()
})

And ('preencher Address Information e clicar no botão Create Account', () => {
    addressInformationPage.addressInformation()
})

Then ('valido que o cadastro foi realizado com sucesso', () => {
    validacaoAccount.validacaoAccount()
})
