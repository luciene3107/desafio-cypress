const EMAIL_LOGIN = '[data-qa="login-email"]' 
const PASSWORD_LOGIN = '[data-qa="login-password"]'
const BTN_LOGIN = '[data-qa="login-button"]'



class login{
    login(){
        cy.task('recuperaDadosSignup').then((usuario) => {           
            cy.get(EMAIL_LOGIN).type(usuario.email);
            cy.get(PASSWORD_LOGIN).type(usuario.password);
            cy.get(BTN_LOGIN).click()
        });
    }
}

module.exports = new login() 
