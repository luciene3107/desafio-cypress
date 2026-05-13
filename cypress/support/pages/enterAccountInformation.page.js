const TITLE = '#id_gender2';
const PASSWORD = '[data-qa="password"]';


class enterAccountInformation {
    enterAccountInformation() {
        cy.get(TITLE).check().should('be.checked');
        cy.get(PASSWORD).type('12345');        
    }

}

export default new enterAccountInformation()