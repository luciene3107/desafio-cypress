const NOME_INPUT = '[data-qa="signup-name"]'
const EMAIL_INPUT = '[data-qa="signup-email"]'
const BOTAO_SIGNUP = '[data-qa="signup-button"]'

class formulario{
    preencherFormulario(){
        cy.task('gerarDadosSignup').then((usuario) => {
            cy.get(NOME_INPUT).type(usuario.nome);
            cy.get(EMAIL_INPUT).type(usuario.email);
            cy.get(BOTAO_SIGNUP).click()
        });
    }
}
module.exports = new formulario() 
