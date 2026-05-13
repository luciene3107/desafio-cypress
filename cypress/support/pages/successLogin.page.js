/* const CREATE_SUCCESS = '[data-qa="account-created"]'
const CONTINUE = '[data-qa="continue-button"]'

class validacaoLogin {
    validacaoLogin(){
         cy.get(CREATE_SUCCESS).should('be.visible').and('contain', 'Account Created!');
         cy.get(CONTINUE).click()
    }
}
export default new validacaoLogin() */