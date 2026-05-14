const { And } = require("cypress-cucumber-preprocessor/steps");
const formCreatePage = require("../pages/formCreate.page");

And('preencher nome e email e clicar no botão Signup', () => {
    formCreatePage.preencherFormulario()
})

