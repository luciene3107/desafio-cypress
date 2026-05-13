import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import formCreatePage from "../pages/formCreate.page";

And('preencher nome e email e clicar no botão Signup', () => {
    formCreatePage.preencherFormulario()
})

