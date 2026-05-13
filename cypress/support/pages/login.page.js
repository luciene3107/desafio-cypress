const EMAIL_LOGIN = '[data-qa="login-email"]' 
const PASSWORD_LOGIN = '[data-qa="login-password"]'
const BTN_LOGIN = '[data-qa="login-button"]'

class login{
    login(){
        cy.get(EMAIL_LOGIN).type('lila01@teste.com');
        cy.get(PASSWORD_LOGIN).type('12345');
        cy.get(BTN_LOGIN).click()
    }
}
export default new login() 
