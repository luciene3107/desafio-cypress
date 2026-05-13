const NOME_INPUT = '[data-qa="signup-name"]'
const EMAIL_INPUT = '[data-qa="signup-email"]'
const BOTAO_SIGNUP = '[data-qa="signup-button"]'

class formulario{
    preencherFormulario(){
        cy.get(NOME_INPUT).type('Lila');
        cy.get(EMAIL_INPUT).type('lila10@teste.com');
        cy.get(BOTAO_SIGNUP).click()
    }
}
export default new formulario() 


