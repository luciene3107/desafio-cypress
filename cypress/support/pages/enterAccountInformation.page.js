const TITLE = '#id_gender2';
const PASSWORD = '[data-qa="password"]';


class enterAccountInformation {
    enterAccountInformation() {
         cy.task('recuperaDadosSignup').then((usuario) => {           
            cy.get(TITLE).check().should('be.checked');
            cy.get(PASSWORD).type(usuario.password);            
        });

       
           
    }

}

module.exports = new enterAccountInformation()
