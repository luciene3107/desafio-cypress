const { And } = require("cypress-cucumber-preprocessor/steps");
const loginPage = require("../pages/login.page");

And('preencher email e senha e clicar no botão Login', () => {
   loginPage.login()
})

