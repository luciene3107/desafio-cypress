const CREATE_SUCCESS = '[data-qa="account-created"]'
const CONTINUE = '[data-qa="continue-button"]'
const LOGOUT = 'a > .fa-lock:eq(0)'

class validacaoAccount {
    validacaoAccount() {
        cy.get(CREATE_SUCCESS).should('be.visible').and('contain', 'Account Created!');
        cy.get(CONTINUE).click()
        cy.get(LOGOUT).click()
    }
}
export default new validacaoAccount()