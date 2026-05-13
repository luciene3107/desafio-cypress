import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import validacaoAccount from "../pages/success.page";


Then ('valido que o cadastro foi realizado com sucesso', () => {
    validacaoAccount.validacaoAccount()
})