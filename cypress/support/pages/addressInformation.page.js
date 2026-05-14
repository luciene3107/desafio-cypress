const FIRST_NAME = '[data-qa="first_name"]';
const LAST_NAME = '[data-qa="last_name"]';
const ADDRESS = '[data-qa="address"]';
const COUNTRY = '[data-qa="country"]';
const STATE = '[data-qa="state"]';
const CITY = '[data-qa="city"]';
const ZIP_CODE = '[data-qa="zipcode"]';
const MOBILE_NUMBER = '[data-qa="mobile_number"]';
const BTN_CREATE = '[data-qa="create-account"]';

class addressInformation {
    addressInformation() {
        cy.task('recuperaDadosSignup').then((usuario) => {
            cy.get(FIRST_NAME).type(usuario.nome);
            cy.get(LAST_NAME).should('be.visible').type(usuario.lastName);
            cy.get(ADDRESS).should('be.visible').type(usuario.address);
            cy.get(COUNTRY).select('Canada').should('have.value', 'Canada')
            cy.get(STATE).should('be.visible').type(usuario.state);
            cy.get(CITY).should('be.visible').type(usuario.city)
            cy.get(ZIP_CODE).should('be.visible').type(usuario.zipcode)
            cy.get(MOBILE_NUMBER).should('be.visible').type(usuario.phone)
            cy.get(BTN_CREATE).click()

        });

    }
}



module.exports = new addressInformation()


