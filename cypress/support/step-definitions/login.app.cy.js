import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import loginPage from "../pages/login.page";

And('preencher email e senha e clicar no botão Login', () => {
   loginPage.login()
})

